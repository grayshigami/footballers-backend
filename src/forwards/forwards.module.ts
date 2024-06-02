import { Module } from '@nestjs/common';
import { ForwardsService } from './forwards.service';
import { ForwardsController } from './forwards.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Forward, ForwardSchema } from './entities/forward.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Forward.name,
        schema: ForwardSchema
      }
    ])
  ],
  controllers: [ForwardsController],
  providers: [ForwardsService],
})
export class ForwardsModule {}
