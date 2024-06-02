import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { MidfieldersService } from './midfielders.service';
import { CreateMidfielderDto } from './dto/create-midfielder.dto';
import { UpdateMidfielderDto } from './dto/update-midfielder.dto';
import { Midfielder } from './entities/midfielder.entity';

@Controller('midfielders')
export class MidfieldersController {
  constructor(private readonly midfieldersService: MidfieldersService) {}

  @Post()
  async create(@Body() createMidfielderDto: CreateMidfielderDto): Promise<Midfielder> {
    return await this.midfieldersService.create(createMidfielderDto);
  }

  @Get()
  async findAll(): Promise<Midfielder[]> {
    return await this.midfieldersService.findAll();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateMidfielderDto: UpdateMidfielderDto): Promise<Midfielder> {
    return this.midfieldersService.update(id, updateMidfielderDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return await this.midfieldersService.remove(id);
  }
}
