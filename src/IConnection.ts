export default interface IConnection {
    query(statement: string, params: any): Promise<any>;
    one(statement: string, params: any): Promise<any>;
    close(): Promise<void>;
}