import {Router} from 'express';
import { getProject } from '../controller/projects.controller.js';

const router = Router()

router.get('/projects', getProject)
router.get('/projects/:id')

export default router