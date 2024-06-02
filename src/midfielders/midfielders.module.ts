import { Module } from '@nestjs/common';
import { MidfieldersService } from './midfielders.service';
import { MidfieldersController } from './midfielders.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Midfielder, MidfielderSchema } from './entities/midfielder.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Midfielder.name,
        schema: MidfielderSchema
      }
    ])
  ],
  controllers: [MidfieldersController],
  providers: [MidfieldersService],
})
export class MidfieldersModule {}
