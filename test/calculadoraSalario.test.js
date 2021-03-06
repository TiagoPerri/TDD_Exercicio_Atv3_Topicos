const calculadoraSalario = require("../src/calculadoraSalario.js");

describe("Calculadora de salário", () =>{
    test("Cargo: Dev / Salário: 5000", () =>{
        let res = calculadoraSalario(5000, "Desenvolvedor");
        expect(res).toBe(4000);
    });

    test("Cargo: Dev / Salário: 5500", () =>{
        let res = calculadoraSalario(5500, "Desenvolvedor");
        expect(res).toBe(4400);
    });

    test("Cargo: Dev / Salário: 1000", () =>{
        let res = calculadoraSalario(1000, "Desenvolvedor");
        expect(res).toBe(900);
    });

    test("Cargo: DBA / Salário: 2750", () =>{
        let res = calculadoraSalario(2750, "DBA");
        expect(res).toBe(2062.5);
    });

    test("Cargo: DBA / Salário: 600", () =>{
        let res = calculadoraSalario(600, "DBA");
        expect(res).toBe(510);
    });

    test("Cargo: Testador / Salário: 2200", () =>{
        let res = calculadoraSalario(2200, "Testador");
        expect(res).toBe(1650);
    });

    test("Cargo: Testador / Salário: 550", () =>{
        let res = calculadoraSalario(550, "Testador");
        expect(res).toBe(467.50);
    });

    test("Cargo: Gerente / Salário: 2500", () =>{
        let res = calculadoraSalario(2500, "Gerente");
        expect(res).toBe(2000);
    });

    test("Cargo: Gerente / Salário: 6650", () =>{
        let res = calculadoraSalario(6650, "Gerente");
        expect(res).toBe(4655);
    });

    test("Cargo inválido - testando exceção", () =>{
        expect( () => { 
            calculadoraSalario(2500, "Designer")
        }).toThrow("Cargo inválido");
    });

    test("Salário inválido - testando exceção", () =>{
        expect( () => {
            calculadoraSalario(0, "Gerente")
        }).toThrow("Salário inválido");
    });
});