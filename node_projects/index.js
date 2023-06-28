const { Client } = require("pg")
const dotenv     = require("dotenv")
dotenv.config()
const connectDB = async () =>{
    try{
        const client  = new Client({
            user: process.env.user,
            host: process.env.host,
            database: process.env.database, 
            password: process.env.password, 
            port: process.env.port
        })
        await client.connect()
        const res = await client.query('select * from accounts')
        console.log(res.rows)
        client.end()
    }catch(err){
        console.log(err)
    }
}
 
connectDB()
