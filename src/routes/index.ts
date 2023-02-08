import { Router, Request, Response } from "express";

import * as PageController from '../controllers/pageController'

const router = Router()

router.get('/', PageController.home)

export default router