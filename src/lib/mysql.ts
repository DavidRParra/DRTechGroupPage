import mysql from 'serverless-mysql';

export const conn = mysql({
    config: {
        host: 'localhost',
        port:  3306,
        user: 'root',
        password: 'root',
        database: 'drtg'
    }
});