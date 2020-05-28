/* Standard Game string format:
line 0: space separated list of valid symbols
line 1+: 
  comma separated values with each line representing a row on the grid.
  use a space (" ") to denote an empty cell
*/
const test44EasyGameA = {
  input: `1 2 3 4
 ,1, ,4
4,2,1, 
 ,3,4,2
2, ,3, `,
  complete: `1 2 3 4
3,1,2,4
4,2,1,3
1,3,4,2
2,4,3,1`,
  completeInvalid1: `1 2 3 4
3,1,2,4
4,2,1,3
1,3,3,2
2,4,3,1`, // invalid @ [2,2]
  completeInvalid2: `1 2 3 4
2,1,2,4
4,2,1,3
1,3,4,2
2,4,3,1`, // invalid @ [0,0]
  completeInvalid3: `1 2 3 4
3,1,2,4
4,2,1,@
1,3,4,2
2,4,3,1`, // invalid @ [1,3]
}

const test99EasyGameA = {
  input: `1 2 3 4 5 6 7 8 9
 ,1, , ,4,8,7,2, 
 ,7, ,2, , ,5, ,6
3, , ,7, , ,4, , 
 , ,5, ,6, , ,7,8
6, , ,5, ,3, , ,9
2,3, , ,9, ,1, , 
 , ,8, , ,6, , ,2
4, ,3, , ,5, ,1, 
 ,9,2,3,8, , ,5, `,
  complete: `1 2 3 4 5 6 7 8 9
5,1,9,6,4,8,7,2,3
8,7,4,2,3,1,5,9,6
3,2,6,7,5,9,4,8,1
9,4,5,1,6,2,3,7,8
6,8,1,5,7,3,2,4,9
2,3,7,8,9,4,1,6,5
7,5,8,4,1,6,9,3,2
4,6,3,9,2,5,8,1,7
1,9,2,3,8,7,6,5,4`,
  completeInvalid1: `1 2 3 4 5 6 7 8 9
5,1,9,6,4,8,7,2,3
8,7,4,2,3,1,5,9,6
3,2,6,7,5,9,4,8,1
9,4,5,1,6,1,3,7,8
6,8,1,5,7,3,2,4,9
2,3,7,8,9,4,1,6,5
7,5,8,4,1,6,9,3,2
4,6,3,9,2,5,8,1,7
1,9,2,3,8,7,6,5,4`, // invalid @ [3,5]
  completeInvalid2: `1 2 3 4 5 6 7 8 9
5,1,9,6,4,8,7,2,3
8,7,4,2,3,1,5,9,6
3,2,6,7,5,9,4,8,1
9,4,5,1,6,2,3,7,8
6,8,1,5,7,3,2,4,9
2,3,7,8,9,4,1,6,5
7,5,8,4,1,6,9,3,2
4,6,3,9,2,5,8,1,7
1,9,2,3,8,7,6,5,1`, // invalid @ [8,8]
  completeInvalid3: `1 2 3 4 5 6 7 8 9
5,1,9,6,4,8,7,2,3
8,7,4,2,3,1,5,9,6
3,2,6,7,5,9,4,8,1
9,4,5,1,6,2,3,7,8
6,8,1,5,7,3,2,4,9
2,3,7,8,9,4,1,6,5
7,5,8,4,1,6,9,3,2
4,6,E,9,2,5,8,1,7
1,9,2,3,8,7,6,5,4`, // invalid @ [7,2]
}