
// Namespace de avisos gerais
ns_Alert = {

    // Chamada para o alert() personalizado
    Alert: function (Texto, Cor, Icone) {

        var Html_Icone = "",
            html,
            time = "4000",
            $conteiner = $("#GesProAlert_Conteiner");

        if (Icone != "") {
            Html_Icone = "<div class='Alert-Imagem " + Icone + "'></div>";
        }

        // Gerando o HTML
        html = $('<div class="GesProAlert Alert-' + Cor + '"><div class="GesProAlert_Posiciona"><br /></div>' + Texto + Html_Icone + '</div>').fadeIn("fast");

        // Colocando o item no conteiner
        $conteiner.append(html);

        // Remove o vaiso com o click
        html.on("click", function () {
            ns_Alert.AlertX($(this));
        });

        // Aguarda o tempo especificado e sai
        setTimeout(function () {
            ns_Alert.AlertX(html);
        }, time);

    },

    
     
    Alert_Sucess: function (Msg) {
        ns_Alert.Alert(Msg, "Verde", "Alert-Sucesso");
    },
   
    Alert_Error: function (Msg) {
        ns_Alert.Alert(Msg, "Vermelho", "Alert-Atencao");
    },
  
    Alert_Attention: function (Msg) {
        ns_Alert.Alert(Msg, "Amarelo", "Alert-Exclamacao");
    },
   
    Alert_Neutro: function (Msg) {
        ns_Alert.Alert(Msg, "Azul", "Alert-Dialogo");
    },
 
    //
    AlertX: function (element) {
        if (typeof element !== "undefined") {
            element.fadeOut("fast", function () {
                $(this).remove();
            });
        }
        else {
            $('.GesProAlert').fadeOut("fast", function () {
                $(this).remove();
            });
        }
    },
}