import { Usuario } from "src/domain/usuario/entities/usuario.entity";
import { BeforeInsert, Column, Entity, OneToOne, PrimaryColumn } from "typeorm";
const { nanoid } = require("nanoid")

@Entity('carteira')
export class Carteira {
    @PrimaryColumn()
    id: string;

    @Column({ name: 'id_usuario' })
    idUsuario: string;

    @Column({ default: 0, nullable: false })
    saldo: number;

    @BeforeInsert()
    gerarId() {
        this.id = nanoid();
    }

    @OneToOne(() => Usuario, (usuario) => usuario.id)
    usuario: Usuario;
}
