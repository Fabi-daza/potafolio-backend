import app from './app.js'
import {sequelize} from './database/database.js'

import './models/projects.js'
import './models/skills.js'
import './models/projectsSkills.js'
import './models/associations.js'

const PORT = 3001

async function test(){
    try {
        await sequelize.sync({force: false})
        console.log('Connection has been established successfully.');
        app.listen(PORT)
        console.log(`Server up on port, ${PORT}`)
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

test();
