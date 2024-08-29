import { Body, Controller, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { TransacaoService } from './transacao.service';
import { CreateTransacaoDto } from './dto/create-transacao.dto';

@UseGuards(AuthGuard)
@Controller('transacao')
export class TransacaoController {
    constructor(private readonly transacaoService: TransacaoService) {}

    @Post()
    async create(@Body() createUsuarioDto: CreateTransacaoDto) {
        return await this.transacaoService.criarTransacao(createUsuarioDto);
    }

    @Post('reverter/:id_transacao')
    async revert(@Param('id_transacao') id_transacao: string) {
        return await this.transacaoService.reverterTransacao(id_transacao);
    }
}
