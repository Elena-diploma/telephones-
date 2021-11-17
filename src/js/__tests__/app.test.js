import telephone from '../app';

test('проверка некорректного телефона', () => {
    const received = telephone('Lena12d');
    const expected = "Не верный формат телефонного номера";
    expect(received).toEqual(expected);
});
test('проверка корректного российского номера телефона с 8', () => {
    const received = telephone('8(967) 123-23-45');
    const expected = '+79671232345';
    expect(received).toEqual(expected);
});
test('проверка корректного российского номера телефона с 7', () => {
    const received = telephone('+7 967 123-23-45');
    const expected = '+79671232345';
    expect(received).toEqual(expected);
});
test('проверка корректного не российского номера телефона', () => {
    const received = telephone('+86 567 234 1234');
    const expected = '+865672341234';
    expect(received).toEqual(expected);
});