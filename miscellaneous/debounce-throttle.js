/**
 *  Throttle - Youtube slowmode chat msg (after first msg, another one is allowed after some delay)
 * Google search suggestion (API call to get suggestion)
 */
function throttle(fn, delay) {
  let flag = true;
  return function () {
    if (flag) {
      fn();
      flag = false;
      setInterval(() => {
        flag = true;
      }, delay);
    }
  };
}

const log = () => console.log("Action Performed");

const throttleLog = throttle(log, 1000);
throttleLog(); // Runs Immediately
throttleLog(); // Ignored if called within 1 second
setTimeout(() => throttleLog(), 2000);

function throttleFn(fn, delay) {
    let lastCall = 0;
    return function(...args) {
        const now = Date.now();
        if (now - lastCall < delay) {
            return;
        }
        lastCall = now;
        fn(...args);
    }
}
const sendMsg = (msg) => console.log("Msg Sent : " + msg);
const sendChatMsgWithSlowMode = throttleFn(sendMsg, 1000);
sendChatMsgWithSlowMode("Hi"); // Runs Immediately
sendChatMsgWithSlowMode("Hello"); // Ignored if called within 1 second
setTimeout(() => sendChatMsgWithSlowMode("Helloooo"), 2000);

function debounce(fn, delay) {
  let timer;
  let text = "";
  return function (...args) {
    text += args;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn(text);
    }, delay);
  };
}

const search = (text) => console.log("Search Performed: " + text);
const debounceFn = debounce(search, 1000);
debounceFn("k");
debounceFn("s");
debounceFn("s");
debounceFn("s");
debounceFn("i");
