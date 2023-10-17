const LinkedList = require("../LinkedList");

function swapTwoElements(linkedList, data1, data2) {
  const [node1, node1Prev] = findNode(linkedList, data1);
  const [node2, node2Prev] = findNode(linkedList, data2);

  // null doesn't have a next node, if we call node1prev.next when node1prev next is null this will cause an error.
  if (node1Prev === null) {
    linkedList.head = node2;
  } else {
    node1Prev.setNextNode(node2);
  }

  if (node2Prev === null) {
    linkedList.head = node1;
  } else {
    node2Prev.setNextNode(node1);
  }
  let temp = node1.getNextNode();
  node1.setNextNode(node2.next);
  node2.setNextNode(temp);
}

function findNode(list, data) {
  let node = list.head;
  let nodePrev = null;

  while (node !== null) {
    if (node.data === data) {
      break;
    }
    nodePrev = node;
    node = node.getNextNode();
  }

  return [node, nodePrev];
}

const list = new LinkedList();
list.addToTail(1);
list.addToTail(2);
list.addToTail(3);
list.addToTail(4);
list.addToTail(5);
list.printList();
swapTwoElements(list, 1, 5);
list.printList();
