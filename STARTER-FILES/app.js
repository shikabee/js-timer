const startBtn = document.getElementById('startBtn')
const settingBtn = document.getElementById('settingBtn')
const timerElements = document.getElementsByClassName('timerElements')
const minsElmnt = document.getElementById('mins')
const secsElmnt = document.getElementById('secs')
const ringElmnt = document.getElementsByClassName('ring')

let timer

const startTimer = () => {
    if(parseInt(secsElmnt.value) === 0) {
        if(parseInt(minsElmnt.value) === 0) {
            pauseTimer()
            ringElmnt[0].classList.add('ending')
            setTimeout(() => {
                alert('Time is upppp')
            }, 200)
            startBtn.textContent = 'start'
        } else {
            minsElmnt.value = (minsElmnt.value-1).toString().padStart(2, '0')
            secsElmnt.value = 59
        }
    } else {
        secsElmnt.value = (secsElmnt.value-1).toString().padStart(2, '0')
    }
}

const pauseTimer = () => {
    clearInterval(timer)
    timer = null
}

startBtn.addEventListener('click', (e) => {
    // handling events
    if(startBtn.textContent === 'start') {
        ringElmnt[0].classList.remove('ending')
        timer = setInterval(startTimer, 1000)
    } else if(startBtn.textContent === 'pause') {
        pauseTimer()
    }
    // setting the new value button value
    e.target.textContent = e.target.textContent === 'start' ? 'pause' : 'start'
})

settingBtn.addEventListener('click', (e) => {
    // not working for now
    // filtering out only numbers
    // have to check if the typed character is a number
    // before updating the input cell
    Array.from(timerElements).forEach(element => {
        element.disabled = false
        let initialValue
        element.addEventListener('beforeinput', (e) => {
            initialValue = element.value
            if(isNaN(e.target.value)) {
                console.log(`keeping old value ${initialValue}`)
                e.preventDefault()
                element.value = initialValue
            } else {
                element.value = e.target.value
                console.log(`new value ${element.value}`)
            }
        })
    })
    timerElements[0].focus()
    
})