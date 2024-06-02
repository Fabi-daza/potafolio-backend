import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Projects } from "./projects.js";
import { Skills } from "./skills.js";

export const ProjectSkills = sequelize.define('project_skills', {
    project_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Projects,
            key: 'id'
        }
    },
    skill_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Skills,
            key: 'id'
        }
    }
});