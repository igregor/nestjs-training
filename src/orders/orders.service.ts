import { Injectable } from '@nestjs/common';
import { OrderPayloadDto } from './dto/order-payload.dto';
import { Order } from './order.entity';

@Injectable()
export class OrdersService {
  public getOrders(): Order[] {
    return [
      {
        id: 'uuid-of-the-order',
        company: 'Test company',
        created: '1994-11-05T08:15:30-05:00',
        creator: 'uuid-of-user',
        email: 'thi@is.email',
        items: [{ something: 'should be here' }],
      },
    ];
  }

  public getOrderById(id: string): Order {
    return {
      id: 'uuid-of-the-order',
      company: 'Test company',
      created: '1994-11-05T08:15:30-05:00',
      creator: 'uuid-of-user',
      email: 'thi@is.email',
      items: [{ something: 'should be here' }],
    };
  }

  public addOrder(payload: OrderPayloadDto): Order {
    const { company, creator, email, items } = payload;
    return {
      id: 'uuid-of-the-order',
      company,
      created: '1994-11-05T08:15:30-05:00',
      creator,
      email,
      items,
    };
  }
}
