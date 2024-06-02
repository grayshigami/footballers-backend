import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDefenderDto } from './dto/create-defender.dto';
import { UpdateDefenderDto } from './dto/update-defender.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Defender } from './entities/defender.entity';
import { Model } from 'mongoose';

@Injectable()
export class DefendersService {
  constructor(
    @InjectModel(Defender.name)
    private readonly defenderModel: Model<Defender>
  ) {}

  async create(createDefenderDto: CreateDefenderDto): Promise<Defender> {
    const createdDefender = await this.defenderModel.create(createDefenderDto);
    return createdDefender.save();
  }

  async findAll(): Promise<Defender[]> {
    return await this.defenderModel.find().exec();
  }

  async update(id: string, updateDefenderDto: UpdateDefenderDto): Promise<Defender> {
    const updatedDefender = await this.defenderModel.findByIdAndUpdate(id, updateDefenderDto, { new: true }).exec();

    if (!updatedDefender)
      throw new NotFoundException(`Forward with id ${id} not found`);

    return updatedDefender;
  }

  async remove(id: string): Promise<void> {
    const result = await this.defenderModel.findByIdAndDelete(id).exec();

    if (!result)
      throw new NotFoundException(`Forward with id ${id} not found`);
  }
}
