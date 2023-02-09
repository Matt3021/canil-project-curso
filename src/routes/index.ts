import { Router, Request, Response } from "express";

import * as PageController from '../controllers/pageController'
import * as SearchController from '../controllers/searchController'

const router = Router()

router.get('/', PageController.home)
router.get('/dogs', PageController.dog)
router.get('/cats', PageController.cat)
router.get('/fishes', PageController.fish)
router.get('/search', SearchController.search)
router.use((req: Request, res: Response) => {
  res.status(404).render('pages/404 ')
})

export default router