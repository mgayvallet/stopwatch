const start = document.querySelector("#start")
const stop = document.querySelector("#stop")
const reset = document.querySelector("#reset")
const ms = document.querySelector("#ms")
const s = document.querySelector("#s")
const m = document.querySelector("#m")
const h = document.querySelector("#h")

let interval
let milliseconds = 0
let seconds = 0
let minutes = 0
let hours = 0

function updateDisplay() {
  ms.textContent = milliseconds.toString().padStart(3, '0')
  s.textContent = seconds.toString().padStart(2, '0') + ' . '
  m.textContent = minutes.toString().padStart(2, '0') + ' : '
  h.textContent = hours.toString().padStart(2, '0') + ' : '
}

start.addEventListener('click', () => {
  stop.style.display = "block"
  start.style.display = "none"
  reset.style.display = "none"

  interval = setInterval(() => {
    milliseconds += 10
    if (milliseconds >= 1000) {
      milliseconds = 0
      seconds++
      if (seconds >= 60) {
        seconds = 0
        minutes++
        if (minutes >= 60) {
          minutes = 0
          hours++
        }
      }
    }
    updateDisplay()
  }, 10) 
})

stop.addEventListener('click', () => {
  clearInterval(interval)
  stop.style.display = "none"
  start.style.display = "block"
  reset.style.display = "block"
})

reset.addEventListener('click', () => {
  clearInterval(interval)
  milliseconds = 0
  seconds = 0
  minutes = 0
  hours = 0
  updateDisplay()
  stop.style.display = "none"
  start.style.display = "block"
  reset.style.display = "none"
})

updateDisplay()  