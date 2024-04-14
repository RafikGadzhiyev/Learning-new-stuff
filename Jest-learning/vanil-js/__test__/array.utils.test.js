const arrayUtils = require('./../utils/array.utils')

const MOCK_ARRAY = [1, 2, 3, 4, 5]
const mockChunk = jest.fn(arrayUtils.chunk)


test(
    '[mocked chunk util] - should be called 2 times',
    () => {
        const calls = [
            [
                MOCK_ARRAY,
                3
            ],
            [
                [
                    ...MOCK_ARRAY,
                    ...MOCK_ARRAY
                ],
                3
            ]
        ]

        for (const call of calls) {
            mockChunk(...call)
        }

        // expect(mockChunk).toHaveBeenCalledTimes(calls.length)
        // or
        expect(mockChunk.mock.calls).toHaveLength(calls.length)

        expect(mockChunk.mock.calls[0][0]).toHaveLength(MOCK_ARRAY.length)
        expect(mockChunk.mock.results[0].value).toStrictEqual(
            arrayUtils.chunk(MOCK_ARRAY, 3)
        )
    }
)

test(
    '[Array utils][chunk function] - Chunks given array into chunks with 3 elements',
    function() {
        expect(
            arrayUtils.chunk(
                MOCK_ARRAY,
                3
            )
        )
        .toStrictEqual(
            [
                [1, 2, 3],
                [4, 5]
            ]
        )
    }
)

test(
    '[Array utils][chunk function] - Will throw an error',
    function() {
        expect(
            () => arrayUtils
                .chunk(
                    4,
                    3
                )
        )
        .toThrow()
    }
)

test(
    '[Array utils][chunk function] - Will return the same array, due to 0 chunk size',
    function() {
        expect(
            arrayUtils.chunk(MOCK_ARRAY)
        )
        .toStrictEqual(MOCK_ARRAY)
    }
)


test(
    '[Array utils][last function] - Returns last item from array',
    function() {
        expect(
            arrayUtils.last(MOCK_ARRAY)
        )
        .toBe(
            MOCK_ARRAY[MOCK_ARRAY.length - 1]
            )
    }
)

test(
    '[Array utils][last function] - Will throw an error',
    function() {
        expect(
            () => arrayUtils
                .last(
                    'Not an array'
                )
        )
        .toThrow()
    }
)