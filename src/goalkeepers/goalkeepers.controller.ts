import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { GoalkeepersService } from './goalkeepers.service';
import { CreateGoalkeeperDto } from './dto/create-goalkeeper.dto';
import { UpdateGoalkeeperDto } from './dto/update-goalkeeper.dto';
import { Goalkeeper } from './entities/goalkeeper.entity';

@Controller('goalkeepers')
export class GoalkeepersController {
  constructor(private readonly goalkeepersService: GoalkeepersService) {}

  @Post()
  async create(@Body() createGoalkeeperDto: CreateGoalkeeperDto): Promise<Goalkeeper> {
    return await this.goalkeepersService.create(createGoalkeeperDto);
  }

  @Get()
  async findAll(): Promise<Goalkeeper[]> {
    return await this.goalkeepersService.findAll();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateGoalkeeperDto: UpdateGoalkeeperDto): Promise<Goalkeeper> {
    return await this.goalkeepersService.update(id, updateGoalkeeperDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return await this.goalkeepersService.remove(id);
  }
}
