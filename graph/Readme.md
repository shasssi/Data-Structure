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

##### Graph Representation
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
    - Weighted graph
    - unweighted graph

![image](https://github.com/user-attachments/assets/73ef57fd-0317-4fa7-98a9-e819b9ed5ef5)
    
