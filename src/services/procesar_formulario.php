<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    
    // Recoger datos del formulario
    $nombre = $_POST['name'];
    $compania = $_POST['company'];
    $numero = $_POST['number'];
    $email = $_POST['email'];
    $mensaje = $_POST['comments'];

    
    // Crear instancia de PHPMailer
    $mail = new PHPMailer(true);
    

    // Envio de corre a la empresa
    try {
        // Configuración del servidor
        $mail->isSMTP();
        $mail->Host = 'smtp.hostinger.com'; // El servidor SMTP de Hostinger
        $mail->SMTPAuth = true;
        $mail->Username = 'admin@lutente.com'; // Tu correo en Hostinger
        $mail->Password = 'AdminTestLutente1*'; // Tu contraseña
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;
        $mail->setLanguage('es', '../plugins/PHPMailer/language/phpmailer.lang-es.php');
        
        // Destinatarios
        $mail->setFrom('admin@lutente.com', 'Lutente Web'); // Correo y nombre de la empresa
        $mail->addAddress('admin@lutente.com'); // Correo de la empresa        
        
        // Contenido
        $mail->isHTML(true);
        $mail->Subject = 'Nuevo mensaje del formulario de contacto';
        $mail->Body = '
            <h3>Nuevo mensaje de contacto</h3>
            <p><span style="text-decoration: underline;"><span style="font-size: 14pt;">Datos del solicitante:</span></span></p>
            <ul>
            <li style="font-size: 14pt;"><span style="font-size: 14pt;"><strong>Nombre</strong>: '.$nombre.'</span></li>
            <li style="font-size: 14pt;"><span style="font-size: 14pt;"><strong>Empresa/Negocio</strong>: '.$compania.'</span></li>
            <li style="font-size: 14pt;"><span style="font-size: 14pt;"><strong>Email</strong>: '.$email.'</span></li>
            <li style="font-size: 14pt;"><span style="font-size: 14pt;"><strong>Numero</strong>: '.$numero.'</span></li>
            <li style="font-size: 14pt;"><span style="font-size: 14pt;"><strong>Mensaje</strong>:' . $mensaje . '</span></li>
            </ul>
            <p>De Lutente Web.</p>
        ';
        
        $mail->send();
        echo "El mensaje ha sido enviado correctamente.";
       

    } catch (Exception $e) {
        echo "El mensaje no pudo ser enviado. Error: {$mail->ErrorInfo}";
    }


    $mail->clearAddresses();
    $mail->clearAttachments(); // Limpiar destinatarios y archivos adjuntos para el siguiente envío
    $mail->clearAllRecipients(); // Limpiar todos los destinatarios

    // Enviar correo al usuario

    echo "El mensaje ";
    try {
        // Destinatarios
        $mail->addAddress($email); // correo del usuario    
        
        //Contenido
        $mail->Subject = 'Gracias por contactarnos';
        $mail->Body = '
            <h3>¡Hemos recibido tu correo! Gracias por contactarnos</h3>
            <p><span style="text-decoration: underline;"><span style="font-size: 14pt;">Estos son los datos que enviaste:</span></span></p>
            <ul>
            <li style="font-size: 14pt;"><span style="font-size: 14pt;"><strong>Nombre</strong>: '.$nombre.'</span></li>
            <li style="font-size: 14pt;"><span style="font-size: 14pt;"><strong>Empresa/Negocio</strong>: '.$compania.'</span></li>
            <li style="font-size: 14pt;"><span style="font-size: 14pt;"><strong>Email</strong>: '.$email.'</span></li>
            <li style="font-size: 14pt;"><span style="font-size: 14pt;"><strong>Numero</strong>: '.$numero.'</span></li>
            <li style="font-size: 14pt;"><span style="font-size: 14pt;"><strong>Mensaje</strong>:' . $mensaje . '</span></li>
            </ul>
            <p>Te responderemos lo antes posible.</p>
            <p>Si tienes alguna pregunta adicional, no dudes en contactarnos.</p>
            <p>Saludos cordiales,</p>
            <p>De Lutente Web.</p>
        ';
        
        $mail->send();
        echo "El mensaje ha sido enviado correctamente.";
        exit;

    } catch (Exception $e) {
        echo "El mensaje no pudo ser enviado. Error: {$mail->ErrorInfo}";
    }
}

?>