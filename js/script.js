const arrTime = [0,1,2,3,4,5,6,7,8,9.10,11,12,13,14,15,16];
const arrTel = ['01229494098','0982850188','0963144441','0916736111','0963169198','0939220838','0868226226','0989227979','0961726789','0961946789','0971846789','0977286888','01265868868','0989827888','0961990000','0971667979','0971887979','0966688777','0971660000','0961337979','0971337979','0971557979','0978688777','01253799799','0942888880','0961680999','0961806999','0971007979','0988551777','0961468568','0971168868','0971268868','0971368468','0971468568','0971568868','0961802999','0963331777','0966006555','0977007555','0905610000','0971568768','0981681555','0978179777','0982365777','0988769777','0964561368','0943888386','0989738777','0989751777','0968932345'];
const arrLocation = ['An Giang','Bà Rịa - Vũng Tàu','Bắc Giang','Bắc Kạn','Bạc Liêu','Bắc Ninh','Bến Tre','Bình Định','Bình Dương','Bình Phước','Bình Thuận','Cà Mau','Cao Bằng','Đắk Lắk','Đắk Nông','Điện Biên','Đồng Nai','Đồng Tháp','Gia Lai','Hà Giang','Hà Nam','Hà Tĩnh','Hải Dương','Hậu Giang','Hòa Bình','Hưng Yên','Khánh Hòa','Kiên Giang','Kon Tum','Lai Châu','Lâm Đồng','Lạng Sơn','Lào Cai','Long An','Nam Định','Nghệ An','Ninh Bình','Ninh Thuận','Phú Thọ','Quảng Bình','Quảng Nam','Quảng Ngãi','Quảng Ninh','Quảng Trị','Sóc Trăng','Sơn La','Tây Ninh','Thái Bình','Thái Nguyên','Thanh Hóa','Thừa Thiên Huế','Tiền Giang','Trà Vinh','Tuyên Quang','Vĩnh Long','Vĩnh Phúc','Yên Bái','Phú Yên Cần Thơ','Đà Nẵng','Hải Phòng','Hà Nội','TP HCM'];

$(document).ready(function(){
    // setInterval(pushNotification, 2500);

    $('.part-3 input[type=button], .part-5 input[type=button]').on('click', function(e) {
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

function pushNotification() {
    var time = $.rand(arrTime);
    var tel = $.rand(arrTel);
    var location = $.rand(arrLocation);
    var string = 'Cám ơn bạn: <b>'+location+'</b> có số điện thoại <b>'+(tel.substring(0, tel.length-3)).concat('xxx')+'</b> địa chỉ <b>'+location+'</b> đã đặt lịch tư vấn (<b>'+time+'</b> phút trước)';
    $('.notification').html(string);
    $('.notification').show();
}

(function($) {
    $.rand = function(arg) {
        if ($.isArray(arg)) {
            return arg[$.rand(arg.length)];
        } else if (typeof arg === "number") {
            return Math.floor(Math.random() * arg);
        } else {
            return 4;  // chosen by fair dice roll
        }
    };
})(jQuery);
