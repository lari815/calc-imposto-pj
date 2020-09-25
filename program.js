
function calculo_simples_nacional(aliquota_faixa, parc_ded) {
  return (parseFloat(document.getElementById("fat_mensal").value) * 12 * aliquota_faixa - parseFloat(parc_ded)) / (parseFloat(document.getElementById("fat_mensal").value) * 12);
}

function calculo_ir(lucro_presumido) {
  if (lucro_presumido > 240000) {
    return parseFloat(lucro_presumido) * 0.15 + (parseFloat(lucro_presumido) - 240000) * 0.1;
  } else {
    return parseFloat(lucro_presumido) * 0.15;
  }
}

function calculo_ircs(lucro_real) {
  var first_part = lucro_real * 0.15
  var second_part = (lucro_real > 240000) ? (lucro_real - 240000) * 0.10 : 0
  var third_part = lucro_real * 0.09

  var sum = first_part + second_part + third_part

  if (sum < 0) {
    return 0;
  } else {
    return sum;
  }
}

function calculo_piscofins() {
  var fatMensal = parseFloat(document.getElementById("fat_mensal").value)
  var custoMerc = parseFloat(document.getElementById("custos_merc").value)
  var custoMkt = parseFloat(document.getElementById("custos_mkt").value)

  if (((fatMensal * 0.0925) - ((custoMerc + custoMkt) * 0.0925)) * 12 < 0) {
    return 0;
  } else { 
    return ((fatMensal * 0.0925) - ((custoMerc + custoMkt) * 0.0925)) * 12;
  }
}

//simples nacional

function selectLimiteFaixa1() {
  var tipo = ["i", "ii", "iii", "iv", "v"]
  var faixa = ["180000", "180000", "180000", "4800000", "180000"]

  return faixa[tipo.lastIndexOf(document.getElementById("cat_simples").value)]
}

function selectAliquotaFaixa1() {
  var tipo = ["i", "ii", "iii", "iv", "v"]
  var faixa = [0.04, 0.45, 0.06, 0.3, 0.155]
  
  return faixa[tipo.lastIndexOf(document.getElementById("cat_simples").value)]
}

function selectParcDedFaixa1() {
  var tipo = ["i", "ii", "iii", "iv", "v"]
  var faixa = ["0", "0", "0", "72000", "0"]

  return faixa[tipo.lastIndexOf(document.getElementById("cat_simples").value)]
}

function selectLimiteFaixa2() {
  var tipo = ["i", "ii", "iii", "iv", "v"]
  var faixa = ["360000", "360000", "360000", "180000", "360000"]
  
  return faixa[tipo.lastIndexOf(document.getElementById("cat_simples").value)]
}

function selectAliquotaFaixa2() {
  var tipo = ["i", "ii", "iii", "iv", "v"]
  var faixa = [0.073, 0.078, 0.112, 0.045, 0.18]
  
  return faixa[tipo.lastIndexOf(document.getElementById("cat_simples").value)]
}

function selectParcDedFaixa2() {
  var tipo = ["i", "ii", "iii", "iv", "v"]
  var faixa = ["0", "0", "0", "72000", "0"]
  
  return faixa[tipo.lastIndexOf(document.getElementById("cat_simples").value)]
}

function selectLimiteFaixa3() {
  var tipo = ["i", "ii", "iii", "iv", "v"]
  var faixa = ["720000", "720000", "720000", "360000", "720000"]
  
  return faixa[tipo.lastIndexOf(document.getElementById("cat_simples").value)]
}

function selectAliquotaFaixa3() {
  var tipo = ["i", "ii", "iii", "iv", "v"]
  var faixa = [0.073, 0.078, 0.112, 0.045, 0.18]
  
  return faixa[tipo.lastIndexOf(document.getElementById("cat_simples").value)]
}

function selectParcDedFaixa3() {
  var tipo = ["i", "ii", "iii", "iv", "v"]
  var faixa = ["0", "0",  "0", "72000", "0"]
  
  return faixa[tipo.lastIndexOf(document.getElementById("cat_simples").value)]
}

function selectLimiteFaixa4() {
  var tipo = ["i", "ii", "iii", "iv", "v"]
  var faixa = ["1800000", "1800000", "1800000", "720000", "1800000"]
  
  return faixa[tipo.lastIndexOf(document.getElementById("cat_simples").value)]
}

function selectAliquotaFaixa4() {
  var tipo = ["i", "ii", "iii", "iv", "v"]
  var faixa = [0.107, 0.112, 0.16, 0.102, 0.205]
  
  return faixa[tipo.lastIndexOf(document.getElementById("cat_simples").value)]
}

function selectParcDedFaixa4() {
  var tipo = ["i", "ii", "iii", "iv", "v"]
  var faixa = ["22500", "22500", "35640", "12420", "17100"]
  
  return faixa[tipo.lastIndexOf(document.getElementById("cat_simples").value)]
}

function selectLimiteFaixa5() {
  var tipo = ["i", "ii", "iii", "iv", "v"]
  var faixa = ["3600000", "3600000", "3600000", "1800000", "3600000"]
  
  return faixa[tipo.lastIndexOf(document.getElementById("cat_simples").value)]
}

function selectAliquotaFaixa5() {
  var tipo = ["i", "ii", "iii", "iv", "v"]
  var faixa = [0.143, 0.147, 0.21, 0.14, 0.23]
  
  return faixa[tipo.lastIndexOf(document.getElementById("cat_simples").value)]
}

function selectParcDedFaixa5() {
  var tipo = ["i", "ii", "iii", "iv", "v"]
  var faixa = ["87300", "125640", "35640", "39780", "62100"]
  
  return faixa[tipo.lastIndexOf(document.getElementById("cat_simples").value)]
}

function selectLimiteFaixa6() {
  var tipo = ["i", "ii", "iii", "iv", "v"]
  var faixa = ["4800000", "4800000", "4800000", "3600000", "4800000"]
  
  return faixa[tipo.lastIndexOf(document.getElementById("cat_simples").value)]
}

function selectAliquotaFaixa6() {
  var tipo = ["i", "ii", "iii", "iv", "v"]
  var faixa = [0.19, 0.3, 0.33, 0.22, 0.305]
  
  return faixa[tipo.lastIndexOf(document.getElementById("cat_simples").value)]
}

function selectParcDedFaixa6() {
  var tipo = ["i", "ii", "iii", "iv", "v"]
  var faixa = ["378000", "720000", "648000", "183780", "540000"]
  
  return faixa[tipo.lastIndexOf(document.getElementById("cat_simples").value)]
}

function calculo_faixa() {
  var fat = parseFloat(document.getElementById("fat_mensal").value) * 12

  if (fat <= parseFloat(selectLimiteFaixa1())) {
    return [selectLimiteFaixa1(), selectAliquotaFaixa1(), selectParcDedFaixa1()];
  } else if (fat <= parseFloat(selectLimiteFaixa2())) {
    return [selectLimiteFaixa2(), selectAliquotaFaixa2(), selectParcDedFaixa2()];
  } else if (fat <= parseFloat(selectLimiteFaixa3())) {
    return [selectLimiteFaixa3(), selectAliquotaFaixa3(), selectParcDedFaixa3()];
  } else if (fat <= parseFloat(selectLimiteFaixa4())) {
    return [selectLimiteFaixa4(), selectAliquotaFaixa4(), selectParcDedFaixa4()];
  } else if (fat <= parseFloat(selectLimiteFaixa5())) {
    return [selectLimiteFaixa5(), selectAliquotaFaixa5(), selectParcDedFaixa5()];
  } else if (fat >= parseFloat(selectLimiteFaixa6())) {
    return [selectLimiteFaixa6(), selectAliquotaFaixa6(), selectParcDedFaixa6()];
  } else {
    return [];
  }
}

//lucro presumido

function define_lp() {
  var ramo = document.getElementById("ramo");

  if (ramo == "at_imob" || ramo == "com" || ramo == "ind_terc" || ramo == "transp_cargo") {
    return classe1_calculolp(document.getElementById("fat_mensal").value * 12);
  } else if (ramo == "prest_serv") {
    return classe2_calculolp(document.getElementById("fat_mensal").value * 12);
  } else if (ramo == "rev_comb") {
    return classe3_calculolp(document.getElementById("fat_mensal").value * 12);
  } else if (ramo == "serv_hosp") {
    return classe4_calculolp(document.getElementById("fat_mensal").value * 12);
  } else if (ramo == "transp") {
    return classe5_calculolp(document.getElementById("fat_mensal").value * 12);
  }
}

function classe1_calculolp() {
  var classe1_lucro_presumido = 0.08 * parseFloat(document.getElementById("fat_mensal").value) * 12;
  var classe1_ir = calculo_ir(classe1_lucro_presumido);
  var classe1_lucro_presumido_csll = 0.08 * parseFloat(document.getElementById("fat_mensal").value) * 12;
  var classe1_unk = parseFloat(classe1_lucro_presumido_csll) * 0.09;
  var classe1_outros = parseFloat(document.getElementById("fat_mensal").value) * 12 * (0.18 + 0.0365);
  var classe1_outros2 = parseFloat(document.getElementById("fat_mensal").value) * 12 * 0.18;
  var classe1_clt = parseFloat(document.getElementById("custos_clt").value) * 12 * 0.358;
  var classe1_total_presumido = parseFloat(classe1_ir) + parseFloat(classe1_unk) + parseFloat(classe1_outros) + parseFloat(classe1_clt);
  var c1_tributos = (parseFloat(classe1_clt) + parseFloat(calculo_piscofins()) + parseFloat(classe1_outros2)) / 12;

  var aliquota_presumido = parseFloat(classe1_total_presumido) / (parseFloat(document.getElementById("fat_mensal").value) * 12);
  var custos_mensais = parseFloat(document.getElementById("custos_merc").value) + parseFloat(document.getElementById("custos_adm").value) + parseFloat(document.getElementById("custos_clt").value) + parseFloat(document.getElementById("custos_mkt").value) + parseFloat(c1_tributos);

  return [aliquota_presumido, custos_mensais];
}

function classe2_calculolp() {
  var classe2_lucro_presumido = 0.32 * parseFloat(document.getElementById("fat_mensal").value) * 12;
  var classe2_ir = calculo_ir(classe2_lucro_presumido);
  var classe2_lucro_presumido_csll = 0.32 * parseFloat(document.getElementById("fat_mensal").value) * 12;
  var classe2_unk = parseFloat(classe2_lucro_presumido_csll) * 0.09;
  var classe2_outros = parseFloat(document.getElementById("fat_mensal").value) * 12 * (0.05 + 0.0365);
  var classe2_outros2 = parseFloat(document.getElementById("fat_mensal").value) * 12 * 0.05;
  var classe2_clt = parseFloat(document.getElementById("custos_clt").value) * 12 * 0.358;
  var classe2_total_presumido = parseFloat(classe2_ir) + parseFloat(classe2_unk) + parseFloat(classe2_outros) + parseFloat(classe2_clt);
  var c2_tributos = (parseFloat(classe2_clt) + parseFloat(calculo_piscofins()) + parseFloat(classe2_outros2)) / 12;

  var aliquota_presumido = parseFloat(classe2_total_presumido) / (parseFloat(document.getElementById("fat_mensal").value) * 12);
  var custos_mensais = parseFloat(document.getElementById("custos_merc").value) + parseFloat(document.getElementById("custos_adm").value) + parseFloat(document.getElementById("custos_clt").value) + parseFloat(document.getElementById("custos_mkt").value) + parseFloat(c2_tributos);

  return [aliquota_presumido, custos_mensais];
}

function classe3_calculolp() {
  var classe3_lucro_presumido = 0.016 * parseFloat(document.getElementById("fat_mensal").value) * 12;
  var classe3_ir = calculo_ir(classe3_lucro_presumido);
  var classe3_lucro_presumido_csll = 0.016 * parseFloat(document.getElementById("fat_mensal").value) * 12;
  var classe3_unk = parseFloat(classe3_lucro_presumido_csll) * 0.09;
  var classe3_outros = 0;
  var classe3_outros2 = 0;
  var classe3_clt = parseFloat(document.getElementById("custos_clt").value) * 12 * 0.358;
  var classe3_total_presumido = parseFloat(classe3_ir) + parseFloat(classe3_unk) + parseFloat(classe3_outros) + parseFloat(classe3_clt);
  var c3_tributos = (parseFloat(classe3_clt) + parseFloat(calculo_piscofins()) + parseFloat(classe3_outros2)) / 12;

  var aliquota_presumido = parseFloat(classe3_total_presumido) / (parseFloat(document.getElementById("fat_mensal").value) * 12);
  var custos_mensais = parseFloat(document.getElementById("custos_merc").value) + parseFloat(document.getElementById("custos_adm").value) + parseFloat(document.getElementById("custos_clt").value) + parseFloat(document.getElementById("custos_mkt").value) + parseFloat(c3_tributos);

  return [aliquota_presumido, custos_mensais];
}

function classe4_calculolp() {
  var classe4_lucro_presumido = 0.08 * parseFloat(document.getElementById("fat_mensal").value) * 12;
  var classe4_ir = calculo_ir(classe4_lucro_presumido);
  var classe4_lucro_presumido_csll = 0.12 * parseFloat(document.getElementById("fat_mensal").value) * 12;
  var classe4_unk = parseFloat(classe4_lucro_presumido_csll) * 0.09;
  var classe4_outros = parseFloat(document.getElementById("fat_mensal").value) * 12 * (0.05 + 0.0365);
  var classe4_outros2 = parseFloat(document.getElementById("fat_mensal").value) * 12 * 0.05;
  var classe4_clt = parseFloat(document.getElementById("custos_clt").value) * 12 * 0.358;
  var classe4_total_presumido = parseFloat(classe4_ir) + parseFloat(classe4_unk) + parseFloat(classe4_outros) + parseFloat(classe4_clt);
  var c4_tributos = (parseFloat(classe4_clt) + parseFloat(calculo_piscofins()) + parseFloat(classe4_outros2)) / 12;

  var aliquota_presumido = parseFloat(classe4_total_presumido) / (parseFloat(document.getElementById("fat_mensal").value) * 12);
  var custos_mensais = parseFloat(document.getElementById("custos_merc").value) + parseFloat(document.getElementById("custos_adm").value) + parseFloat(document.getElementById("custos_clt").value) + parseFloat(document.getElementById("custos_mkt").value) + parseFloat(c4_tributos);

  return [aliquota_presumido, custos_mensais];
}

function classe5_calculolp() {
  var classe5_lucro_presumido = 0.16 * parseFloat(document.getElementById("fat_mensal").value) * 12;
  var classe5_ir = calculo_ir(classe5_lucro_presumido);
  var classe5_lucro_presumido_csll = 0.16 * parseFloat(document.getElementById("fat_mensal").value) * 12;
  var classe5_unk = parseFloat(classe5_lucro_presumido_csll) * 0.09;
  var classe5_outros = parseFloat(document.getElementById("fat_mensal").value) * 12 * (0.18 + 0.0365);
  var classe5_outros2 = parseFloat(document.getElementById("fat_mensal").value) * 12 * 0.18;
  var classe5_clt = parseFloat(document.getElementById("custos_clt").value) * 12 * 0.358;
  var classe5_total_presumido = parseFloat(classe5_ir) + parseFloat(classe5_unk) + parseFloat(classe5_outros) + parseFloat(classe5_clt);
  var c5_tributos = (parseFloat(classe5_clt) + parseFloat(calculo_piscofins()) + parseFloat(classe5_outros2)) / 12;

  var aliquota_presumido = parseFloat(classe5_total_presumido) / (parseFloat(document.getElementById("fat_mensal").value) * 12);
  var custos_mensais = parseFloat(document.getElementById("custos_merc").value) + parseFloat(document.getElementById("custos_adm").value) + parseFloat(document.getElementById("custos_clt").value) + parseFloat(document.getElementById("custos_mkt").value) + parseFloat(c5_tributos);

  return [aliquota_presumido, custos_mensais];
}

//lucro real

function classe1_calculolr(lucro_liquido) {
  var classe1_lucro_real = parseFloat(lucro_liquido) * 12;
  var classe1_ircs = calculo_ircs(classe1_lucro_real);
  var classe1_piscofins = calculo_piscofins();
  var classe1_clt = parseFloat(document.getElementById("custos_clt").value) * 12 * 0.358;
  var classe1_outros = parseFloat(document.getElementById("fat_mensal").value) * 12 * 0.18;
  var classe1_total_real = parseFloat(classe1_ircs) + parseFloat(classe1_piscofins) + parseFloat(classe1_outros) + parseFloat(classe1_clt);

  return parseFloat(classe1_total_real) / (parseFloat(document.getElementById("fat_mensal").value) * 12);
}

function classe2_calculolr(lucro_liquido) {
  var classe2_lucro_real = parseFloat(lucro_liquido) * 12;
  var classe2_ircs = calculo_ircs(classe2_lucro_real);
  var classe2_piscofins = calculo_piscofins();
  var classe2_clt = parseFloat(document.getElementById("custos_clt").value) * 12 * 0.358;
  var classe2_outros = parseFloat(document.getElementById("fat_mensal").value) * 12 * 0.05;
  var classe2_total_real = parseFloat(classe2_ircs) + parseFloat(classe2_piscofins) + parseFloat(classe2_outros) + parseFloat(classe2_clt);

  return parseFloat(classe2_total_real) / (parseFloat(document.getElementById("fat_mensal").value) * 12);
}

function classe3_calculolr(lucro_liquido) {
  var classe3_lucro_real = parseFloat(lucro_liquido) * 12;
  var classe3_ircs = calculo_ircs(classe3_lucro_real);
  var classe3_piscofins = calculo_piscofins();
  var classe3_clt = parseFloat(document.getElementById("custos_clt").value) * 12 * 0.358;
  var classe3_outros = parseFloat(document.getElementById("fat_mensal").value) * 12 * 0;
  var classe3_total_real = parseFloat(classe3_ircs) + parseFloat(classe3_piscofins) + parseFloat(classe3_outros) + parseFloat(classe3_clt);

  return parseFloat(classe3_total_real) / (parseFloat(document.getElementById("fat_mensal").value) * 12);
}

function classe4_calculolr(lucro_liquido) {
  var classe4_lucro_real = parseFloat(lucro_liquido) * 12;
  var classe4_ircs = calculo_ircs(classe4_lucro_real);
  var classe4_piscofins = calculo_piscofins();
  var classe4_clt = parseFloat(document.getElementById("custos_clt").value) * 12 * 0.358;
  var classe4_outros = parseFloat(document.getElementById("fat_mensal").value) * 12 * 0.05;
  var classe4_total_real = parseFloat(classe4_ircs) + parseFloat(classe4_piscofins) + parseFloat(classe4_outros) + parseFloat(classe4_clt);

  return parseFloat(classe4_total_real) / (parseFloat(document.getElementById("fat_mensal").value) * 12);
}

function classe5_calculolr(lucro_liquido) {
  var classe5_lucro_real = parseFloat(lucro_liquido) * 12;
  var classe5_ircs = calculo_ircs(classe5_lucro_real);
  var classe5_piscofins = calculo_piscofins();
  var classe5_clt = parseFloat(document.getElementById("custos_clt").value) * 12 * 0.358;
  var classe5_outros = parseFloat(document.getElementById("fat_mensal").value) * 12 * 0.18;
  var classe5_total_real = parseFloat(classe5_ircs) + parseFloat(classe5_piscofins) + parseFloat(classe5_outros) + parseFloat(classe5_clt);

  return parseFloat(classe5_total_real) / (parseFloat(document.getElementById("fat_mensal").value) * 12);
}

function calcPresumido() {
  var ramo = document.getElementById("ramo").value;

  if ((ramo == "at_imob") || (ramo == "com") || (ramo == "ind_terc") || (ramo == "transp_cargo")) {
    return classe1_calculolp();
  } else if (ramo == "prest_serv") {
    return classe2_calculolp();
  } else if (ramo == "rev_comb") {
    return classe3_calculolp();
  } else if (ramo == "serv_hosp") {
    return classe4_calculolp();
  } else if (ramo == "transp") {
    return classe5_calculolp();
  } else {
    return [0, 0];
  }
}

function calcReal(lucro_liquido) {
  var ramo = document.getElementById("ramo").value;

  if ((ramo == "at_imob") || (ramo == "com") || (ramo == "ind_terc") || (ramo == "transp_cargo")) {
    return classe1_calculolr(lucro_liquido);
  } else if (ramo == "prest_serv") {
    return classe2_calculolr(lucro_liquido);
  } else if (ramo == "rev_comb") {
    return classe3_calculolr(lucro_liquido);
  } else if (ramo == "serv_hosp") {
    return classe4_calculolr(lucro_liquido);
  } else if (ramo == "transp") {
    return classe5_calculolr(lucro_liquido);
  } else {
    return 0;
  }
}

function sera_que_ta_bom() {
  var tributo = document.getElementById("trib_atual").value;
  var faixas = calculo_faixa();
  var aliquota_simples_nacional = calculo_simples_nacional(faixas[1], faixas[2]);
  var aliq_presumido = calcPresumido();
  var lucro_liquido = parseFloat(document.getElementById("fat_mensal").value) - parseFloat(aliq_presumido[1]);
  var aliq_real = calcReal(lucro_liquido);

  if (faixas.length == 0) {
    final_result_text(0);
  } else {
    switch(tributo) {
      case "1a":
        if ((parseFloat(aliquota_simples_nacional) < parseFloat(aliq_presumido[0])) && (parseFloat(aliquota_simples_nacional) < parseFloat(aliq_real))) {
          final_result_text(3);
        } else if ((parseFloat(aliquota_simples_nacional) > parseFloat(aliq_presumido[0])) && (parseFloat(aliquota_simples_nacional) > parseFloat(aliq_real))) {
          final_result_text(2);
        } else {
          final_result_text(1);
        }
        break;
      case "1b":
        if ((parseFloat(aliq_presumido[0]) < parseFloat(aliquota_simples_nacional)) && (parseFloat(aliq_presumido[0]) < parseFloat(aliq_real))) {
          final_result_text(3);
        } else if ((parseFloat(aliq_presumido[0]) > parseFloat(aliquota_simples_nacional)) && (parseFloat(aliq_presumido[0]) > parseFloat(aliq_real))) {
          final_result_text(2);
        } else {
          final_result_text(1);
        }
        break;
      case "1c":
        if ((parseFloat(aliq_real) < parseFloat(aliquota_simples_nacional)) && (parseFloat(aliq_real) < parseFloat(aliq_presumido[0]))) {
          final_result_text(3);
        } else if ((parseFloat(aliq_real) > parseFloat(aliquota_simples_nacional)) && (parseFloat(aliq_real) > parseFloat(aliq_presumido[0]))) {
          final_result_text(2);
        } else {
          final_result_text(1);
        }
        break;
      default:
        final_result_text(0);
        break;
    }
  }
}

function final_result_text(resultado) {
  if (resultado == 3) {
    document.getElementById('resultado_final').value = "Tudo certo: a empresa recolhe tributos de acordo com as demais empresas do setor.";
  } else if (resultado == 2) {
    document.getElementById('resultado_final').value = "Cuidado: tudo indica que a empresa esteja pagando muito mais tributos que outras empresas do setor. Entre em contato com a gente.";
  } else if (resultado == 1) {
    document.getElementById('resultado_final').value = "Ajuste suas contas: a empresa talvez esteja recolhendo um pouco mais de tributos.";
  } else {
    document.getElementById('resultado_final').value = resultado
  }
}