function createPhoneNumber(numbers) {
    if (numbers.length !== 10) {
      return "Cantidad de Números incorrecta debe ser menor a 10.";
    }
  
    const codigoArea = numbers.slice(0, 3).join('');
    const primeraParte = numbers.slice(3, 6).join('');
    const segundaParte = numbers.slice(6).join('');
  
    return `(${codigoArea}) ${primeraParte}-${segundaParte}`;
  }
    
  module.exports = createPhoneNumber;