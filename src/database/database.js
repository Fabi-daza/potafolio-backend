import Sequelize from 'sequelize'

// cambiar a variables de entorno a futuro
export const sequelize = new Sequelize('portafolio', 'fabian', 'admin', {
    host: 'localhost',
    dialect: 'postgres'
})