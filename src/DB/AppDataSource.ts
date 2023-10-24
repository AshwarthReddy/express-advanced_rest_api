<<<<<<< HEAD
import { User } from "../entity/User"
import { DataSource } from "typeorm"

export const MONGO_DATA_SOURCE = new DataSource({
=======
import { DataSource } from "typeorm"

export const APP_DATA_SOUCE = new DataSource({
>>>>>>> c350da8 (intial commit)
    type: "mongodb",
    host: "localhost",
    port: 27017,
    database: "users",
<<<<<<< HEAD
    entities: [User]
=======
>>>>>>> c350da8 (intial commit)
})

