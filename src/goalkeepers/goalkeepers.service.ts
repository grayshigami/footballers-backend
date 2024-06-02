import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGoalkeeperDto } from './dto/create-goalkeeper.dto';
import { UpdateGoalkeeperDto } from './dto/update-goalkeeper.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Goalkeeper } from './entities/goalkeeper.entity';
import { Model } from 'mongoose';

@Injectable()
export class GoalkeepersService {
  constructor(
    @InjectModel(Goalkeeper.name)
    private readonly goalkeeperModel: Model<Goalkeeper>
  ) {}

  async create(createGoalkeeperDto: CreateGoalkeeperDto): Promise<Goalkeeper> {
    const createdGoalkeeper = await this.goalkeeperModel.create(createGoalkeeperDto);
    return createdGoalkeeper.save();
  }

  async findAll(): Promise<Goalkeeper[]> {
    return await this.goalkeeperModel.find().exec();
  }

  async update(id: string, updateGoalkeeperDto: UpdateGoalkeeperDto): Promise<Goalkeeper> {
    const updatedGoalkeeper = await this.goalkeeperModel.findByIdAndUpdate(id, updateGoalkeeperDto, { new: true }).exec();

    if (!updatedGoalkeeper)
      throw new NotFoundException(`Forward with id ${id} not found`);

    return updatedGoalkeeper;
  }

  async remove(id: string): Promise<void> {
    const result = await this.goalkeeperModel.findByIdAndDelete(id).exec();

    if (!result)
      throw new NotFoundException(`Forward with id ${id} not found`);
  }
}
