import express from "express"
import * as path from "path"
import { routes } from "./router.ts" // Importação de Rotas

// Variaveis de Estrutura
const src = path.resolve("src")
const publicArchives = path.resolve("src","public")

// Constantes do projeto
const PORT = process.env.PORT || String(3330)


// Criação da Classe App
export class Aplication{
  public server: express.Application

  constructor() {
    this.server = express()
    this.middleware()
    this.router()
    this.server.listen(PORT)
  }

  // Atribuição de rotas
  public router() {
    this.server.use(routes)
  }

  // Atribuição de Middlewares da Aplication
  private middleware() {
    this.server.use(express.json())
    this.server.set('view engine', 'ejs')
    this.server.use('/public', express.static(publicArchives))
    this.server.set('views', path.resolve(src, 'views'))
    this.server.set('css', path.resolve(publicArchives, 'css'))
    this.server.set('imgs', path.resolve(publicArchives, 'imgs'))
    this.server.set('js', path.resolve(publicArchives, 'js'))
    this.server.set('videos', path.resolve(publicArchives, 'videos'))
  }

  // Mensagem de Inicialização
  public localAplication() {
    return console.log(`htpp:localhost:${PORT}`)
  }
}