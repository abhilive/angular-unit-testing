import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
  it('should display weak if strength is 5', () => {
    let pipe = new StrengthPipe();

    expect(pipe.transform(5)).toEqual('5 (weak)');
  });

  it('should display strong if strength is equal to 10 and less than 20', () => {
    let pipe = new StrengthPipe();

    expect(pipe.transform(10)).toEqual('10 (strong)');
  });

  it('should diaplay unbelievable if greater than 20', () => {
    let pipe = new StrengthPipe();

    expect(pipe.transform(20)).toEqual('20 (unbelievable)');
  });
});
