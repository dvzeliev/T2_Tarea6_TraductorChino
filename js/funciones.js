var caja = document.querySelector("#caja");
            caja.addEventListener("keyup", TraducirChino, false);

            function TraducirChino(evento)
            {
                var evento = window.event;
                if ( evento.keyCode == 8){return}
                var cadena = document.querySelector("#caja").value;
                
                var posicion = cadena.length - 1;
                var codigoUnicode = cadena.charCodeAt(posicion);
                
                var chino = unescape("%u" + codigoUnicode + "e8");
        
                cadena = cadena.substring(0, cadena.length - 1);
               
                cadena = cadena + chino;
                document.querySelector("#caja").value = cadena;
            }