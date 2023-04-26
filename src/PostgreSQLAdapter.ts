import pg from "pg-promise/typescript/pg-subset";
import IConnection from "./IConnection";
import pgp from "pg-promise";

export default class PostgreSQLAdapter implements IConnection {

    connection: pgp.IDatabase<{}, pg.IClient>;

    constructor() {
        this.connection = pgp()("postgres://postgres:fagote123@localhost:5432/hexagonal_architecture_db")
    }

    query(statement: string, params: any): Promise<any> {
        return this.connection.query(statement, params);
    }

    one(statement: string, params: any): Promise<any> {
        return this.connection.one(statement, params);
    }

    async close(): Promise<void> {
        return this.connection.$pool.end();
    }
}