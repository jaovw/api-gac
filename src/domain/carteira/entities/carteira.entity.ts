import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";
const { nanoid } = require("nanoid")

@Entity('carteira')
export class Carteira {
    @PrimaryColumn()
    id: string;

    @Column()
    id_usuario: string;

    @Column({ default: 1000, nullable: false })
    saldo: number;

    @BeforeInsert()
    gerarId() {
        this.id = nanoid();
    }
}
