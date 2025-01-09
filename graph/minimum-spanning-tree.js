/*
    - Prim's Algorithm (kind of Greedy Approach)

            1 
      5  /  |  \ 15
        /   |   \
       0    10  3
        \   |   /
      8  \  |  / 20
            2

    - Maintain two Set
        - MSET {}
        - set {0, 1, 2, 3}
    - res = 0 (to calculate total weight)

    ** Find the min. edge which connect the current MSET to remaining vertex

    res = 0 
    set = {0, 1, 2, 3}

    MSET       |     Set           |    res
    {0}            {1, 2, 3}             0
    {0, 1}         {2, 3}               0 + 5
    {0, 1, 2}      {3}                  0 + 5 + 8 
    {0, 1, 2, 3}   {}                   0 + 5 + 8 + 15 = 28 

           1 
      5  /   \ 15
        /     \
       0       3
        \     
      8  \     
          2

*/