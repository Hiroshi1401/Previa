const horas = documento.getElementById('horas');
const minutos = documento.getElementById('minutos');
const segundos = documento.getElementById('segundos');

const relógio = setInterval(função tempo() {
    deixar dataHoje = novo Data();
    deixar horas = dataHoje.getHours();
    deixar min = dataHoje.getMinutes();
    deixar é = dataHoje.getSeconds();

    se (horas < 10) horas = '0' + horas;

    se (min < 10) min = '0' + min;

    se (é < 10) é = '0' + é;

    horas.textoConteúdo = horas;
    minutos.textoConteúdo = min;
    segundos.textoConteúdo = é;

})
  