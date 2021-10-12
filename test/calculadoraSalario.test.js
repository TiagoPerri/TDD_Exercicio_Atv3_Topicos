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

});