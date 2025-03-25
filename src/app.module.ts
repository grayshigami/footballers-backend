import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ForwardsModule } from './forwards/forwards.module';
import { MidfieldersModule } from './midfielders/midfielders.module';
import { DefendersModule } from './defenders/defenders.module';
import { GoalkeepersModule } from './goalkeepers/goalkeepers.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as cors from 'cors';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/footballers'),
    ForwardsModule, MidfieldersModule, DefendersModule, GoalkeepersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cors({origin: 'http://localhost:8081'})).forRoutes('*');
  }
}
