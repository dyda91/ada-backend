function diaDaSemana1(data) {
    const dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    const date = new Date(data);
    const dia1 = dias[date.getUTCDay()];
    return dia1;
}

const date = "2023-10-23"; 
const dia1 = diaDaSemana1(date);

module.exports = dia1;