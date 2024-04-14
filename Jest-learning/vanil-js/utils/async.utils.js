const TIME_OUT = 5000

const longRequest = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Hello, world"), TIME_OUT)
  })
}

module.exports = {
  longRequest,
}