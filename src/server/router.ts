import express, { Router } from "express" // Import da biblioteca padrão
import { Roots } from "./../controllers/index.ts" // Importação das rotas

const routes: Router = express.Router() // Criação do Router de Gerenciamento

// Agrupamento de Rotas Geradas e Controllers vinculados
routes.get("/", Roots.publicRoutes.home)
routes.get("/login", Roots.publicRoutes.login)
routes.get("/register", Roots.publicRoutes.register)
routes.get("/profile", Roots.privateRoutes.profile)
routes.get("/dashboard", Roots.privateRoutes.dashboard)

export { routes }