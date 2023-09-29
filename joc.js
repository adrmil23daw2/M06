window.onload = function(){
    let lis1 = ["pedra", "paper", "tisora"];
    let arnau = document.getElementsByName("opcio");
    let div1 = document.getElementById("cont1");
    let jugada = document.getElementById("jugada");
    let empat = 0;
    let guanyat = 0;
    let perdut = 0;

    function generar() {
        let par1 = lis1[Math.floor(Math.random() * lis1.length)];
        return par1;
    }
    
    function novaJ(){
        let maquina = generar();
        if (arnau[0].checked){
            if (maquina == "pedra"){
                div1.innerHTML = "La maquina ha escollit pedra, empat";
                empat++;
            }
            else if( maquina == "paper"){div1.innerHTML = "La maquina ha escollit paper, has perdut";perdut ++}
            else if( maquina == "tisora"){div1.innerHTML = "La maquina ha escollit tisora, has guanyat";guanyat ++}
        } 
        if (arnau[1].checked){
            if (maquina == "paper"){div1.innerHTML = "La maquina ha escollit paper, empat";empat ++}
            else if( maquina == "tisora"){div1.innerHTML = "La maquina ha escollit tisora, has perdut";perdut ++}
            else if( maquina == "pedra"){div1.innerHTML = "La maquina ha escollit pedra, has guanyat";guanyat ++}
        }
        if (arnau[2].checked){
            if (maquina == "tisora"){div1.innerHTML = "La maquina ha escollit tisora, empat";empat ++}
            else if( maquina == "paper"){div1.innerHTML = "La maquina ha escollit paper , has guanyat";guanyat ++}
            else if( maquina == "pedra"){div1.innerHTML = "La maquina ha escollit pedra, has perdut";perdut ++}
        
        }
        return empat, guanyat, perdut;
        
    }
    document.getElementById("nova").addEventListener("click", function(){novaJ(), jugada.innerHTML=`Partidas empatades:  ${empat}<br> Partidas guanyades: ${guanyat}<br>Partidas perdudes: ${perdut}<br>`});

    function esborraRes(){
        div1.innerHTML = "";
    }
    document.getElementById("esborraR").addEventListener("click", esborraRes);

    function iniC(){
        empat = 0;
        perdut = 0;
        guanyat = 0;
        jugada.innerHTML="";
    }
    document.getElementById("ini").addEventListener("click", iniC);


    function esborraS() {
        let l = document.getElementsByName("opcio");
        for (let i = 0; i < l.length; i++)
            l[i].checked = false;
    }

    document.getElementById("esborraS").addEventListener("click", esborraS);
}