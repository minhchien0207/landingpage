$(document).ready(function(){
    $('.part-7 input[type=button]').on('click', function(e) {
        var name = $.trim($('.part-7 #name').val());
        var tel  = $.trim($('.part-7 #tel').val());
        var email = $.trim($('.part-7 #email').val());

        $.ajax({
            url: 'sendMail.php',
            type: 'POST',
            data:{
                name: name,
                tel: tel,
                email: email
            },
            success: function(result) {
                console.log(result);
            },
            error: function(e) {

            }
        });
    });
});
