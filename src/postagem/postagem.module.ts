import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostagemController } from "./controllers/postagem.controller";
import { Postagem } from "./entities/postagem.entity"; // Corrigir caminho
import { PostagemService } from "./services/postagem.service"; // Corrigir caminho
import { Tema } from "./tema/entities/tema.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Postagem]) Tema],
    providers: [PostagemService, TemaService],
    controllers: [PostagemController],
    exports: [TypeOrmModule]
})
export class PostagemModule {}


