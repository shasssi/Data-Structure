##### Hashing
    - Hashing is a technique that is used to uniquely identify a specific object from a group of similar objects.
    - Eg. In universities, each student is assigned a unique roll number that can be used to retrieve information about them.
          In Libraries , each book is assigned a unique number.
    - In above examples, students and books were hashed to a unique number.

    [Prince, Piyush, Pinto, Pintos]
        1      2      3       4
    Here roll number are used as an index to store student information
    Retrieval = O(1)

    In case of Book - we have BookId
    BookQW1, BOOKDW12, BOOKQW, BOOKW!E
    Here we cannot use the key as an index, so here comes the role of Hashing.

    - Hashing (the idea behind is to distribute entire (key/values pairs) uniformly across an array)
        - Large keys are converted into small keys by using Hash Functions.
        - The values are then stored in a data structure called hash table.

    Eg. Book Id
    key:   BookQW1, BOOKDW12, BOOKQW, BOOKW!E
    value: [Book1,  Book3,    Book4,   Science Book]

    Hash Table
    Index key
    0       
    1
    2
    3    BookQW1
    .
    .
    14   BOOKDW12
    .
    .
    20   BOOKW!E
    .
    .
    36   BOOKQW

    [Book1,  Book3,    Science Book,    Book4]
        3      14           20           36

    - Create Hashing
        key ------------> Hash Function (some logic) ------------> Hash Table Created (got the index of an array)
    - Access
        key ------------> Hash Function ------------> O(1) (Got the Index)
