
var 
    bar = $('#bar'),
    $window = $(window),
    docHeight = $(document).height(),
    winHeight = $window.height(),
    baseX = docHeight - winHeight;

$window.scroll(function(e) {      
    var x = ($window.scrollTop() / baseX) * 100;
    bar.css({'width': + x + '%'});
});