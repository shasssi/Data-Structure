##### Linked List
    - It is a linear data structure. 
    - Elements are not stored at a contiguous memory location like an Array.

    - Linked list elements: Node - 2 parts (Data | Next)

##### Problem with Array - can be solved by Linked List 
    - Contiguous memory allocation - need to define the array length at starting.
        - if we make dynamic length - let' say at start we define 10K length - wastage of memory.
    - Insertion of element is expensive.
        - eg: sorted array [10, 20, 30, 40, 50] - insert 15
        - updated array: [10, 15, 20, 30, 40, 50] - after 15 memory shift needed for all elemnts.

##### Problem with Linked List
    - No random access of element in Linked List
        - we need to traverse and find it.
        - In Array we can do it by index : arr[3]
    - Extra memory space for pointers(next)

###### References
[https://www.youtube.com/watch?v=10l9lDW](https://www.youtube.com/watch?v=10l9lDW7eGo&list=PLzjZaW71kMwQVEuI4I0Yj0NnsV-km-Jt_&index=5&pp=iAQB)
