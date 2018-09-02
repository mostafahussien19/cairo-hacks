
$('.openbtn').on('click',function()
{
    $('#mySidenav').css('width','250px')
})
$('.closebtn').on('click',function()
{
    $('#mySidenav').css('width','0')
})

$(".FAQ h3").click(function()
{
	$(this).next().slideToggle(600);
	$(".tb").not($(this).next()).slideUp(600);
})
$('.down').click(function()
 {
        $('html, body').animate({
            scrollTop: $($('#about')).offset().top
        }, 700);
})
$(".sidenav a , .footer a").click(function() {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
	}, 700);
	$('#mySidenav').css('width','0')
});
$('.Sponsers button').click(function()
{
   $('html, body').animate({
       scrollTop: $($('#contact')).offset().top
   }, 700);
})
$('.landing button').click(function()
{
   $('html, body').animate({
       scrollTop: $($('#FAQ')).offset().top
   }, 700);
})
$(window).scroll(function()
	{
		if ($(window).scrollTop() >= 1000)
		{
			$(".up").fadeIn(1000)
		}else
		{
			$(".up").fadeOut(1000)
		}
	})
$('.up').click(function()
	{
		$('html,body').animate({
    		scrollTop: 0
    	},1000)
	})