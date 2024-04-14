const randomUtils = require('./../utils/random.utils')

const MOCK_DATA = {
    range: {
        start: 5,
        end: 10,
    }
}

test(
    `Will return number between ${MOCK_DATA.range.start}-${MOCK_DATA.range.end}. Last number included`,
    function() {
        let randomNumberFromRange = randomUtils.getRandomNumgerFromRange(
            MOCK_DATA.range.start, 
            MOCK_DATA.range.end,
        )

        expect(randomNumberFromRange).toBeGreaterThanOrEqual(MOCK_DATA.range.start)
        expect(randomNumberFromRange).toBeLessThanOrEqual(MOCK_DATA.range.end)
    }
)

test(
    `Will return number between ${MOCK_DATA.range.start}-${MOCK_DATA.range.end}. Last number not included`,
    function() {
        let randomNumberFromRange = randomUtils.getRandomNumgerFromRange(
            MOCK_DATA.range.start, 
            MOCK_DATA.range.end,
            {
                includeLast: false,
            }
        )

        expect(randomNumberFromRange).toBeGreaterThanOrEqual(MOCK_DATA.range.start)
        expect(randomNumberFromRange).toBeLessThan(MOCK_DATA.range.end)
    }
)