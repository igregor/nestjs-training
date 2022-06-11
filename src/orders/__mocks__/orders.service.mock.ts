import { OrdersService } from '../orders.service';

export const ordersServiceMock: Record<keyof OrdersService, jest.Mock> = {
  addOrder: jest.fn().mockReturnValue({
    id: 'uuid-of-the-order',
    company: 'Test company',
    created: '1994-11-05T08:15:30-05:00',
    creator: 'uuid-of-user',
    email: 'thi@is.email',
    items: [{ something: 'should be here' }],
  }),

  getOrderById: jest.fn().mockReturnValue({
    id: 'uuid-of-the-order',
    company: 'Test company',
    created: '1994-11-05T08:15:30-05:00',
    creator: 'uuid-of-user',
    email: 'thi@is.email',
    items: [{ something: 'should be here' }],
  }),

  getOrders: jest.fn().mockReturnValue([
    {
      id: 'uuid-of-the-order',
      company: 'Test company',
      created: '1994-11-05T08:15:30-05:00',
      creator: 'uuid-of-user',
      email: 'thi@is.email',
      items: [{ something: 'should be here' }],
    },
  ]),
};
