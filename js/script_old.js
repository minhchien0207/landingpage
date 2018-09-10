$(document).ready(function(){
    $('.part-2-5 input[type=button], .part-4-5 input[type=button], .part-7 input[type=button]').on('click', function(e) {
        var name = $.trim($(this).closest('form').find('input[type=text]').val());
        var tel = $.trim($(this).closest('form').find('input[type=number]').val());
        var email = $.trim($(this).closest('form').find('input[type=email]').val());

        $.ajax({
            url: 'sendMail.php',
            type: 'POST',
            data:{
                name: name,
                tel: tel,
                email: email
            },
            success: function(result) {
                if(result || result == 'true' || result == '1') {
                    $('body input[type=text], body input[type=number], body input[type=email]').val('');
                    swal("Đăng ký thành công", "Chúng tôi sẽ liên hệ lại với bạn sớm nhất!", "success");
                }
            },
            error: function(e) {

            }
        });
    });
});
