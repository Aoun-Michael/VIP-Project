import { Injectable, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { EntityManager, MikroORM } from '@mikro-orm/core';

@Injectable()
export class MyService {
  constructor(
    private readonly orm: MikroORM,
    private readonly em: EntityManager,
  ) {}
}

@Module({
  imports: [
    MikroOrmModule.forRoot({
      entities: ['./dist/entities'],
      entitiesTs: ['./src/entities'],
      dbName: 'my-db-name',
      clientUrl: 'postgresql://admin:admin@localhost:5432/my-db-name', // Replace with your actual PostgreSQL credentials
      driver: PostgreSqlDriver,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, MyService],
})
export class AppModule {}
