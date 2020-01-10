//Animations Menu JS
$(document).click(function (e) {
    if (e.target.id == "link")
        return;
    if ($('#panel').is(':visible')){
        $('.submenu_content').hide("slow");
    }
});
$("#link").click(function (e) { 
    $(".submenu_content").toggle("slow");
}); 
//Mobile Menu Animations JS 
$('#toggle').click(function() {
    $('ul').toggle(500, function() {});
});
$(document).click(function (e) { 
    if ($('#panel_mobile').is(':visible')) {$(".submenu__mobile").hide("slow");
    }else{$(".submenu__mobile").toggle("slow");}
}); 

