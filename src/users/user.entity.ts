import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn() // TODO should it be this primary key?
  id: number;

  @Column('varchar')
  name: string;

  @Column('varchar') // TODO how to store email in the DB
  email: string;

  // @Column('varchar') // TODO how to store array in the DB
  // roles: string[];
}
