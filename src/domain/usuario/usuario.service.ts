import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { hashSync as bcryptHashSync } from "bcrypt";
import { Carteira } from '../carteira/entities/carteira.entity';
import { CreateCarteiraDto } from '../carteira/dto/create-carteira.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,

    @InjectRepository(Carteira)
    private readonly carteiraRepository: Repository<Carteira>,
  ){}

  async create(dto: CreateUsuarioDto) {
    const usuario = this.usuarioRepository.create(dto);
    usuario.password = bcryptHashSync(usuario.password, 10);
    const novo_usuario = await this.usuarioRepository.save(usuario);

    const createCarteiraDto = new CreateCarteiraDto();
    createCarteiraDto.id_usuario = novo_usuario.id;

    const carteira = this.carteiraRepository.create(createCarteiraDto);
    await this.carteiraRepository.save(carteira);
    return novo_usuario;
  }

  findAll() {
    return this.usuarioRepository.find();
  }

  async findByUsername(username: string) {
    return await this.usuarioRepository.findOneBy({ username });
  }

  findOne(id: string) {
    return this.usuarioRepository.findOneBy({ id });
  }

  async update(id: string, dto: UpdateUsuarioDto) {
    const usuario = await this.usuarioRepository.findOneBy({ id });
    if (!usuario) return null;
    this.usuarioRepository.merge(usuario, dto);
    return this.usuarioRepository.save(usuario);
  }

  async remove(id: string) {
    const usuario = await this.usuarioRepository.findOneBy({ id });
    if (!usuario) return null;
    return this.usuarioRepository.remove(usuario);
  }
}
