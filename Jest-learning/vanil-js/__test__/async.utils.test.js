const asyncUtils = require('./../utils/async.utils')

test(
  'Promise test',
  async () => {
    const result = await asyncUtils.longRequest()

    expect(result).toBe('Hello, world')
  },
  10000
)