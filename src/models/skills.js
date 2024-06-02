import { DataTypes} from "sequelize";
import { sequelize } from "../database/database.js";

export const Skills = sequelize.define('skills',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING
    },
    icon:{
        type: DataTypes.STRING
    },
    category:{
        type: DataTypes.STRING
    }
})
