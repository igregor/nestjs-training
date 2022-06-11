import { Test, TestingModule } from '@nestjs/testing';
import { OrdersController } from '../orders.controller';
import { OrdersService } from '../orders.service';
import { ordersServiceMock } from '../__mocks__/orders.service.mock';

describe('OrdersController', () => {
  let ordersController: OrdersController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [OrdersController],
      providers: [
        {
          provide: OrdersService,
          useValue: ordersServiceMock,
        },
      ],
    }).compile();

    ordersController = app.get<OrdersController>(OrdersController);
  });

  describe('root', () => {
    it('should get the orders', () => {
      expect(ordersController.getOrders()).toEqual([
        {
          id: 'uuid-of-the-order',
          company: 'Test company',
          created: '1994-11-05T08:15:30-05:00',
          creator: 'uuid-of-user',
          email: 'thi@is.email',
          items: [{ something: 'should be here' }],
        },
      ]);
    });

    it('should get the order by id', () => {
      expect(ordersController.getOrderById('uuid-of-the-order')).toEqual({
        id: 'uuid-of-the-order',
        company: 'Test company',
        created: '1994-11-05T08:15:30-05:00',
        creator: 'uuid-of-user',
        email: 'thi@is.email',
        items: [{ something: 'should be here' }],
      });
    });

    it('should add an order by id', () => {
      expect(
        ordersController.postOrder({
          company: 'Test company',
          created: '1994-11-05T08:15:30-05:00',
          creator: 'uuid-of-user',
          email: 'thi@is.email',
          items: [{ something: 'should be here' }],
        }),
      ).toEqual({
        id: 'uuid-of-the-order',
        company: 'Test company',
        created: '1994-11-05T08:15:30-05:00',
        creator: 'uuid-of-user',
        email: 'thi@is.email',
        items: [{ something: 'should be here' }],
      });
    });
  });
});
