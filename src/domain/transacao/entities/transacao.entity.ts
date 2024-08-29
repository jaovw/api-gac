import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";
const { nanoid } = require("nanoid")

@Entity('transacao')
export class Transacao {
    @PrimaryColumn()
    id: string;

    @Column()
    valor: number;

    @Column({ nullable: false })
    id_carteira: string;

    @Column({ nullable: false })
    id_usuario_para: string;

    @Column({ nullable: false })
    id_usuario_de: string;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    data_criacao: Date;

    @Column()
    revertido: boolean;

    @BeforeInsert()
    gerarId() {
        this.id = nanoid();
    }
}
