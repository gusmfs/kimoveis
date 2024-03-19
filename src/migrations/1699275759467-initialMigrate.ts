import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigrate1699275759467 implements MigrationInterface {
    name = 'InitialMigrate1699275759467'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "realEstates" DROP COLUMN "gvs"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "realEstates" ADD "gvs" character varying NOT NULL`);
    }

}
