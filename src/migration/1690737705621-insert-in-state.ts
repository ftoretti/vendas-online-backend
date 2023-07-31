import { MigrationInterface, QueryRunner } from "typeorm"

export class InsertInState1690737705621 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            INSERT INTO state("id", "name", "uf") VALUES (1, 'Acre', 'AC');
            INSERT INTO state("id", "name", "uf") VALUES (2, 'Alagoas', 'AL');
            INSERT INTO state("id", "name", "uf") VALUES (3, 'Amazonas', 'AM');
            INSERT INTO state("id", "name", "uf") VALUES (4, 'Amap�', 'AP');
            INSERT INTO state("id", "name", "uf") VALUES (5, 'Bahia', 'BA');
            INSERT INTO state("id", "name", "uf") VALUES (6, 'Cear�', 'CE');
            INSERT INTO state("id", "name", "uf") VALUES (7, 'Distrito Federal', 'DF');
            INSERT INTO state("id", "name", "uf") VALUES (8, 'Esp�rito Santo', 'ES');
            INSERT INTO state("id", "name", "uf") VALUES (9, 'Goi�s', 'GO');
            INSERT INTO state("id", "name", "uf") VALUES (10, 'Maranh�o', 'MA');
            INSERT INTO state("id", "name", "uf") VALUES (11, 'Minas Gerais', 'MG');
            INSERT INTO state("id", "name", "uf") VALUES (12, 'Mato Grosso do Sul', 'MS');
            INSERT INTO state("id", "name", "uf") VALUES (13, 'Mato Grosso', 'MT');
            INSERT INTO state("id", "name", "uf") VALUES (14, 'Par�', 'PA');
            INSERT INTO state("id", "name", "uf") VALUES (15, 'Para�ba', 'PB');
            INSERT INTO state("id", "name", "uf") VALUES (16, 'Pernambuco', 'PE');
            INSERT INTO state("id", "name", "uf") VALUES (17, 'Piau�', 'PI');
            INSERT INTO state("id", "name", "uf") VALUES (18, 'Paran�', 'PR');
            INSERT INTO state("id", "name", "uf") VALUES (19, 'Rio de Janeiro', 'RJ');
            INSERT INTO state("id", "name", "uf") VALUES (20, 'Rio Grande do Norte', 'RN');
            INSERT INTO state("id", "name", "uf") VALUES (21, 'Rond�nia', 'RO');
            INSERT INTO state("id", "name", "uf") VALUES (22, 'Roraima', 'RR');
            INSERT INTO state("id", "name", "uf") VALUES (23, 'Rio Grande do Sul', 'RS');
            INSERT INTO state("id", "name", "uf") VALUES (24, 'Santa Catarina', 'SC');
            INSERT INTO state("id", "name", "uf") VALUES (25, 'Sergipe', 'SE');
            INSERT INTO state("id", "name", "uf") VALUES (26, 'S�o Paulo', 'SP');
            INSERT INTO state("id", "name", "uf") VALUES (27, 'Tocantins', 'TO');
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            DELETE FROM public.state;
        `)
    }

}
