import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import config from './mikro-orm.config'; // Explicitly import MikroORM config
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyService } from './my-service.service';  // Import your service

@Module({
  imports: [
    MikroOrmModule.forRoot(config),  // Pass config directly to forRoot()
  ],
  controllers: [AppController],
  providers: [AppService, MyService],
})
export class AppModule {}
