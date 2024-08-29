import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCarteiraDto {

    @IsString()
    idUsuario: string;

    @IsNotEmpty()
    @IsNumber()
    saldo: number;
}