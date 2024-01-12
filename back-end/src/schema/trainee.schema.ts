import * as mongoose from 'mongoose';

export const TraineeSchema = new mongoose.Schema({
  task: { type: String, required: true },
  set: { type: Number, required: true },
  rep: { type: Number, required: true },
  date: { type: Date, required: true, default: Date.now },
});

export interface Trainee {
  task: string;
  set: number;
  rep: number;
  date: Date;
}

export const TraineeModel = mongoose.model('Trainee', TraineeSchema);