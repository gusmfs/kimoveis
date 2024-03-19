import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigratee1699167627770 implements MigrationInterface {
    name = 'InitialMigratee1699167627770'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "gvs"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" ADD "gvs" character varying NOT NULL`);
    }

}
