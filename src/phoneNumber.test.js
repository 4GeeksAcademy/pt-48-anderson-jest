const createPhoneNumber = require('./phoneNumber');

test('Numero de telefono correcto', () => {
  const phoneNumberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const phoneNumberArray2 = [0, 2, 3, 4, 5, 6, 7, 8, 9, 1];
  const phoneNumberArray3 = [0, 1, 0, 1, 0, 1, 0, 8, 9, 1];

  const validPhoneNumber = createPhoneNumber(phoneNumberArray);
  const validPhoneNumber2 = createPhoneNumber(phoneNumberArray2);
  const validPhoneNumber3 = createPhoneNumber(phoneNumberArray3);
  expect(validPhoneNumber).toBe('(123) 456-7890');
  expect(validPhoneNumber2).toBe('(023) 456-7891');
  expect(validPhoneNumber3).toBe('(010) 101-0891');
});

test('Retorna error por input invalido', () => {
  const invalidPhoneNumberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const errorMessage = createPhoneNumber(invalidPhoneNumberArray);

  expect(errorMessage).toBe('Cantidad de Números incorrecta debe ser menor a 10.');
});
