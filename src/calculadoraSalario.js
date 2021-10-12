function calculadoraSalario(valorSal, cargo){
    function formulaSalario(valorSal, porcentagem){
        return valorSal - ((valorSal * porcentagem) / 100);
    }

    switch(cargo){
        case "Desenvolvedor":
            if(valorSal >= 3000){
                return formulaSalario(valorSal, 20);
            }
        break;
    }
}

module.exports = calculadoraSalario;