import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { OrdersController } from './orders/orders.controller';
import { OrdersService } from './orders/orders.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class AppModule {}
