/**
 * @description Chunks the given array to chunks of chunksSize size
 * @param { Array<any> } array 
 * @param { Number } chunkSize 
 * @returns { Array<any> }
 */
function chunk(array, chunkSize = 0) {
    if (!Array.isArray(array)) {
        throw Error('Type mismatch')
    }

    if (chunkSize === 0) {
        return array
    }

    const chunkedArray = [];

    for (let i = 0; i < array.length; ++i) {
        const lastChunk = chunkedArray[chunkedArray.length - 1]

        if (
            lastChunk === undefined
            || lastChunk.length === chunkSize
        ) {
            chunkedArray.push([])
        }

        chunkedArray[chunkedArray.length - 1].push(array[i])
    }

    return chunkedArray
}


/**
 * 
 * @param { Array<any> } array 
 * @returns { any | null }
 */
function last(array) {
    if (!Array.isArray(array)) {
        throw Error('Type mismatch')
    }

    return array[array.length - 1]
}

module.exports = {
    chunk,
    last
}