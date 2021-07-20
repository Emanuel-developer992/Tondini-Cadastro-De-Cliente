window.onload = function() {
    seq();

    $("#cep").blur(function() {

        var cep = $("#cep").val();
        $("#pais").val('Brasil');
        
        var url = "//viacep.com.br/ws/"+cep+"/json/";
        
        fetch(url)
        .then(res => res.json())
        .then((out) => {

            $('#endereco').val(out.logradouro);
            $('#bairro').val(out.bairro);
            $('#estado').val(out.uf);
            $('#cidade').val(out.localidade);
            
        })
        .catch(err => { throw err });

    });
};

//ID SEQUÊNCIAL
function seq() {

    var dataset = DatasetFactory.getDataset("DSFormulariodeAdministrativo", null, null, null);
    var nSeq = dataset.values.length + 1;

    $('#codeId').val('CC-'+nSeq);

};

//MASK
//#region  
$(document).on('keyup', '.mCep',function(){
    var valor = mCep($(this).val());
    $(this).val(valor);
});

$(document).on('blur', '.mCep',function(){
    var valor = mCep($(this).val());
    $(this).val(valor);
});

$(document).on('keyup', '.mMoney',function(){
    var valor = mMoney($(this).val());
    $(this).val(valor);
});

$(document).on('blur', '.mMoney',function(){
    var valor = mMoney($(this).val());
    $(this).val(valor);
});

$(document).on('keyup', '.mPhone',function(){
    var valor = mPhone($(this).val());
    $(this).val(valor);
});

$(document).on('blur', '.mPhone',function(){
    var valor = mPhone($(this).val());
    $(this).val(valor);
});

$(document).on('keyup', '.mPhoneFix',function(){
    var valor = mPhoneFix($(this).val());
    $(this).val(valor);
});

$(document).on('blur', '.mPhoneFix',function(){
    var valor = mPhoneFix($(this).val());
    $(this).val(valor);
});

$(document).on('keyup', '.mCnpj',function(){
    var valor = mCnpj($(this).val());
    $(this).val(valor);
});

$(document).on('blur', '.mCnpj',function(){
    var valor = mCnpj($(this).val());
    $(this).val(valor);
});

function mCep(v){
    v=v.replace(/D/g,"");                
    v=v.replace(/^(\d{5})(\d)/,"$1-$2"); 
    return v;
}

function mMoney(v){
    v=v.replace(/\D/g,"") // permite digitar apenas numero
    v=v.replace(/(\d{1})(\d{15})$/,"$1.$2") // coloca ponto antes dos ultimos digitos
    v=v.replace(/(\d{1})(\d{11})$/,"$1.$2") // coloca ponto antes dos ultimos 11 digitos
    v=v.replace(/(\d{1})(\d{8})$/,"$1.$2") // coloca ponto antes dos ultimos 8 digitos
    v=v.replace(/(\d{1})(\d{5})$/,"$1.$2") // coloca ponto antes dos ultimos 5 digitos
    v=v.replace(/(\d{1})(\d{1,2})$/,"$1,$2") // coloca virgula antes dos ultimos 2 digitos  
    return v;
}

function mCnpj(v){
    v=v.replace(/\D/g,"");                    
    v=v.replace(/(\d{2})(\d)/,"$1.$2");      
    v=v.replace(/(\d{3})(\d)/,"$1.$2");       
    v=v.replace(/(\d{3})(\d)/,"$1/$2");       
    v=v.replace(/(\d{4})(\d{1,2})$/,"$1-$2"); 
    return v;
}

function mPhone(v){
    v=v.replace(/\D/g,"");                    
    v=v.replace(/(\d{1})(\d)/,"($1$2) ");      
    v=v.replace(/(\d{5})(\d)/,"$1-$2");       
    return v;
}

function mPhoneFix(v){
    v=v.replace(/\D/g,"");                    
    v=v.replace(/(\d{1})(\d)/,"($1$2) ");      
    v=v.replace(/(\d{4})(\d)/,"$1-$2");       
    return v;
}

//#endregion

var valid = 0;
var valid2 = 0;
function pushTab(tb, n) {

    var tr = $("#"+tb+" tr"); 
    
    if (valid == 0) {
        tr[1].remove();
    }

    valid++;

    var array = [];
    var nome = $("#nomeAdd1").val();
    var depart = $("#departamentoAdd1").val();
    var celular = $("#celularAdd1").val();
    var telefone = $("#telefoneAdd1").val();
    var email = $("#emailAdd1").val();
    var element = '<button type="button" class="btn btn-danger excluir">Excluir</button>';
    
    array.push('<input id="tb_nome'+n+'___'+valid+'" name="tb_nome'+n+'___'+valid+'" class="invisible-input" value="'+nome+'">');
    array.push('<input id="tb_depart'+n+'___'+valid+'" name="tb_depart'+n+'___'+valid+'" class="invisible-input" value="'+depart+'">');
    array.push('<input id="tb_celular'+n+'___'+valid+'" name="tb_celular'+n+'___'+valid+'" class="invisible-input" value="'+celular+'">');
    array.push('<input id="tb_telefone'+n+'___'+valid+'" name="tb_telefone'+n+'___'+valid+'" class="invisible-input" value="'+telefone+'">');
    array.push('<input id="tb_email'+n+'___'+valid+'" name="tb_email'+n+'___'+valid+'" class="invisible-input" value="'+email+'">');
    array.push(element);
    
    var table = document.getElementById(tb);
    var numOfRows = table.rows.length;
    var numOfCols = table.rows[numOfRows-1].cells.length;
    var newRow = table.insertRow(numOfRows);
   
    for (var i = 0; i < numOfCols; i++) {
   
       newCell = newRow.insertCell(i);
       
       newCell.innerHTML = array[i];
   
    }

    $("#nomeAdd1").val("");
    $("#departamentoAdd1").val("");
    $("#celularAdd1").val("");
    $("#telefoneAdd1").val("");
    $("#emailAdd1").val("");

    $(".excluir").bind("click", Excluir);
};

function pushTab2(tb, n) {

    var tr = $("#"+tb+" tr"); 
    
    if (valid2 == 0) {
         tr[1].remove();
    }
    valid2++;
 
    var array = [];
    var nome = $("#nomeCnpjAdd1").val();
    var depart = $("#departamentoCnpjAdd1").val();
    var celular = $("#celularCnpjAdd1").val();
    var telefone = $("#telefoneCnpjAdd1").val();
    var email = $("#emailCnpjAdd1").val();
    var element = '<button type="button" class="btn btn-danger excluir">Excluir</button>';
    
    array.push('<input id="tb_nome'+n+'___'+valid2+'" name="tb_nome'+n+'___'+valid2+'" class="invisible-input" value="'+nome+'">');
    array.push('<input id="tb_depart'+n+'___'+valid2+'" name="tb_depart'+n+'___'+valid2+'" class="invisible-input" value="'+depart+'">');
    array.push('<input id="tb_celular'+n+'___'+valid2+'" name="tb_celular'+n+'___'+valid2+'" class="invisible-input" value="'+celular+'">');
    array.push('<input id="tb_telefone'+n+'___'+valid2+'" name="tb_telefone'+n+'___'+valid2+'" class="invisible-input" value="'+telefone+'">');
    array.push('<input id="tb_email'+n+'___'+valid2+'" name="tb_email'+n+'___'+valid2+'" class="invisible-input" value="'+email+'">');
    array.push(element);
   
    var table = document.getElementById(tb);
    var numOfRows = table.rows.length;
    var numOfCols = table.rows[numOfRows-1].cells.length;
    var newRow = table.insertRow(numOfRows);
    
    for (var i = 0; i < numOfCols; i++) {
    
        newCell = newRow.insertCell(i);
        
        newCell.innerHTML = array[i];
    
    }

    $("#nomeCnpjAdd1").val("");
    $("#departamentoCnpjAdd1").val("");
    $("#celularCnpjAdd1").val("");
    $("#telefoneCnpjAdd1").val("");
    $("#emailCnpjAdd1").val("");
 
     $(".excluir").bind("click", Excluir);
};

//EXCLUIR LINHA
function Excluir(){

    var par = $(this).parent().parent(); //tr

    par.remove();
};