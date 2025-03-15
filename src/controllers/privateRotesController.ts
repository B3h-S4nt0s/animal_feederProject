import express from "express"

class PrivateRoutes {
  public profile(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.status(200).render("profile")
  }

  public dashboard(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.status(200).render("dashboard")
  }
}

export const privateRoutes = new PrivateRoutes()