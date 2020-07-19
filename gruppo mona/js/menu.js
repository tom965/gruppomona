// JavaScript source code
var $menu = $('.menu.icon');
var $list = $('.menus');
var $div = $('#box');
$list.css('display', 'none')
$menu.show();
$menu.on('click', function () {
    if ($list.css('display') == 'block') {
        $list.slideUp('800').delay('600').css('display', 'none');
        $menu.css('transform', 'rotate(0deg)'); 
    } else {
        $list.slideDown('500').delay('600').css('display', 'block');
        $menu.css('transform', 'rotate(90deg)');
        console.log('cia');
    }
})
$div.on('click', function () {
    if ($list.css('display') == 'block') {
        $list.slideUp('800').delay('600').css('display', 'none');
        $menu.css('transform', 'rotate(0deg)'); 
    } else {
        $list.slideDown('500').delay('600').css('display', 'block');
        $menu.css('transform', 'rotate(90deg)');
        console.log('cia');
    }
})
