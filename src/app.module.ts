import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './postagem/entities/postagem.entity';
import { PostagemModule } from './postagem/postagem.module';
import { Tema } from './tema/entities/tema.entity';
import { TemaModule } from './postagem/tema/tema.module';
import { UsuarioLogin } from '../test/auth/entities/usuariologin.entity';
import { UsuarioModule } from '../test/usuario/usuario.module';



@Module({
  imports: [
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'db_blogpessoal',
    entities: [Postagem, Tema, Usuario],
    synchronize: true,
  }),
  PostagemModule,
  TemaModule,
  AuthModule,
  UsuarioModule,
],
    controllers: [],
    providers: [],
})
export class AppModule {}
