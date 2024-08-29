import { Body, Injectable, NotFoundException, Param, Patch } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Carteira } from './entities/carteira.entity';
import { Repository } from 'typeorm';
import { CreateCarteiraDto } from './dto/create-carteira.dto';
import { UpdateCarteiraDto } from './dto/update-carteira.dto';

@Injectable()
export class CarteiraService {
    constructor(
        @InjectRepository(Carteira)
        private readonly carteiraRepository: Repository<Carteira>
    ){}

    create(dto: CreateCarteiraDto) {
        const carteira = this.carteiraRepository.create(dto);
        return this.carteiraRepository.save(carteira);
    }

    async update(id_usuario: string, dto: UpdateCarteiraDto) {
    const carteira = await this.carteiraRepository.findOneBy({ idUsuario: id_usuario });
        if (!carteira) return null;
        this.carteiraRepository.merge(carteira, dto);
        return this.carteiraRepository.save(carteira);
    }
}
