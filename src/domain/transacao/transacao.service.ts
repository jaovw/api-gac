import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Transacao } from './entities/transacao.entity';
import { EntityManager, In, Repository } from 'typeorm';
import { CreateTransacaoDto } from './dto/create-transacao.dto';
import { Carteira } from '../carteira/entities/carteira.entity';

@Injectable()
export class TransacaoService {
    constructor(
        @InjectRepository(Transacao)
        private readonly transacaoRepository: Repository<Transacao>,
    ){}

    async criarTransacao(dto: CreateTransacaoDto) {
        const { valor, id_usuario_de, id_usuario_para } = dto;

        return await this.transacaoRepository.manager.transaction(async (transactionalEntityManager: EntityManager) => {

            const carteira_de = await transactionalEntityManager.findOne(Carteira, { where: { id_usuario: id_usuario_de } });
            const carteira_para = await transactionalEntityManager.findOne(Carteira, { where: { id_usuario: id_usuario_para } });

            if (!carteira_de || !carteira_para) throw new NotFoundException('Usuários não encontrados');
            if (carteira_de.saldo < valor) throw new BadRequestException('Saldo insuficiente');

            carteira_de.saldo -= valor;
            carteira_para.saldo += valor;

            await transactionalEntityManager.save(Carteira, [carteira_de, carteira_para]);

            const transacao = this.transacaoRepository.create({
                valor,
                id_carteira: carteira_de.id,
                id_usuario_de,
                id_usuario_para,
                revertido: false,
                data_criacao: new Date(),
            });

            await transactionalEntityManager.save(Transacao, transacao);

            return transacao;
        });
    }

    async reverterTransacao(id_transacao: string) {
        return await this.transacaoRepository.manager.transaction(async (transactionalEntityManager: EntityManager) => {

            const transacao = await transactionalEntityManager.findOne(Transacao, { where: { id: id_transacao } });

            if (!transacao) throw new NotFoundException('Transação não encontrada');

            const carteira_de = await transactionalEntityManager.findOne(Carteira, { where: { id: transacao.id_carteira } });
            const carteira_para = await transactionalEntityManager.findOne(Carteira, { where: { id_usuario: transacao.id_usuario_para } });

            if (!carteira_de || !carteira_para) throw new NotFoundException('Carteiras dos usuários envolvidos não encontradas')

            carteira_de.saldo += transacao.valor;
            carteira_para.saldo -= transacao.valor;

            await transactionalEntityManager.save(Carteira, [carteira_de, carteira_para]);
            await transactionalEntityManager.save(Transacao, { id: id_transacao, revertido: true });


            // Opcional
            // await transactionalEntityManager.remove(Transacao, transacao);

            return { message: 'Transação revertida com sucesso' };
        });
    }
}
