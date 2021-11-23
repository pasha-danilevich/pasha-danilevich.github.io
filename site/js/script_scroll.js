var 
    bar = $('#bar'),
    $window = $(window),
    docHeight = $(document).height(),
    winHeight = $window.height(),
    baseX = docHeight - winHeight;

console.log($window.scrollTop())
$window.scroll(function(e) {      
    var x = ($window.scrollTop() / baseX) * 110;
    bar.css({'width': + x + '%'});
});