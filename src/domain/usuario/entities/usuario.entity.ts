import { Carteira } from "src/domain/carteira/entities/carteira.entity";
import { BeforeInsert, Column, Entity,OneToOne, PrimaryColumn } from "typeorm";
const { nanoid } = require("nanoid")

@Entity('usuario')
export class Usuario {
    @PrimaryColumn()
    id: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @BeforeInsert()
    gerarId() {
        this.id = nanoid();
    }

    @OneToOne(() => Carteira, (carteira) => carteira.idUsuario)
    carteira: Carteira;
}
