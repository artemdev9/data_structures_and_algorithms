const linkedList = require("../LinkedList");

function reverseALinkedList(linkedList) {
  let current = linkedList.head;
  let previous = null;
  while (current !== null) {
    const next = current.getNextNode();
    current.setNextNode(previous);
    previous = current;
    current = next;
  }
  linkedList.head = previous;
}

const list = new linkedList();
list.addToTail(1);
list.addToTail(2);
list.addToTail(3);
list.addToTail(4);
list.addToTail(5);
list.printList();
reverseALinkedList(list);
list.printList();
