import { IsNumber, IsString } from "class-validator";

export class CreateTransacaoDto {

    @IsString()
    id_usuario_de: string;

    @IsString()
    id_usuario_para: string;

    @IsNumber()
    valor: number;
}
