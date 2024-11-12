import * as dotenv from 'dotenv'
import { Config } from './interface/config.interface'

dotenv.config()

export const config: Config = {
    host: process.env.MAILER_HOST,
    port: Number(process.env.MAILER_PORT),
    secure: process.env.MAILER_SECURE === 'true',
    user: process.env.MAILER_ADDRESS_FROM,
    pass: process.env.MAILER_PASSWORD,
    salt: Number(process.env.SALT),
    token: String(process.env.SECRET_TOKEN),
    db_host: process.env.DB_HOST,
    db_port: Number(process.env.DB_PORT),
    db_user: process.env.DB_USER,
    db_pass: process.env.DB_PASS,
    db_database: process.env.DB_DATABASE
}