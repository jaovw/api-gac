import { Test, TestingModule } from '@nestjs/testing';
import { UsuarioService } from './usuario.service';
import { Usuario } from './entities/usuario.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';

describe('UsuarioService', () => {
  let service: UsuarioService;
  let repository: Repository<Usuario>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsuarioService,
        {
          provide: getRepositoryToken(Usuario),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<UsuarioService>(UsuarioService);
    repository = module.get<Repository<Usuario>>(getRepositoryToken(Usuario));
  });

  describe('create', () => {
    it('should create and save a new user', async () => {
      const dto: CreateUsuarioDto = { username: 'joao', password: '12345' };
      const usuario = { id: '1', ...dto };

      jest.spyOn(repository, 'create').mockReturnValue(usuario as Usuario);
      jest.spyOn(repository, 'save').mockResolvedValue(usuario as Usuario);

      expect(await service.create(dto)).toEqual(usuario);
      expect(repository.create).toHaveBeenCalledWith(dto);
      expect(repository.save).toHaveBeenCalledWith(usuario);
    });
  });

  // Testes para os outros métodos abaixo
});
