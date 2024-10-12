import env from "dotenv"

env.config()

const config = {
    port: process.env.PORT,
    mailer_host: process.env.MAILER_HOST
}

export default config