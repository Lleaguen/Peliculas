import { DataSource } from "typeorm";
import { Users } from './entities/user';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'main',
    port: 5432,
    database: 'my_movies',
    entities: [Users],
    logging: true,
    synchronize: true
})