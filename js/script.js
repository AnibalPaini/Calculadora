const pantalla = document.querySelector('.pantalla input');
const botones = document.querySelectorAll('.btn');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const botonApretado = boton.value; /*Botón apretado va a ser igual a el Value de HTML */
        
        if(botonApretado==='C'){ /*BORRAR TODO */
            pantalla.value=''
            return;
        }
        if(botonApretado==='←'){ /*BORRAR 1 elemento */
            pantalla.value=pantalla.value.slice(0,-1)
            return;
        }

        if (boton.value==='='){
            try{pantalla.value=eval(pantalla.value);
            }catch{
                pantalla.value='Error!'; /*El método eval resuelve la operación matemática, con try intentamos hacer la operación y si no se puede da error*/
            }
            return;
        }

        pantalla.value += botonApretado; /* Se vna concatenando los números en la pantalla */
        
            
    });
});