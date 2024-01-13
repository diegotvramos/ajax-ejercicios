<?php
    if (isset($_POST)) {

        error_reporting(0);
        $name = $_POST["name"];
        $email = $_POST["email"];
        $subject = $_POST["subject"];
        $comments = $_POST["comments"];
        $domain = $_SERVER["HTTP_HOST"];/*para que el correo electronico que le llegue a lapersona diga: contacto desde el sitio [https//] */
        /*eso lo puedo sacar de una variable especial llamada: $_SERVER, y un parametro que se llama HTTP_HOST(obtiene el dominio del cual se esta ejecutando esta pagina) */
    
        /*
            la funcion para ejecutar un mail de php se llama mail y recibe una variable llamada $to que es a quien va dirigido
            el correo electronico.
            Dentro de las cabeceras puede ir el remitente del cual está enviando la informacion, puedo definir que sea
            texto en formato html con una codificacion utf8 etc.
        */
        // reedefinimos variables.
        $to="00dramos@gmail.com";// es el correo electronico  al que va llegar los mensajes
        $subject_mail="Contacto desde el formulario del sitio $domain: $subject";
        $message=`
        <p>
            Datos enviades desde el formulario del sitio <b>$domain</b>
        </p>
        <ul>
            <li>Nombre:<b>$name</b></li>
            <li>Email:<b>$email</b></li>
            <li>Asunto:$subject</li>
            <li>Comentarios: $comments</li>
        </ul>
        `;

        // si no especifico el parametro opcional llamado '$headers'  lo va mandar en texto plano. 
        // r= retorno de carro, y n= nueva linea
        // la ventaja de poner FROM es que ya no te lo envia a la vandeja de correo basura
        $headers = "MIME-Version: 1.0\r\n" . "Content-Type: text/html; charset=utf-8\r\n" . "From: Envío Automático No Responder <no-reply@$domain>";
    /*   
        este tipo de envios te ayuda a que el mensaje no te llegue a la bandeja de Spam, esto sucede por que tu bandeja de correo
        detecta que un envio de correo no trae un remitente ahi lo clasifica como Spam

        si se envia la funcion, valida a verdadero, y si no se envia nos va marcar un error de php, pero localmente yo no voy a
        poder enviar el correo electronico, por que para enviarlo yo tendria que tener un servidor que localmente que envie
        peticiones por SMTP que es el protocolo de envio de correo electronico y para eso apache no me sirve porque es un
        servidor web yo necesitaria un servidor local que esté enviando  correos electronicos como yo no tengo eso y no lo voy a 
        instalar me va marcar un error
    */
        mail($to, $subject_mail, $message, $headers);

        if($send_mail) {
            $res = [
              "err" => false, // esto lo va parcear
              "message" => "Tus datos han sido enviados"
            ];
          } else {
            $res = [
              "err" => true,
              "message" => "Error al enviar tus datos. Intenta nuevamente."
            ];
          }
        
          //header("Access-Control-Allow-Origin: https://jonmircha.com");
          header("Access-Control-Allow-Origin: *");
          header( 'Content-type: application/json' );
          echo json_encode($res);
          exit;
    }
?>