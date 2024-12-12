const { Sequelize } = require('sequelize')
require('dotenv/config');



const sequelize = new Sequelize(process.env.DB, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: 'mysql',
  })

  try {
    sequelize.authenticate()
    console.log('Conectamos com o Sequelize!')
  } catch (error) {
    console.error('Não foi possível conectar:', error)
  }
  
  module.exports = sequelize