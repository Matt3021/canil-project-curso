import { Router, Request, Response } from "express";

import * as PageController from '../controllers/pageController'

const router = Router()

router.get('/', PageController.home)
router.get('/dogs', PageController.dog)
router.get('/cats', PageController.cat)
router.get('/fishes', PageController.fish)

export default router