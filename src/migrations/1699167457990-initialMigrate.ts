import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigrate1699167457990 implements MigrationInterface {
    name = 'InitialMigrate1699167457990'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" ADD "gvs" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "gvs"`);
    }

}
