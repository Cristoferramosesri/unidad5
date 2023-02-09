const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
for (let index = 0; index < meses.length; index++) {
    mesesLargos = [];
    if (meses[index].length>6) {
        mes = meses[index].toUpperCase;
        mesesLargos.push(mes);
        console.log(mes);
    }
}
console.log(mesesLargos);