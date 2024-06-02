import { Module } from '@nestjs/common';
import { GoalkeepersService } from './goalkeepers.service';
import { GoalkeepersController } from './goalkeepers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Goalkeeper, GoalkeeperSchema } from './entities/goalkeeper.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Goalkeeper.name,
        schema: GoalkeeperSchema
      }
    ])
  ],
  controllers: [GoalkeepersController],
  providers: [GoalkeepersService],
})
export class GoalkeepersModule {}
