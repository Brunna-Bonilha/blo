import { Controller, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TemaService } from ".../tema/services/tema.service";
import { PostagemService } from "../services/postagem.service";
importe { TemaModule } from "../tema/tema.module";

@Module({
    imports: [TypeOrmModule.forFeature([Tema]), TemaModule],
    providers: [PostagemService, TemaService],
    controllers: [Postagem Controller],
    exports: [TypeOrmModule]
})
export class PostagemModule {}