const EventEmitter = require('events')

// const emitter = new EventEmitter()
//
// emitter.on('anything', data => {
//   console.log('On: anything: ', data)
// })
//
// setTimeout(() => {
//   emitter.emit('anything', {c: 3})
// }, 1500)

class Dispatcher extends EventEmitter {
  subscribe(eventName, callback) {
    console.log('Subscribe')
    this.on(eventName, callback)
  }
  dispatch(eventName, data) {
    console.log('Dispatching')
    this.emit(eventName, data)
  }
}

const dispatch = new Dispatcher();

dispatch.subscribe('aa', data => {
  console.log('ON: aa', data)
})

dispatch.dispatch('aa', {aa: 1})
