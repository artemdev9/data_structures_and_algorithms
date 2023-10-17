const Queue = require("../Queue");

const queuegate = new Queue();

queuegate.enqueue(2);
queuegate.enqueue("data");
queuegate.queue.printList();

queuegate.dequeue();
queuegate.queue.printList();

const queueBounded = new Queue(1);

queueBounded.enqueue("1st item.");
queueBounded.queue.printList();
queueBounded.enqueue("2st item."); // should throw an error as the queue length is bounded by 1;
