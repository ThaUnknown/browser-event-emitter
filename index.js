EventTarget.prototype.on = function (type, listener, options) {
  if (typeof type !== 'string' || typeof listener !== 'function') return null
  this.addEventListener(type, listener, options)
}

EventTarget.prototype.once = function (type, listener, options) {
  if (typeof type !== 'string' || typeof listener !== 'function') return null
  this.addEventListener(type, listener, { ...options, once: true })
}

EventTarget.prototype.emit = function (type, data) {
  if (typeof type !== 'string') return null
  // emit user specified event object, or a custom event if data is specified, or just an event when there's no data
  this.dispatchEvent(data instanceof Event ? data : data !== undefined ? new CustomEvent(type, { detail: data }) : new Event(type))
}

EventTarget.prototype.dispatch = function (type, data) {
  if (typeof type !== 'string') return null
  // emit user specified event object, or a custom event if data is specified, or just an event when there's no data
  this.dispatchEvent(data instanceof Event ? data : data !== undefined ? new CustomEvent(type, { detail: data }) : new Event(type))
}

EventTarget.prototype.removeListener = function (type, listener) {
  if (typeof type !== 'string' || typeof listener !== 'function') return null
  this.removeEventListener(type, listener)
}

EventTarget.prototype.off = function (type, listener) {
  if (typeof type !== 'string' || typeof listener !== 'function') return null
  this.removeEventListener(type, listener)
}

if (!globalThis.EventEmitter) globalThis.EventEmitter = EventTarget

const exp = EventTarget

export { exp as EventEmitter }
