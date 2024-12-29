##### Tree 
    - if data in hierarchy: we store it in a Tree data structure
    - Non-linear data structure
        - Trees are hierarchial data structure
    - Linear data structure: Array, Stack, Queues, Linked List

##### Nomenclature of Tree 
    - Root, Key, Parent
    - Node (also called vertex)
    - Edge
    - Siblings
    - Children
    - Subtree
    - Leaf nodes
    - Height of the tree

##### Binary Tree
    - Binary Trees special case
    - A Tree whose elements have at most 2 children means max 2 children
    - we name them: Left child & Right child

##### Binary Tree Representation
    - A Tree is represented by a pointer to the topmost node in tree
    - if Tree is empty, means the value of root is NULL
    - A tree node contains 3 parts
        - Data
        - pointer to the left child
        - pointer to the right child

##### Binary Tree Properties
    1. Maximun number of nodes at level 'l' of a binary tree is (2^l)
        - level 0: 2^0 (1)
        - level 1: 2^1 (2)
        - level 3: 2^3 (8) ... level l: 2^l
    2. maximun number of nodes in a binary tree of height 'h is (2^h -1)
        - height 1: 2^1 - 1 (1) only root node
        - height 2: 2^2 - 1 (3) root node + 2 children
        - height 3: 2^3 - 1 (7) ... height h: 2^h - 1

        - if height is considred as level and height starts from 0
            - then formula will be 2^h+1 - 1
    3. in a binary tree with N node, minimum possible height
        - or minimum number of levels is ? log(base2)(N+1) - 1
        - eg: if total 15 nodes: then level will be log2(15+1) - 1 -> 3 
        - height will be log2(15+1) -> 4
    4. in binary tree where every node has 0 or 2 childrens (means nodes with not 1 children)
        - "number of leaf nodes" is always one more than nodes with two children.
        eg:                      1
                        2                 3
                  4         5        6         7
              8     9     10  11   12  13    14  15
        - here total number of childs with 2 children = 7
            - hence, number of leaf nodes will be one more than nodes with two children.
            - number of leaf nodes = 7 + 1 = 8 (8 9 10 11 12 13 14 15)

##### Reference
[https://www.youtube.com/watch?v=nbgty](https://www.youtube.com/watch?v=nbgtyBKn2tI&list=PLzjZaW71kMwQ-JABTOTypnpRk1BnD2Nx4)
