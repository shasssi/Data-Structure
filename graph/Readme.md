##### Tree
    - It is a hierarchial data structure. (parent-child relation)
    - It is a special type of graph. Has exactly one root node.
    - Applications:
        - Hierarchial data representation (eg. file systems).
        - Search operations (eg. binary search trees).
        - Parsing expressions and data.

##### Graph
    - It is a collection of vertices (or nodes) and edges.
    - It can have cycles or be acyclic.
    - Can be directed or unidirected.
    - Can have weighted or unweighted edges.
    - No strict parent-child relationships.
    - Applications:
        - Social networks (eg. Facebook connections).
        - Navigation and routing (eg. Google Maps).
        - Network topology and communication systems.
        - Dependency resoluttion (eg. task scheduling).

##### Graph Properties
    v1 ------------- v3 
    |                |  \ 
    |                |   \
    |                |   v5
    |                |   /
    |                |  /
    v2 ------------- v4

    G = {V, E} V: vertices, E: edges
    V = {v1, v2, v3, v4, v5}
    E = {(v1, v2), (v1, v3), (v2, v4), (v3, v4), (v4, v5), (v3, v5)}

    - Undirected Graph
    - Directed Graph

##### Undirected Graph
    v1 ------------- v3 
    |                |  \ 
    |                |   \
    |                |   v5   (here we can go from v1 to v3 and v3 to v1)
    |                |   /
    |                |  /
    v2 ------------- v4

    - degree of any node/vertex (how many path is crossed from this node or how many paths are connected to it)
    - degree (V3) = 3 {(v1, v3), (v3, v4), (v3, v5)}
    - d(v2) = 2 {(v1, v2), (v2, v4)}

    - Maximum number of edges if vertex (v) are given
    - (v * (v - 1))/2
    - eg. vertex are 5, Max no of edges = (5*(5-1))/2 = 20/2 = 10 edges

##### Directed Graph
    V1 ------------>> V3 
    |                |    \ 
    |                |     \
    |                |      v
    |                |      V5   (here we can go from V1 to V3 but not is reversed manner V3 to V1)
    |                |     ^
    |                |    /
    v                v   /
    v                v  /
    V2 ----------->> V4

    - degree : 
        - indegree (no. of incoming paths)
        - outdegree (no. of outgoing paths)
    - indegree(v3) = 1 {(v1, v3)}
    - outdegree(v3) = 2 {(v3, v4), (v3, v5)}
    - id(v2) = 1 {(v1, v2)}
    - od(v2) = 1 {(v2, v4)}

    - Maximum number of edges if vertex (v) are given
    - (v * (v - 1))
    - eg. vertex are 5, Max no of edges = (5*(5-1)) = 20 edges

##### Cyclic Graph
    - If there is a path that exists which begin and ends with same vertex.

##### Types of Graph
    - Cyclic undirected
    - Cyclic directed
    - Acyclic undirected
    - Acyclic directed
    - Weighted graph (edges will have some value)
    - unweighted graph

![image](https://github.com/user-attachments/assets/73ef57fd-0317-4fa7-98a9-e819b9ed5ef5)
    
##### Graph Representaion
    - Adjacency Matrix
    - Adjacency List

##### Adjacency Matrix
                                         |  0  1  2  3
                                     ----------------------- 
    0                                   0|  0  1  1  0        
    |  \                                1|  1  0  1  0
    |   2 --- 3  = Matrix: (4 X 4)      2|  1  1  0  1          here 0 means no path and 1 means path exist
    |  /           no. of vertex 4      3|  0  0  1  0
    1                                    |

    - size of matrix = (|v| * |v|),  v: no. of vertex.
    - for undirected graph it is Symmetric Maxtrix
        - if we draw a line across diagonal, we could see a mirror

    - Directed Graph
    0                                      |  0  1  2  3
    ^ \                                 -----------------------            
    |  \                                  0|  0  0  1  0
    |   v                                 1|  1  0  0  0
    |   2 --->> 3    Matrix: (4 X 4)      2|  0  1  0  1          here 0 means no path and 1 means path exist
    |   / <<---      no. of vertex 4      3|  0  0  1  0
    |  / 
    | v        
    1  

##### How to handle vertices with Arbitary name ?
    abc                    0
    |  \                   | \
    |  cde --- efg  <===>  |   2 --- 3 
    |  /                   | /
    bcd                    1

    - we can create a hash table 'h' for mapping the name
    h{abc} = 0, h{bcd} = 1, h{cde} = 2, h{efg} = 3

    - we can also store in array --->  [abc, bcd, cde, efg] 
                                         0    1    2    3

##### Properties of Adjacency Matrix
           (v)
        0  1  2  3 
 -----------------------
     0|  0  1  1  0      
 (u) 1|  1  0  1  0
     2|  1  1  0  1      
     3|  0  0  1  0

    - Space required = O(v*v), v: no of vertex
    - check if 'u' & 'v' are adjacent (or have edges) = O(1)
        - we can directly check by arr[u][v], eg: check b/w 1 & 2, arr[1][3] = 1 (edges present)
    - Find all vertices adjacent to u = O(v)
        - here we need to check all vertices, eg, for u=1, we need to check all v=(0,1,2,3)
    - Find degree of u = O(v)
        - again we need to check all v to check the crossing path
    - Add/Remove an edge = O(1)
        - arr[u][v] = 0/1
