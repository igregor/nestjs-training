import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class migration1655589533302 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            // isGenerated: true,
            // generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'email',
            type: 'varchar',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'password',
            type: 'varchar',
          },
        ],
      }),
    );

    await queryRunner.query(
      `INSERT INTO user (name, email, password) VALUES ('John Doe', 'my@fake.email', 'mypass')`,
    );
  }

  public async down(): Promise<void> {
    return Promise.resolve();
  }
}
