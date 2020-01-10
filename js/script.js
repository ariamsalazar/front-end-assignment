//Animations Menu JS
$(document).click(function (e) { 
    if ($('#panel').is(':visible')) {$(".submenu_content").hide("slow");
    }else{$(".submenu_content").toggle("slow");}
}); 
//Mobile Menu Animations JS 
$('#toggle').click(function() {
    $('ul').toggle(500, function() {});
});
$(document).click(function (e) { 
    if ($('#panel_mobile').is(':visible')) {$(".submenu__mobile").hide("slow");
    }else{$(".submenu__mobile").toggle("slow");}
}); 