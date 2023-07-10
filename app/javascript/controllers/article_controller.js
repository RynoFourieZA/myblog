import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="article"
export default class extends Controller {
  static targets = [ "article" ]
  connect() {
    console.log("Hello, world!")
  }

  getArticle = () => {
    const element = this.articleTarget
    const article = element.textContent
    console.log(`you clicked on the "${article}"`)
  }
}
