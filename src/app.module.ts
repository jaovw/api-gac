import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './domain/usuario/usuario.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { CarteiraModule } from './domain/carteira/carteira.module';
import { TransacaoModule } from './domain/transacao/transacao.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    UsuarioModule,
    AuthModule,
    CarteiraModule,
    TransacaoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
