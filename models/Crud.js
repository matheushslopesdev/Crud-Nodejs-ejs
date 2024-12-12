const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Task = db.define('Crud', {
  nome:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  sobrenome:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  idade:{
    type: DataTypes.STRING,
    allowNull: false,
  }
})

module.exports = Task