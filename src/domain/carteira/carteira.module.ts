import { Module } from '@nestjs/common';
import { CarteiraController } from './carteira.controller';
import { CarteiraService } from './carteira.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carteira } from './entities/carteira.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Carteira])],
  exports: [CarteiraService],
  controllers: [CarteiraController],
  providers: [CarteiraService]
})
export class CarteiraModule {}
