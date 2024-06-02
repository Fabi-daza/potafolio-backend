import { Projects } from "./projects.js";
import { Skills } from "./skills.js"
import { ProjectSkills } from "./projectsSkills.js";

Projects.belongsToMany(Skills, { through: ProjectSkills, foreignKey: 'project_id' });
Skills.belongsToMany(Projects, { through: ProjectSkills, foreignKey: 'skill_id' });
