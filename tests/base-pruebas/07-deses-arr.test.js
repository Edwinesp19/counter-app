import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";


describe('Pruebas en 07-deses-arr', () => { 
    test('debe de retornar un string y un numero',()=>{

        // const texto = 'ABC';
        // const numero = 123;

        const [letras,numeros] = retornaArreglo();

        expect(letras).toBe('ABC');
        expect(numeros).toBe(123);
        //el toBe se encarga de evaluar si el tipo de dato es el mismo

        expect(typeof letras).toBe('string')
        expect(typeof numeros).toBe('number')
        
        expect(letras).toEqual(expect.any(String))
        
    });
 });