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
});