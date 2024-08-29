import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UsuarioModule } from 'src/domain/usuario/usuario.module';
import { CarteiraModule } from 'src/domain/carteira/carteira.module';

@Module({
  imports: [
    JwtModule.registerAsync({
      global: true,
      imports: [],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: +configService.get<number>('JWT_EXPIRATION_TIME') }
      }),
      inject: [ConfigService],
    }),
    UsuarioModule,
    CarteiraModule
  ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
