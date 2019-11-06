/**
 *  공격방향 버튼 세팅
 */
function readyAttackOrderButton(){

    $("#overlap_left").click(function(){
        if( $(this).hasClass("bg-success") ){
            $(this).attr("class", "");
            $("#underlap_left").attr("class", "");
        }else{
            $(this).attr("class", "bg-success");
            $("#underlap_left").attr("class", "bg-danger");
        }
    });

    $("#overlap_right").click(function(){
        if( $(this).hasClass("bg-success") ){
            $(this).attr("class", "");
            $("#underlap_right").attr("class", "");
        }else{
            $(this).attr("class", "bg-success");
            $("#underlap_right").attr("class", "bg-danger");
        }
    });

    $("#underlap_left").click(function(){
        if( $(this).hasClass("bg-success") ){
            $(this).attr("class", "");
            $("#overlap_left").attr("class", "");
        }else{
            $(this).attr("class", "bg-success");
            $("#overlap_left").attr("class", "bg-danger");
        }
    });

    $("#underlap_right").click(function(){
        if( $(this).hasClass("bg-success") ){
            $(this).attr("class", "");
            $("#overlap_right").attr("class", "");
        }else{
            $(this).attr("class", "bg-success");
            $("#overlap_right").attr("class", "bg-danger");
        }
    });

    $("#left_attack").click(function(){
        if( $(this).hasClass("bg-success") ){
            $(this).attr("class", "");
            $("#center_attack").attr("class", "");
            if( $("#right_attack").hasClass("bg-success") ){
                $("#center_attack").attr("class", "bg-danger");
            }
        }else{
            $(this).attr("class", "bg-success");
            $("#center_attack").attr("class", "bg-danger");

            if( $("#right_attack").hasClass("bg-danger") ){
                $("#right_attack").attr("class", "");
            }
        }
    });

    $("#right_attack").click(function(){
        if( $(this).hasClass("bg-success") ){
            $(this).attr("class", "");
            $("#center_attack").attr("class", "");
            if( $("#left_attack").hasClass("bg-success") ){
                $("#center_attack").attr("class", "bg-danger");
            }
        }else{
            $(this).attr("class", "bg-success");
            $("#center_attack").attr("class", "bg-danger");

            if( $("#left_attack").hasClass("bg-danger") ){
                $("#left_attack").attr("class", "");
            }
        }
    });

    $("#center_attack").click(function(){
        if( $(this).hasClass("bg-success") ){
            $(this).attr("class", "");
            $("#left_attack").attr("class", "");
            $("#right_attack").attr("class", "");
        }else{
            $(this).attr("class", "bg-success");
            $("#left_attack").attr("class", "bg-danger");
            $("#right_attack").attr("class", "bg-danger");
        }
    });

    $("#def_buildup").click(function(){
        if( $(this).hasClass("bg-success") ){
            $(this).attr("class", "");
        }else{
            $(this).attr("class", "bg-success");
        }
    });
}