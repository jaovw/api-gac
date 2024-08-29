import { Module } from '@nestjs/common';
import { TransacaoController } from './transacao.controller';
import { TransacaoService } from './transacao.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transacao } from './entities/transacao.entity';
import { Usuario } from '../usuario/entities/usuario.entity';
import { Carteira } from '../carteira/entities/carteira.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Transacao, Usuario, Carteira])],
  exports: [TransacaoService],
  controllers: [TransacaoController],
  providers: [TransacaoService]
})
export class TransacaoModule {}
