// Configuración
const cambiarPatron = true;
const diasSiguientes = 100;
const fechaInicio = new Date("2024-08-19T00:00:00");

function calcularHoraAlmuerzo(diaAnterior, horaAnterior) {
    if (cambiarPatron) {
        return horaAnterior === "12:30" ? "11:30" : "12:30";
    } else {
        return horaAnterior === "11:30" ? "12:30" : "11:30";
    }
}

function horaAlmuerzoParaFecha(fecha) {
    let horaAlmuerzo = "12:30";
    let diaActual = new Date(fechaInicio);

    while (diaActual < fecha) {
        diaActual.setDate(diaActual.getDate() + 1);
        if (diaActual.getDay() >= 1 && diaActual.getDay() <= 5) { // Lunes a Viernes
            horaAlmuerzo = calcularHoraAlmuerzo(new Date(diaActual.getTime() - 86400000), horaAlmuerzo);
        }
    }

    return horaAlmuerzo;
}

function imprimirHorasAlmuerzo() {
    const resultadosDiv = document.getElementById("resultados");
    let horaAlmuerzo = "12:30";
    resultadosDiv.innerHTML = `<p>El ${formatFecha(fechaInicio)}, te toca almorzar a las ${horaAlmuerzo}.</p>`;

    for (let i = 1; i <= diasSiguientes; i++) {
        let fechaActual = new Date(fechaInicio);
        fechaActual.setDate(fechaActual.getDate() + i);

        if (fechaActual.getDay() >= 1 && fechaActual.getDay() <= 5) { // Lunes a Viernes
            horaAlmuerzo = calcularHoraAlmuerzo(new Date(fechaActual.getTime() - 86400000), horaAlmuerzo);
            const dia = fechaActual.getDate();
            const mes = fechaActual.getMonth() + 1; // Meses de 0 a 11
            const diaNombre = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"][fechaActual.getDay()];

            resultadosDiv.innerHTML += `<p>${diaNombre} ${dia}/${mes}: ${horaAlmuerzo}</p>`;

        }
    }
}

function formatFecha(fecha) {
    const dia = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"][fecha.getDay()];
    const diaDelMes = fecha.getDate();
    const mes = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"][fecha.getMonth()];
    const año = fecha.getFullYear();
    return `${dia} ${diaDelMes} de ${mes} de ${año}`;
}

function calcularHorasAlmuerzo() {
    imprimirHorasAlmuerzo();
}
