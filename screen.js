function mostrarOcultar(indice){
    let boton= document.getElementById('cr1');
    let boton1= document.getElementById('cr2');
    let boton2= document.getElementById('cr3');
    let boton3= document.getElementById('cr4');
    let boton4= document.getElementById('cr5');
    let arryabotones= [boton,boton1,boton2,boton3,boton4];
    let rotacion= document.getElementById('svg-rotate');
    let rotacion1= document.getElementById('svg-rotate1');
    let rotacion2= document.getElementById('svg-rotate2');
    let rotacion3= document.getElementById('svg-rotate3');
    let rotacion4= document.getElementById('svg-rotate4');
    let arryarotacion= [rotacion,rotacion1,rotacion2,rotacion3,rotacion4];
    
  
    
    if (window.innerWidth < 768) {
            let botonrotacion=arryarotacion[indice];
            let botonSel = arryabotones[indice];
          
        if(botonSel.style.display==='none'){
            botonSel.style.display='flex';
            botonSel.style.maxHeight = botonSel.scrollHeight + 'px';
            //botonrotacion.classList.remove('show');
            botonrotacion.classList.remove('hurryup'); // Eliminar 'hurryup'
            botonrotacion.classList.add('hurrydown');
            
           
            
        }
        else if(botonSel.style.display='flex'){
            botonSel.style.display='none';
            botonSel.style.maxHeight = null;
            //botonrotacion.classList.add('show');
            botonrotacion.classList.remove('hurrydown');
            botonrotacion.classList.add('hurryup'); 

            
           
          
            

        }
    } 
    
}



