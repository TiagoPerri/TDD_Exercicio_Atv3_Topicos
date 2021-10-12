function calculadoraSalario(valorSal, cargo){
    function formulaSalario(valorSal, porcentagem){
        return valorSal - ((valorSal * porcentagem) / 100);
    }

    switch(cargo){
        case "Desenvolvedor":
            if(valorSal >= 3000){
                return formulaSalario(valorSal, 20);
            }else{
                return formulaSalario(valorSal, 10);
            }
        break;

        case "DBA":
            if(valorSal >= 2000){
                return formulaSalario(valorSal, 25);
            }else{
                return formulaSalario(valorSal, 15);
            }
        break;

        case "Testador":
            if(valorSal >= 2000){
                return formulaSalario(valorSal, 25);
            }
        break;
    }
}

module.exports = calculadoraSalario;