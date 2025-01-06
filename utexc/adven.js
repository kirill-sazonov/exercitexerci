let main = { value: 1, next: { value: 2, next: null } };

// Assign the 'main' object to 'current'
let current = main;

// Traverse the linked list
while (current !== null) {
    console.log(current.value);
    current = current.next;
}
