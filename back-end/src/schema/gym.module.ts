import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TraineeSchema } from './trainee.schema';
import { GymController } from './gym.controller';
import { GymService } from './gym.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Trainee', schema: TraineeSchema }])],
  controllers: [GymController],
  providers: [GymService],
})
export class GymModule {}