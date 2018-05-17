'use strict';

const {LinkedList, display} = require('./linked-list');


function main() {
  const SLL = new LinkedList();
  
  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  
  reverseList(SLL);
  display(SLL);
  return; 
}
  
main();


// mystery program 
// function WhatDoesThisProgramDo(lst){
//   let current = lst.head;
//   while(current !== null){
//     let newNode = current;
//     while (newNode.next !== null) {
//       if (newNode.next.value === current.value) {
//         newNode.next = newNode.next.next;
//       }
//       else{
//         newNode = newNode.next;
//       }
//     }
//     current = current.next;
//   }
// }
// O(n^2) this function removes all duplicate nodes

function reverseList(list) {
  let currentNode = list.head;
  let previousNode = null;
  let nextNode = list.head.next;

  while (nextNode !== null) {
    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = nextNode;
    nextNode = nextNode.next;
  }
  currentNode.next = previousNode;
  list.head = currentNode;
}

// O(n) 


