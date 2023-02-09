import { Request, Response } from "express";

import { Pet } from "../models/Pet";
import { createMenuObject } from "../helpers/createObjectMenu";

export const home = (req: Request, res: Response) => {
  let list = Pet.getAll()

  res.render('pages/home', {
    menu: createMenuObject('all'),
    banner: {
      title: 'Todos os animais',
      background: 'allanimals.jpg'
    },
    list
  })
}

export const dog = (req: Request, res: Response) => {
  let list = Pet.getFromType('dog')

  res.render('pages/home', {
    menu: createMenuObject('dog'),
    banner: {
      title: 'Cachorros',
      background: 'banner_dog.jpg'
    },
    list
  })
}

export const cat = (req: Request, res: Response) => {
  let list = Pet.getFromType('cat')

  res.render('pages/home', {
    menu: createMenuObject('cat'),
    banner: {
      title: 'Gatos',
      background: 'banner_cat.jpg'
    },
    list
  })
}

export const fish = (req: Request, res: Response) => {
  let list = Pet.getFromType('fish')

  res.render('pages/home', {
    menu: createMenuObject('fish'),
    banner: {
      title: 'Peixes',
      background: 'banner_fish.jpg'
    },
    list
  })
}