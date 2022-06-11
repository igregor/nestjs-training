import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrderPayloadDto } from './dto/order-payload.dto';
import { Order } from './order.entity';
import { OrdersService } from './orders.service';

@Controller('/api/v1/orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get('/')
  getOrders(): Order[] {
    return this.ordersService.getOrders();
  }

  @Get('/:id')
  getOrderById(@Param('id') id: string): Order {
    return this.ordersService.getOrderById(id);
  }

  @Post('/')
  postOrder(@Body() orderPayloadDto: OrderPayloadDto): Order {
    const { company, creator, email, items } = orderPayloadDto;
    return this.ordersService.addOrder({
      company,
      creator,
      email,
      items,
    });
  }
}
