class MyEventEmitter {
  constructor() {
    this.registeredEvents = {};
  }
  on(event, listner) {
    if (!this.registeredEvents[event]) {
      this.registeredEvents[event] = [];
    }
    this.registeredEvents[event].push(listner);
  }
  emit(event, ...args) {
    if (!Array.isArray(this.registeredEvents[event])) return;
    this.registeredEvents[event].forEach((e) => e(...args));
  }
  off(event, listner) {
    if (!Array.isArray(this.registeredEvents[event])) return;
    const index = this.registeredEvents[event].indexOf(listner);
    if (index !== -1) {
      this.registeredEvents[event].splice(index, 1);
    }
  }
  once(event, listner) {
    const fn = (...args) => {
      listner(...args);
      this.off(event, fn);
    };
    this.on(event, fn);
  }
}

const e = new MyEventEmitter();
e.on("signup", (name) => console.log(name + " - User Signup"));
e.on("signup", () => console.log("Email registered"));
const sendMail = () => console.log("Signup mail sent");
e.once("signup", sendMail);
e.emit("signup", "Asssi");
// e.off("signup", sendMail);
e.emit("signup", "KAsssi");
