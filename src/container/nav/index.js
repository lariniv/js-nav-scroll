class Navigation {
  static #HOME_PAGE = 'https://www.google.com'

  static #back = () => {
    return history.back()
  }

  static #forward = () => {
    return history.forward()
  }

  static #reload = () => {
    return location.reload()
  }

  static #changePage = (href) => {
    return location.assign(href)
  }

  static #go = () => {
    try {
      const URL = new URL(window.navbar.value)
      this.#changePage(URL.href)
    } catch (error) {
      alert('Invalid url address')
      console.log(error)
    }
  }

  static #home = () => {
    return this.#changePage(this.#HOME_PAGE)
  }

  static init = () => {
    window.back.onclick = this.#back
    window.forward.onclick = this.#forward
    window.reload.onclick = this.#reload
    window.home.onclick = this.#home
    window.go.onclick = this.#go

    window.navbar.value = location.href
  }
}

Navigation.init()
