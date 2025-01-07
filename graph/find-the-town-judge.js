/**
    In a town, there are n people labeled from 1 to n. 
    There is a rumor that one of these people is secretly the town judge.
    If the town judge exists, then:
        1. The town judge trusts nobody.
        2. Everybody (except for the town judge) trusts the town judge.
        3. There is exactly one person that satisfies properties 1 and 2.
 
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 
    Logic 1: since judge trust nobody, it means if outdgree will be zero
    - vertext with no outdegree will be the judge
    Logic 2: Total trust gain = (n -1) means all are trusting her except herself
             Total trust to other = 0 means she should not trust anyone
 */
var findJudge = function (n, trust) {
  const indegree = indegreeFn(n, trust);
  const outdegree = outdegreeFn(n, trust);
  for (let i = 1; i < indegree.length; i++) {
    // indegree = n - 1; all should trust
    // outdegree = 0;
    // means all incoming trust and no outgoing trust;
    if (indegree[i] - outdegree[i] === n - 1) return i;
  }
  return -1;
};

/**
 * @param {number} n vertex from 1 to n
 * @example [[1,3],[2,3]]
 * @return {number[]} [0, 0, 0, 2]
                       0  1  2  3
*/
function indegreeFn(n, trust) {
  const indegree = Array.from({ length: n + 1 }, () => 0);
  for (let i = 0; i < trust.length; i++) {
    indegree[trust[i][1]]++;
  }
  console.log("indegree: ", indegree);
  return indegree;
}

/**
 * @example [[1,3],[2,3]]
 * @return {number[]} [0, 1, 1, 0]
                       0  1  2  3
*/
function outdegreeFn(n, trust) {
  const outdegree = Array.from({ length: n + 1 }, () => 0);
  for (let i = 0; i < trust.length; i++) {
    outdegree[trust[i][0]]++;
  }
  console.log("outdegree: ", outdegree);
  return outdegree;
}

(function main() {
  const n = 3;
  const trust = [
    [1, 3],
    [2, 3],
  ];
  console.log(findJudge(3, trust));
})();
