import { IsNoEmpy } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Postagem } from "../../entities/postagem.entity";

@Entity({name: "tb_temas"})
export class Tema{

    @PrimaryGeneratedColumn()
    id: number

    @IsNoEmpy()
    @Column({length: 255, nullable: false})
    descricao: string

    @OneToMany(() => Postagem, (postagem) => postagem.tema)
    postagem: Postagem[]
}

