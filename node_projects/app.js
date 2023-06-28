const { Sequelize, DataTypes } = require('sequelize')
const sq            = new Sequelize('postgres://postgres:password@localhost:5432/bank')

const checkConnection = async()=>{
    try{
        await sq.authenticate()
        console.log("connected successfully")
    }catch(err){
    console.log(err)
}}
checkConnection()

const Account = sq.define("account",{
    first_name:{
        type: DataTypes.STRING
    }, 
    balance:
    {
        type: DataTypes.DECIMAL(5,2)
    } 
    },
    {
        timestamps:false
    }
)

Account.sync().then(()=>{console.log("Account table")})

const my_account = Account.create({
    first_name:"Marie", 
    balance:200
})


const accounts= Account.findAll()
console.log(accounts)