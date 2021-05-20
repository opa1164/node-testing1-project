const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  let input = {}, expected = {};

  beforeEach(() => {
    input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
  })

  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  test('[2] returns a copy, leaving the original object intact', () => {
    const actual = utils.trimProperties(input)
    expect(actual).not.toEqual(input);
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  let input = {}, expected = {};

  beforeEach(() => {
    input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
  })

  test('[1] returns an object with the properties trimmed', () => {
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toEqual(expected)
  })
  test('[4] the object returned is the exact same one we passed in', () => {
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toEqual(input);
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  it('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const array = [1, 2, 3, 4, 5]
    const expected = utils.findLargestInteger(array)
    expect(expected).toEqual(5)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  test("[6] the FIRST CALL of counter.countDown returns the initial count",()=>{
    const actual = counter.countDown()
    expect(actual).toEqual(3)
})
test("7] the SECOND CALL of counter.countDown returns the initial count minus one",()=>{
    counter.countDown()
    const actual = counter.countDown()
    expect(actual).toEqual(2)
})
test("[8] the count eventually reaches zero but does not go below zero",()=>{
    for (let i = 0; i<5; i++){
        counter.countDown()
    }
    const actual = counter.countDown()
    expect(actual).toEqual(0)
})
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  test("[9] the FIRST call of seasons.next returns \"summer\"",()=>{
    const season = seasons.next()
    expect(season).toEqual("summer")
})
test("[10] the SECOND call of seasons.next returns \"fall\"",()=>{
    seasons.next()
    const season = seasons.next()
    expect(season).toEqual("fall")
})
test("[11] the THIRD call of seasons.next returns \"winter\"",()=>{
    for (let i = 0; i<2; i++){
        seasons.next()
    }
    const season = seasons.next()
    expect(season).toEqual("winter")
})
test("[12] the FOURTH call of seasons.next returns \"spring\"",()=>{
    for (let i = 0; i<3; i++){
        seasons.next()
    }
    const season = seasons.next()
    expect(season).toEqual("spring")
})
test("[13] the FIFTH call of seasons.next returns again \"summer\"",()=>{
    for (let i = 0; i<4; i++){
        seasons.next()
    }
    const season = seasons.next()
    expect(season).toEqual("summer")
})
test("[14] the 40th call of seasons.next returns \"spring\"",()=>{
    for (let i = 0; i<39; i++){
        seasons.next()
    }
    const season = seasons.next()
    expect(season).toEqual("spring")
})
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test("[15] driving the car returns the updated odometer", ()=>{
    const initialOdometer = focus.odometer
    const updated = focus.drive(100)
    expect(updated).toBeGreaterThan(initialOdometer)
    expect(updated).toEqual(100)
})
test("[16] driving the car uses gas", ()=>{
    const initialFuel = focus.tank
    focus.drive(100)
    const updated = focus.tank
    expect(updated).toBeLessThan(initialFuel)
    expect(updated).toEqual(initialFuel - (100/focus.mpg))
})
test("[17] refueling allows to keep driving", ()=>{
    focus.drive(600)
    const initialOdometer = focus.odometer
    focus.drive(600)
    const secondOdometer = focus.odometer
    focus.refuel(10)
    focus.drive(600)
    const finalOdometer = focus.odometer
    expect(initialOdometer).toEqual(secondOdometer)
    expect(finalOdometer).toBeGreaterThan(initialOdometer)
})
test("[18] adding fuel to a full tank has no effect", ()=>{
    const initialFuel = focus.tank
    focus.refuel(10)
    const updated = focus.tank
    expect(updated).toEqual(initialFuel)
    expect(updated).toEqual(focus.tank)
})
})

describe('[Exercise 7] isEvenNumberAsync', () => {
test("[19] resolves true if passed an even number", async ()=>{
    const actual = await utils.isEvenNumberAsync(2)
    expect(actual).toBe(true)
})
test("[20] resolves false if passed an odd number", async ()=>{
    const actual = await utils.isEvenNumberAsync(3)
    expect(actual).toBe(false)
})
test("[21] rejects an error with the message \"number must be a number\" if passed a non-number type", async ()=>{
    const actual = await utils.isEvenNumberAsync("test")
    expect(actual).toBe("number must be a number")
})
test("[22] rejects an error with the message \"number must be a number\" if passed NaN", async ()=>{
    const actual = await utils.isEvenNumberAsync(NaN)
    expect(actual).toBe("number must be a number")
})
})
