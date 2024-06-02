import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMidfielderDto } from './dto/create-midfielder.dto';
import { UpdateMidfielderDto } from './dto/update-midfielder.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Midfielder } from './entities/midfielder.entity';
import { Model } from 'mongoose';

@Injectable()
export class MidfieldersService {
  constructor(
    @InjectModel(Midfielder.name)
    private readonly midfielderModel: Model<Midfielder>
  ) {}

  async create(createMidfielderDto: CreateMidfielderDto): Promise<Midfielder> {
    const createdMidfielder = await this.midfielderModel.create(createMidfielderDto);
    return createdMidfielder.save();
  }

  async findAll(): Promise<Midfielder[]> {
    return await this.midfielderModel.find().exec();
  }

  async update(id: string, updateMidfielderDto: UpdateMidfielderDto): Promise<Midfielder> {
    const updatedMidfielder = await this.midfielderModel.findByIdAndUpdate(id, updateMidfielderDto, { new: true }).exec();

    if (!updatedMidfielder)
      throw new NotFoundException(`Forward with id ${id} not found`);

    return updatedMidfielder;
  }

  async remove(id: string): Promise<void> {
    const result = await this.midfielderModel.findByIdAndDelete(id).exec();

    if (!result)
      throw new NotFoundException(`Forward with id ${id} not found`);
  }
}
