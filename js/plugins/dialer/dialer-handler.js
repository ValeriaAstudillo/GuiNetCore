
var DialANumber = function (number) {
    phonedialer.dial(
      number,
      function (err) {
          if (err == "empty")
              alert("Número de telefono Desconocido");
          else
              console.log("Dialer Error:" + err);
      },
      function (success) {
          console.log('Dialing succeeded');
      }
     );
}

