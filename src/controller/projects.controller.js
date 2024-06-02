import { Projects } from '../models/projects.js';
import { Skills } from '../models/skills.js';

export const getProject = async (req, res) => {
    try {
        const projects = await Projects.findAll({
            include: {
                model: Skills,
                through: {
                    attributes: []
                }
            }
        });
        res.json(projects);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
