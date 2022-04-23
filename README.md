# browser-event-target-emitter
EventEmitter-like syntax for browser's EventTarget. Allows node-like syntax for existing EventTargets such as Video, Element, Node etc

Usage:
```js
const dispatcher = new EventEmitter()

dispatcher.on('myEvent', console.log)

dispatcher.emit('myEvent', 1) // CustomEvent { detail: 1 }

dispatcher.removeListener('myEvent', console.log)

dispatcher.emit('myEvent', 2) // no value logged

dispatcher.once('anotherEvent', console.warn)

dispatcher.emit('anotherEvent', 1) // CustomEvent { detail: 1 }

dispatcher.emit('anotherEvent', 2) // no value logged

dispatcher.on('MouseMove', ({ clientX, clientY }) => console.log(clientX, clientY))

dispatcher.emit('MouseMove', new MouseEvent('MouseMove', { clientX: 12, clientY: 48 })) // 12, 48

document.querySelector('video').on('seeked', console.log)
```
