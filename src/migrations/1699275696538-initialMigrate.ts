import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigrate1699275696538 implements MigrationInterface {
    name = 'InitialMigrate1699275696538'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "realEstates" ADD "gvs" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "realEstates" DROP COLUMN "gvs"`);
    }

}
