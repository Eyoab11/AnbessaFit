import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { GymService } from './gym.service';
import { Trainee } from './trainee.schema';

@Controller('gym')
export class GymController {
  constructor(private readonly gymService: GymService) {}

  @Post()
  async createTrainee(@Body() trainee: Trainee): Promise<Trainee> {
    return this.gymService.createTrainee(trainee);
  }

  @Get()
  async getAllTrainees(): Promise<Trainee[]> {
    return this.gymService.getAllTrainees();
  }

  @Get(':id')
  async getTraineeById(@Param('id') id: string): Promise<Trainee> {
    return this.gymService.getTraineeById(id);
  }

  @Put(':id')
  async updateTrainee(@Param('id') id: string, @Body() trainee: Trainee): Promise<Trainee> {
    return this.gymService.updateTrainee(id, trainee);
  }

  @Delete(':id')
  async deleteTrainee(@Param('id') id: string): Promise<void> {
    return this.gymService.deleteTrainee(id);
  }
}
