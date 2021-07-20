//EXECUTAR AO CARREGAR A PÁGINA
window.onload = function() {

    console.log("--------");
    console.log(getFormMode());
    console.log(getMobile());
    console.log(getWKNumState());
    console.log(getWKUser());
    console.log(getWKNumProces());
    console.log(getWKUserLocale());
    console.log(getWKCardId());
    console.log("--------");
    
};  
    
// TABELAS

//#region Funtion
function pushAdd1() {
           
        var dados = [];
        var inputAcao = $("#acao_atendimento").val();
        var inputResultado = $("#resultadoA").val();
        var inputPrazo = $("#prazo").val();
        var inputResponsavel = $("#responsavel").val();
        var inputRealizado = $("#realizado").val();
       
       //    
        var element = '<button type="button" class="btn btn-danger excluir">Excluir</button><button type="button" class="btn btn-warning editar">Editar</button>';    
       
        dados.push(inputAcao);
        dados.push(inputResultado);
        dados.push(inputPrazo);
        dados.push(inputResponsavel);
        dados.push(inputRealizado);
        dados.push(element);  
        
        var table = document.getElementById("tabelaTcss_Work");
        
        var numOfRows = (table.rows.length)-1;
    
        var numOfCols = 6;
    
        var newRow = table.insertRow(numOfRows);
    
        for (var i = 0; i < numOfCols; i++) {
    
            newCell = newRow.insertCell(i);
    
            newCell.innerHTML = dados[i];
    
            
        }

    
        $("#acao_atendimento").val("");
        $("#resultadoA").val("");
        $("#prazo").val("");
        $("#responsavel").val("");
        $("#realizado").val("");
        
        $(".excluir").bind("click", Excluir);
        $(".editar").bind("click", Editar);
        
    
    }

var thisRow;
var reload = 0;

function Editar() {

    thisRow = $(this).parent().parent();

    var td0 = thisRow[0].innerHTML;
    var tratamento = td0.replaceAll("</td>","");
    var arrayThis = tratamento.split("<td>");

    $("#acao_atendimento").val(arrayThis[1]);
    $("#resultadoA").val(arrayThis[2]);
    $("#prazo").val(arrayThis[3]);
    $("#responsavel").val(arrayThis[4]);
    $("#realizado").val(arrayThis[5]);
    
    reload = 1;
    
}

function updateReload() {

    console.log(reload);

    if (reload == 1) {

        thisRow.remove();
        pushAdd1();
        reload = 0;

    }
    else {
        
      $("#popup").removeClass("pop-close")
      $("#popup").addClass("pop-open")
      setTimeout(function(){ $("#popup").addClass("pop-close")}, 2000);



    }
    
}
    
function Excluir(){

    var par = $(this).parent().parent(); //tr

    par.remove();

}
       
    
    //#endregion

// T-Class Work (Status)

$(document).ready(function(){

    $("#status_w").change(function(){
        
        var selectStatus = $("#status_w").val();

        $("#status").val(selectStatus);

    });

})

