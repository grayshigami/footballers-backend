import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateForwardDto } from './dto/create-forward.dto';
import { UpdateForwardDto } from './dto/update-forward.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Forward } from './entities/forward.entity';
import { Model } from 'mongoose';

@Injectable()
export class ForwardsService {
  constructor(
    @InjectModel(Forward.name)
    private readonly forwardModel: Model<Forward>
  ) {}

  async create(createForwardDto: CreateForwardDto): Promise<Forward> {
    const createdForward = await this.forwardModel.create(createForwardDto);
    return createdForward.save();
  }

  async findAll(): Promise<Forward[]> {
    return await this.forwardModel.find().exec();
  }

  async update(id: string, updateForwardDto: UpdateForwardDto): Promise<Forward> {
    const updatedForward = await this.forwardModel.findByIdAndUpdate(id, updateForwardDto, { new: true }).exec();

    if (!updatedForward)
      throw new NotFoundException(`Forward with id ${id} not found`);

    return updatedForward;
  }

  async remove(id: string): Promise<void> {
    const result = await this.forwardModel.findByIdAndDelete(id).exec();

    if (!result)
      throw new NotFoundException(`Forward with id ${id} not found`);
  }
}
