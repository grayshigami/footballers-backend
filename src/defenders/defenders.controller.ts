import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { DefendersService } from './defenders.service';
import { CreateDefenderDto } from './dto/create-defender.dto';
import { UpdateDefenderDto } from './dto/update-defender.dto';
import { Defender } from './entities/defender.entity';

@Controller('defenders')
export class DefendersController {
  constructor(private readonly defendersService: DefendersService) {}

  @Post()
  async create(@Body() createDefenderDto: CreateDefenderDto): Promise<Defender> {
    return await this.defendersService.create(createDefenderDto);
  }

  @Get()
  async findAll(): Promise<Defender[]> {
    return await this.defendersService.findAll();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateDefenderDto: UpdateDefenderDto): Promise<Defender> {
    return await this.defendersService.update(id, updateDefenderDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return await this.defendersService.remove(id);
  }
}
