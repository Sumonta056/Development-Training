const task1 = (): Promise<string> =>
  new Promise((resolve) => setTimeout(() => resolve("Task 1 Completed"), 1000));
const task2 = (): Promise<string> =>
  new Promise((resolve) => setTimeout(() => resolve("Task 2 Completed"), 1000));

task1()
  .then((result) => {
    console.log(result);
    return task2(); // Chaining the second task
  })
  .then((result) => console.log(result)); // Task 2 Completed
