import { Binary } from './binary';

describe('binary', () => {
  test('0 is decimal 0', () => expect(new Binary('0').toDecimal()).toEqual(0));

  xtest('1 is decimal 1', () => expect(new Binary('1').toDecimal()).toEqual(1));

  xtest('10 is decimal 2', () => expect(new Binary('10').toDecimal()).toEqual(2));

  xtest('11 is decimal 3', () => expect(new Binary('11').toDecimal()).toEqual(3));

  xtest('100 is decimal 4', () => expect(new Binary('100').toDecimal()).toEqual(4));

  xtest('1001 is decimal 9', () => expect(new Binary('1001').toDecimal()).toEqual(9));

  xtest('11010 is decimal 26', () => expect(new Binary('11010').toDecimal()).toEqual(26));

  xtest('10001101000 is decimal 1128', () => expect(new Binary('10001101000').toDecimal()).toEqual(1128));

  xtest('00011111 is decimal 31', () => expect(new Binary('00011111').toDecimal()).toEqual(31));

  xtest('invalid inputs are decimal 0', () => {
    expect(new Binary('carrot').toDecimal()).toEqual(0);
    expect(new Binary('012').toDecimal()).toEqual(0);
    expect(new Binary('10nope').toDecimal()).toEqual(0);
    expect(new Binary('nope10').toDecimal()).toEqual(0);
    expect(new Binary('10nope10').toDecimal()).toEqual(0);
  });
});
