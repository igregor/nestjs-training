import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class migration1655589533302_app_user implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'app_user',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
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
          {
            name: 'roles',
            type: 'text[]',
          },
        ],
      }),
    );

    await queryRunner.query(
      `INSERT INTO app_user (name, email, password, roles) VALUES ('John Doe', 'my@fake.email', 'mypass', ARRAY ['admin', 'user'])`,
    );
  }

  public async down(): Promise<void> {
    return Promise.resolve();
  }
}
