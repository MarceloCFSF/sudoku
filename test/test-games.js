/* Standard Game string format:
line 0: space separated list of valid symbols
line 1+: 
  comma separated values with each line representing a row on the grid.
  use a space (" ") to denote an empty cell
*/
const testGamesCompletedInvalid = {
  a: `1 2 3 4
2,3,4,1
4,1,3,2
3,2,1,3
1,4,2,3`,
  b: `1 2 3 4 5 6 7 8 9
8,7,3,9,6,2,1,4,5
9,2,4,1,8,5,6,7,3
1,6,5,3,7,4,2,9,8
4,8,9,5,3,1,7,6,2
7,5,2,6,5,9,3,8,1
3,1,6,8,2,7,4,5,9
6,9,1,7,5,3,8,2,4
5,4,7,2,1,8,9,3,6
2,3,8,4,9,6,5,1,7`,
  c: `1 2 3 4
2,1,4,3
4,0,2,1
3,2,1,4
1,4,3,2`,
  d: `1 2 3 4 5 6 7 8 9
8,6,1,4,5,9,2,7,3
3,5,7,6,8,2,1,4,9
2,9,4,3,7,1,8,5,6
6,8,2,1,4,5,3,9,7
9,1,3,7,6,8,4,2,5
4,7,5,2,9,3,6,1,8
1,4,9,5,3,6,7,8,2
7,3,1,9,2,4,5,6,1
5,2,6,8,1,7,9,3,4`
}

const testGamesCompletedValid = {
  a: `1 2 3 4
2,3,4,1
4,1,3,2
3,2,1,4
1,4,2,3`,
  b: `1 2 3 4 5 6 7 8 9
8,7,3,9,6,2,1,4,5
9,2,4,1,8,5,6,7,3
1,6,5,3,7,4,2,9,8
4,8,9,5,3,1,7,6,2
7,5,2,6,4,9,3,8,1
3,1,6,8,2,7,4,5,9
6,9,1,7,5,3,8,2,4
5,4,7,2,1,8,9,3,6
2,3,8,4,9,6,5,1,7`,
  c: `1 2 3 4
2,1,4,3
4,3,2,1
3,2,1,4
1,4,3,2`,
  d: `1 2 3 4 5 6 7 8 9
8,6,1,4,5,9,2,7,3
3,5,7,6,8,2,1,4,9
2,9,4,3,7,1,8,5,6
6,8,2,1,4,5,3,9,7
9,1,3,7,6,8,4,2,5
4,7,5,2,9,3,6,1,8
1,4,9,5,3,6,7,8,2
7,3,8,9,2,4,5,6,1
5,2,6,8,1,7,9,3,4`
}