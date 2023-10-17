
import { getPerson } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas en 06-deses-obj',()=>{

    test('getPerson debe retornar un objeto',()=>{
        const clave = "Edwin";
        const edad = 22;
        const rango = 'lk';

        const obj = getPerson({clave,edad,rango});

        expect(obj).toEqual({
            nombreClave: clave,
            anios: edad,
            rango: rango,
            latlng: {
                lat: 14.1232,
                lng: -12.3232}
        });



    });
});

