import { Request, Response } from "express";

import { Pet } from "../models/Pet";

export const home = (req: Request, res: Response) => {
  let list = Pet.getAll()

  res.render('pages/home', {
    list
  })
}