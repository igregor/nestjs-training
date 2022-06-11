// TODO - rework to be an entity from ORM
export class Order {
  id: string;

  creator: any; // User;

  items: any[]; // Item[];

  company: string;

  email: string;

  created: string;
}
