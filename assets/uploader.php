<?php
    //echo "Hola, respuesta desde el servidor";
    // PARA imprimir objetos
    // var_dump($_FILES);

    if (isset($_FILES["file"])) {
        $name=$_FILES["file"]["name"];
        $file=$_FILES["file"]["tmp_name"];
        $error=$_FILES["file"]["error"];

        $destination="../files/$name";

        //esta funcion devuelve un booleano
        $upload=move_uploaded_file($file, $destination);

        if ($upload) {
            $res= array(
                "err"=> false,
                "status"=>http_response_code(200),
                "statusText"=> "Archivo $name subido con exito",
                "files"=>$_FILES["file"]
            );
        }else {
            $res= array(
                "err"=> true,
                "status"=>http_response_code(400),
                "statusText"=> "Error al subir el archivo $name",
                "files"=>$_FILES["file"] // me olvidé el guin bajo
            );
        }
        //vamos a codificar este arreglo asociativo para que lo combierta a un formato de JSON

        echo json_encode($res);
    }
?>