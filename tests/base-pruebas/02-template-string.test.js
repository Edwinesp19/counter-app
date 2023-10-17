

import {getSaludo} from '../../src/base-pruebas/02-template-string';
// export function getSaludo(nombre) {
//     return 'Hola ' + nombre;
// }

// console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );


describe('Pruebas en el archivo 02-template-string', () => { 
    
    test('getSaludo debe de retornar Hola Edwin',()=>{

        const name='Edwin';
        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}`)
    });
 })