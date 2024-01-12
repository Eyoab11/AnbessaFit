import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GymModule } from './schema/gym.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/gym-trainee-db'),
    GymModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
