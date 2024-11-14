// src/my-service.service.ts
import { Injectable } from '@nestjs/common';
import { EntityManager, MikroORM } from '@mikro-orm/postgresql';  // Import PostgreSQL driver

@Injectable()
export class MyService {
  constructor(
    private readonly orm: MikroORM,     // Inject MikroORM for accessing ORM methods
    private readonly em: EntityManager, // Inject EntityManager for database transactions
  ) {}

  async someMethod() {
    const user = await this.em.findOne('User', { id: 1 }); // Example query
    console.log(user);
  }
}
