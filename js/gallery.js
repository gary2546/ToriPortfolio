$(document).ready(function() {

    $("div.thumbnail").nailthumb({width:150,height:150});

    $("a.grouped_elements").fancybox({
        'transitionIn'  :   'elastic',
        'transitionOut' :   'elastic',
        'speedIn'       :   600, 
        'speedOut'      :   200, 
        'overlayShow'   :   false
    });
    
});