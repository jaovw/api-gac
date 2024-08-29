import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { CarteiraService } from './carteira.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateCarteiraDto } from './dto/create-carteira.dto';

@UseGuards(AuthGuard)
@Controller('carteira')
export class CarteiraController {
    constructor(private readonly carteiraService: CarteiraService) {}

    @Post()
        create(@Body() createCarteiraDto: CreateCarteiraDto) {
        return this.carteiraService.create(createCarteiraDto);
    }
}
