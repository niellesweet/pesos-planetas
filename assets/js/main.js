function Calcular(){
    var usuario = document.getElementById("pesoTierra").value;
    var planeta = document.getElementById("seleccionarPlaneta").value;
    var peso = parseInt(usuario);
    var g_tierra = 9.8;
    var g_marte = 3.7;
    var g_jupiter = 24.8;
    var peso_final;
    var nombre;
    if(planeta == "Marte")
    {
      peso_final = usuario * g_marte / g_tierra;
      nombre = "Marte";
    }
    else if(planeta == "Jupiter")
    {
      peso_final = peso * g_jupiter / g_tierra;
      nombre = "Jupiter";
    }
    peso_final = parseInt(peso_final);
    alert("Tu peso en " + nombre + " es de " + peso_final + " kilos");
}
