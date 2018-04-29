/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let direction = {
        U: 0,
        D: 0,
        L: 0,
        R: 0,
    };
    
    for (let i in moves) {
        direction[moves[i]] += 1;
    }
    
    return direction.U === direction.D && direction.L === direction.R;
};