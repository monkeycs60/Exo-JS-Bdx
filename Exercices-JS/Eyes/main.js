

    let eyes = document.querySelector('.container');
    const firstEye = document.querySelectorAll('.ball');

    eyes.addEventListener("mousemove", e => {
       const x = `${e.clientX * 100 / window.innerWidth}%`;
       const y = `${e.clientY * 100 / window.innerHeight}%`;
        
       for (let index = 0; index < 2; index++) {
           
           firstEye[index].style.left = x;
           firstEye[index].style.top = y;
           firstEye[index].style.transform = `translate(-${x}, -${y})`;
           
       }
    })

    
  
            
          
            
        
        
    

