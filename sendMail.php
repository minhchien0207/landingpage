<?php
    /* https://myaccount.google.com/security?pli=1#connectedapps */

    use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

    require  "lib/PHPMailer/src/Exception.php";
    require  "lib/PHPMailer/src/PHPMailer.php";
    require  "lib/PHPMailer/src/SMTP.php";

    if (isset($_POST["name"]) && !empty($_POST["name"]) && isset($_POST["tel"]) && !empty($_POST["tel"]) && isset($_POST["email"]) && !empty($_POST["email"])) {
        //Send email
        $mail = new PHPMailer(true);                              // Passing `true` enables exceptions
        try {
            //Server settings
            $body = "<ul><li>Họ và tên: ".$_POST["name"]."</li>";
            $body .= "<li>Số điện thoại: ".$_POST["tel"]."</li>";
            $body .= "<li>Email: ".$_POST["email"]."</li></ul>";

            $mail->CharSet   = 'UTF-8';
            $mail->SMTPDebug = 0;                                           // Enable verbose debug output
            $mail->isSMTP();                                                // Set mailer to use SMTP
            $mail->Host       = 'smtp.gmail.com';                           // Specify main and backup SMTP servers
            $mail->SMTPAuth   = true;                                       // Enable SMTP authentication
            $mail->Username   = '*******@gmail.com';                        // SMTP username
            $mail->Password   = md5('*********');                           // SMTP password
            $mail->SMTPSecure = 'ssl';                                      // Enable TLS encryption, `ssl` also accepted
            $mail->Port       = 465;                                        // TCP port to connect to

            $mail->setFrom('no-reply@gmail.com', 'Mailer');
            $mail->addAddress('******@yahoo.com');     // Add a recipient

            //Content
            $mail->isHTML(true);                                  // Set email format to HTML
            $mail->Subject = 'Thông báo xin '.$_POST["name"].' mong muống nhận thông báo';
            $mail->Body    = $body;
            // $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

            $mail->send();
            echo 'Message has been sent';
        } catch (Exception $e) {
            echo 'Message could not be sent.';
            echo 'Mailer Error: ' . $mail->ErrorInfo;
        }
    }
?>
