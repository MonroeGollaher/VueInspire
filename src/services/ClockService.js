class ClockService {
  showTime() {
    var a = new Date()
    document.getElementById('disp').innerHTML = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds()
    setInterval(this.showTime, 1000)
  }
}

export const clockService = new ClockService()
