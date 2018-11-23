const { sum, mul, sub, div, sqr } = require("../../src/math");


test("Adding 1 + 1 equals 2", () => {
  expect(sum(1, 1)).toBe(2)
})
test("Multiplying 1 * 1 equals 1", () => {
  expect(mul(1, 1)).toBe(1)
})
test("Subtracting 1 - 1 equals 0", () => {
  expect(sub(1, 1)).toBe(0)
})
test("Dividing 1 / 1 equals 1", () => {
  expect(div(1, 1)).toBe(1)
})
test("Squaring 2 equals 4", () => {
    expect(sqr(2)).toBe(4)
})

// it('renders', () => {
//   const wrapper = shallow(<Hello name="Jack" />);
//   expect(wrapper.find('p').text()).toEqual('Hello, Jack!');
// });