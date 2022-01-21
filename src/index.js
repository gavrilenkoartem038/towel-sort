
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix != null) {
        return matrix.map((e, index) => {
            if (index % 2 != 0) {
              return e.reverse()
            } return e
        }).flat()
    } return []  
}
