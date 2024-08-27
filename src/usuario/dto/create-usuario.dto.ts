import { IsEmail, IsString } from "class-validator";

export class CreateUsuarioDto {

    @IsString()
    nome: string;

    @IsEmail()
    email: string;
}
