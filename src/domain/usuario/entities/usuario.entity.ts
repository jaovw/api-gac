import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";
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
}
