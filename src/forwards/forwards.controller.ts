import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ForwardsService } from './forwards.service';
import { CreateForwardDto } from './dto/create-forward.dto';
import { UpdateForwardDto } from './dto/update-forward.dto';
import { Forward } from './entities/forward.entity';

@Controller('forwards')
export class ForwardsController {
  constructor(private readonly forwardsService: ForwardsService) {}

  @Post()
  async create(@Body() createForwardDto: CreateForwardDto): Promise<Forward> {
    return await this.forwardsService.create(createForwardDto);
  }

  @Get()
  async findAll(): Promise<Forward[]> {
    return await this.forwardsService.findAll();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateForwardDto: UpdateForwardDto): Promise<Forward> {
    return await this.forwardsService.update(id, updateForwardDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return await this.forwardsService.remove(id);
  }
}
