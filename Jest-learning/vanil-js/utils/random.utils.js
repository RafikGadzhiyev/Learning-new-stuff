/**
 * @description Returns a random number from the specified range.
 * @param { Number } rangeStart 
 * @param { Number } rangeEnd 
 * @param { Object } options
 * @param { Boolean } options.includeLast 
 * @returns { Number }
 */
function getRandomNumgerFromRange(rangeStart, rangeEnd, options = {}) {
    const {
        includeLast = true
    } = options;

    if (includeLast) {
        rangeEnd += 1;
    }

    return Math.floor(Math.random() * (rangeEnd - rangeStart) + rangeStart);
}

module.exports = {
    getRandomNumgerFromRange
}