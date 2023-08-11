window.scrollButton.onclick = () => {
  scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })
}

let isDisplay = false

const id = setInterval(() => {
  if (
    window.scrollY > window.innerHeight &&
    isDisplay === false
  ) {
    isDisplay = true

    window.scrollButton.style.display = 'flex'

    return
  }

  if (
    window.scrollY <= window.innerHeight &&
    isDisplay === true
  ) {
    isDisplay = false

    window.scrollButton.style.display = 'none'

    return
  }
}, 500)
