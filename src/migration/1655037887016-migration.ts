import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class migration1655037887016 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";'); // postgress does not have the uuid by default, do it like Stijn says :D

    return await queryRunner.createTable(
      new Table({
        name: 'order',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'creator',
            type: 'varchar',
          },
          {
            name: 'items',
            type: 'varchar',
          },
        ],
      }),
    );
  }

  public async down(): Promise<void> {
    return Promise.resolve();
  }
}
