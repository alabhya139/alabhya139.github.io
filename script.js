
/* manage click event on project section portfolio*/
let portfolio = document.getElementById('portfolio');
portfolio.onclick = () => {
    window.open('https://alabhya139.github.io', '_blank');
}

/*manage click event on project section prajjwalan*/
let prajjwalan = document.getElementById('prajjwalan');
prajjwalan.onclick = () => {
    window.open('https://play.google.com/store/apps/details?id=com.prajjawalan.prajjwalan', '_blank')
}

/*manage click event on project section prajjwalan*/
let wapp = document.getElementById('whatsapp-clone');
wapp.onclick = () => {
    window.open('https://alabhya139.github.io/whatsapp_clone', '_blank')
}

$(document).ready(()=>{
    $('#toggle-button').click(()=>{
        console.log("clicked");
        $('.nav-bar').slideToggle('slow');
        $(document).click(function(e) {
            if (!$(e.target).is('#toggle-button')) {
                $('.nav-bar').hide('slow');	    
            }
        });
    });

    if ($(window).width() <= 710) {
        $('.nav-bar').hide();
    }else $('.nav-bar').show();

    $(window).on('resize',()=> {
        var win = $(this);
        if ($(win).width() <= 710) {
            $('.nav-bar').hide();
        }else $('.nav-bar').show();
    });
});