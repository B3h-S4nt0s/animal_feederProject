import express from "express"

class PublicRotes {
  public home(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.status(200).render("index")
  }

  public login(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.status(200).render("login")
  }

  public register(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.status(200).render("login")
  }
}

export const publicRoutes = new PublicRotes()