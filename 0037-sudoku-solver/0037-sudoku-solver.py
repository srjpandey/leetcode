class Solution:
    def solveSudoku(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        row_dicts = {}
        for i in range(9):
            row_dicts[i] = set()

        col_dicts = {}
        for i in range(9):
            col_dicts[i] = set()
    
        box_dicts = {}
        for i in range(9):
            box_dicts[i] = set()

        for i in range(9):
            for j in range(9):
                if board[i][j] != ".":
                    num = int(board[i][j])
                    row_dicts[i].add(num)
                    col_dicts[j].add(num)
                    box_dicts[(i // 3) * 3 + (j // 3)].add(num)
        
        def isValidSudoku(row,col,currNum):
            
            currNum = int(currNum)
            if currNum in row_dicts[row]:
                return False
            
            if currNum in col_dicts[col]:
                return False

            coordinates = (row//3)*3 + (col//3)

            if currNum in box_dicts[coordinates]:
                return False

            return True
        
        def solve():

            for i in range(9):
                for j in range(9):
                    if board[i][j] == ".":
                        for k in range(1,10):
                            if isValidSudoku(i, j, k):
                                board[i][j] = str(k)  # Place the number
                                row_dicts[i].add(k)
                                col_dicts[j].add(k)
                                box_dicts[(i // 3) * 3 + (j // 3)].add(k)

                                if solve():  # Recurse
                                    return True
                                    
                                board[i][j] = "."
                                row_dicts[i].remove(k)
                                col_dicts[j].remove(k)
                                box_dicts[(i // 3) * 3 + (j // 3)].remove(k)
                        return False
            return True
        
        solve()
            
                        
                                


            

       
        


        