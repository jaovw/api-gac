import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCarteiraDto {

    @IsString()
    id_usuario: string;

    @IsNotEmpty()
    @IsNumber()
    saldo: number;
}