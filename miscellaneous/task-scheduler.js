/**
 * Task Scheduler: Real Use case
 * Kafka, BullMQ Consumer
*/

class TaskRunner {
  constructor(concurrency) {
    this.concurrency = concurrency;
    this.count = 0;
    this.queue = [];
  }
  #addToQueue(runner) {
    this.queue.push(runner);
  }
  #runTaskFromQueue() {
    if (this.count < this.concurrency && this.queue.length > 0) {
      const __task_from_queue = this.queue.shift();
      __task_from_queue();
    }
  }
  addTask(task) {
    async function __runner() {
      try {
        this.count++;
        const result = await task();
        console.log("Result", result);
      } catch (error) {
        console.log("Error", error);
      } finally {
        this.count--;
        this.#runTaskFromQueue();
      }
    }
    if (this.count < this.concurrency) {
      __runner.call(this);
      return;
    }
    this.#addToQueue(__runner.bind(this));
  }
}

const tR = new TaskRunner(2);
tR.addTask(
  () => new Promise((resolve) => setTimeout(() => resolve("Task 1"), 2 * 1000))
);
tR.addTask(
  () => new Promise((resolve) => setTimeout(() => resolve("Task 2"), 2 * 1000))
);
tR.addTask(
  () => new Promise((resolve) => setTimeout(() => resolve("Task 3"), 2 * 1000))
);
tR.addTask(
  () => new Promise((resolve) => setTimeout(() => resolve("Task 4"), 2 * 1000))
);
tR.addTask(
  () => new Promise((resolve) => setTimeout(() => resolve("Task 5"), 2 * 1000))
);
tR.addTask(
  () => new Promise((resolve) => setTimeout(() => resolve("Task 6"), 2 * 1000))
);
