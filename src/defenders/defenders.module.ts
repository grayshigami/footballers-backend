import { Module } from '@nestjs/common';
import { DefendersService } from './defenders.service';
import { DefendersController } from './defenders.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Defender, DefenderSchema } from './entities/defender.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Defender.name,
        schema: DefenderSchema
      }
    ])
  ],
  controllers: [DefendersController],
  providers: [DefendersService],
})
export class DefendersModule {}
