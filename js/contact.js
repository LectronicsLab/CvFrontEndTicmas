console.log("hola mundo");

document.getElementById('enviar').addEventListener( 'click', function () {

    console.log("enviando mail");

    let nombre = document.getElementById('nombre').value;
    console.log(nombre);
    let apellido = document.getElementById('apellido').value;
    console.log(apellido);
    let empresa = document.getElementById('empresa').value;
    console.log(empresa);
    let cargo = document.getElementById('cargo').value;
    console.log(cargo);
    let mail = document.getElementById('mail').value;
    console.log(mail);
    let trabajo = document.getElementById('trabajo').value;
    console.log(trabajo);

    let mensaje = "<br><br>" + " Se recivio de " + nombre + " " + apellido + "<br><br>"
                + " Desde la empresa: " + empresa + "<br><br>" 
                + " En el cargo de: " + cargo + "<br><br>"
                + " Desde el mail de contacto: " + mail + "<br><br>"
                + " La oferta siguiente: <br>"
                + trabajo; + "<br><br>"
    
    console.log(mensaje); 

    sendEmail(mensaje,mail);
}
);

/* la funcion Email.send es proporcionada por smtpjs */

function sendEmail(mensaje, mail) {
    console.log("enviando "+ mensaje + " desde la casilla " + mail);
    let msjint = mensaje + " <br><br>    ____Desde la casilla:____ <br> <br> " + mail ; 
      Email.send({
        SecureToken : "63f724f2-203a-4ccf-b729-c06f533ac178",
        To: 'pedro.gonzagomezlopez.1985@gmail.com',
        From: "pedro.gonzagomezlopez.1985@gmail.com",
        Subject: "Propuesta de trabajo desde el cv",
        Body: msjint,
      })
        .then(function (message) {
          alert("Correo enviado con exito")
        });
    }
