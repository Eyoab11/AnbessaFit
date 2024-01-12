import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Trainee, TraineeModel } from './trainee.schema';

@Injectable()
export class GymService {
  constructor(@InjectModel('Trainee') private readonly traineeModel: Model<Trainee>) {}

  async createTrainee(trainee: Trainee): Promise<Trainee> {
    const createdTrainee = new this.traineeModel(trainee);
    return createdTrainee.save();
  }

  async getAllTrainees(): Promise<Trainee[]> {
    return this.traineeModel.find().exec();
  }

  async getTraineeById(id: string): Promise<Trainee> {
    return this.traineeModel.findById(id).exec();
  }

  async updateTrainee(id: string, trainee: Trainee): Promise<Trainee> {
    return this.traineeModel.findByIdAndUpdate(id, trainee, { new: true }).exec();
  }

  async deleteTrainee(id: string): Promise<void> {
    await this.traineeModel.findByIdAndDelete(id).exec();
  }
}