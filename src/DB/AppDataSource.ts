import { User } from "../entity/User"
import { DataSource } from "typeorm"

export const MONGO_DATA_SOURCE = new DataSource({
    type: "mongodb",
    host: "localhost",
    port: 27017,
    database: "users",
    entities: [User]
})

