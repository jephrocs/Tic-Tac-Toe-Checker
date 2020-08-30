function isSolved(board) {

    //top left across
    if (board[0][0] === board[0][1] && board[0][0] === board[0][2] && board[0][0] === 1) {
        return 1
    }
    if (board[0][0] === board[0][1] && board[0][0] === board[0][2] && board[0][0] === 2) {
        return 2
    }
    // midAcross
    if (board[1][0] === board[1][1] && board[1][0] === board[1][2] && board[1][0] === 1) {
        return 1
    }
    if (board[1][0] === board[1][1] && board[1][0] === board[1][2] && board[1][0] === 2) {
        return 2
    }
    // bottom left across
    if (board[2][0] === board[2][1] && board[2][0] === board[2][2] && board[2][0] === 1) {
        return 1
    }
    if (board[2][0] === board[2][1] && board[2][0] === board[2][2] && board[2][0] === 2) {
        return 2
    }
    //top left down
    if (board[0][0] === board[1][0] && board[0][0] === board[2][0] && board[0][0] === 1) {
        return 1
    }
    if (board[0][0] === board[1][0] && board[0][0] === board[2][0] && board[0][0] === 2) {
        return 2
    }
    //top mid down
    if (board[0][1] === board[1][1] && board[0][1] === board[2][1] && board[0][1] === 1) {
        return 1
    }
    if (board[0][1] === board[1][1] && board[0][1] === board[2][1] && board[0][1] === 2) {
        return 2
    }
    // top rightDown
    if (board[0][2] === board[1][2] && board[0][2] === board[2][2] && board[0][2] === 1) {
        return 1
    }
    if (board[0][2] === board[1][2] && board[0][2] === board[2][2] && board[0][2] === 2) {
        return 2
    }
    // top right diag
    if (board[0][0] === board[1][1] && board[0][0] === board[2][2] && board[0][0] === 1) {
        return 1
    }
    if (board[0][0] === board[1][1] && board[0][0] === board[2][2] && board[0][0] === 2) {
        return 2
    }
    //bottom right diag
    if (board[2][0] === board[1][1] && board[2][0] === board[0][2] && board[2][0] === 1) {
        return 1
    }
    if (board[2][0] === board[1][1] && board[2][0] === board[0][2] && board[2][0] === 2) {
        return 2
    }
    else for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[i].length; j++) {
            if (board[i][j] === 0) {
                return -1
            } else if (board[0][1] === 0) {
                return -1
            } else if (board[2][2] === 0) {
                return -1
            } return 0
        }
    }


}
