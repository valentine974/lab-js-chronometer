class Chronometer {
  constructor() {
    this.currentTime =0;
    this.intervalId = null;
  }

  start(printTimeCallback) {  
    this.intervalId = setInterval (()=>{
      this.currentTime++;  
      if(typeof printTimeCallback === 'function'){
      printTimeCallback()
      }
    },1000)
  }

  getMinutes() { 
    return Math.floor(this.currentTime/60)
  }

  getSeconds() { 
    return this.currentTime%60
  }

  computeTwoDigitNumber(value) {
    value=value.toString()
    if(!value.length){
      return '00'
    }
    else if (value.length===1){
      return "0" +value 
    }
    else {
      return value
    }

  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime=0
  }

  split() {
    return this.computeTwoDigitNumber(this.getMinutes())+":"+this.computeTwoDigitNumber(this.getSeconds())
  }
}
