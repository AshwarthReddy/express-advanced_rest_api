import { DataSource } from "typeorm"

export const APP_DATA_SOUCE = new DataSource({
    type: "mongodb",
    host: "localhost",
    port: 27017,
    database: "users",
})

