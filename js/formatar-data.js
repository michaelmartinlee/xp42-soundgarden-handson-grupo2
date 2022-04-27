//Função para formatar a saída de uma data ISO
const formatarData = (dataISO) => {
    const doisDigitos = (umDigito) => {
        return umDigito < 10 ? '0' + umDigito : umDigito;
    }
    dataISO = new Date(dataISO)
    const diaDoMes = dataISO.getDate();
    const mes = dataISO.getMonth(); // Muito cuidado, Janeiro é o mesmo que 0, não 1.
    const ano = dataISO.getFullYear();
    const dataFormatada = doisDigitos(diaDoMes) + "/" + doisDigitos(mes + 1) + "/" + ano;
    return dataFormatada
}