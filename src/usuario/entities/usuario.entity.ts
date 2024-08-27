import { BeforeInsert, Column, Entity, PrimaryColumn, Unique } from "typeorm";
const { nanoid } = require("nanoid")

@Entity('usuario')
export class Usuario {
    @PrimaryColumn()
    id: string;

    @Column()
    nome: string;

    @Column()
    email: string;

    @BeforeInsert()
    gerarId() {
        this.id = nanoid();
    }
}
