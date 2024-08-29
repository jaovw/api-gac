import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync as bcryptCompareSync } from "bcrypt";
import { UsuarioService } from 'src/domain/usuario/usuario.service';
import { AuthResponseDto } from './auth.dto';
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AuthService {
    private jwtExpirationTimeInSeconds: number;

    constructor(
        private readonly usuarioService: UsuarioService,
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService
    ){
        this.jwtExpirationTimeInSeconds = +this.configService.get<number>('JWT_EXPIRATION_TIME');
    }

    async signIn(username: string, password: string): Promise<AuthResponseDto> {
        const usuario = await this.usuarioService.findByUsername(username);

        if (!usuario || !bcryptCompareSync(password, usuario.password)) {
            throw new UnauthorizedException();
        }

        const payload = { sub: usuario.id, username: usuario.username };

        const token = this.jwtService.sign(payload);

        return { token, expiresIn: this.jwtExpirationTimeInSeconds }
    }
}
