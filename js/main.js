document.addEventListener('DOMContentLoaded', (event) => {
   
    const showOnHover = document.querySelector('.light1');
    
    showOnHover.style.display = 'none';
  
    
    const hoverTarget = document.querySelector('#april');
  
    
    hoverTarget.addEventListener('mouseenter', () => {
      showOnHover.style.display = 'block'; 
    });
  
    
    hoverTarget.addEventListener('mouseleave', () => {
      showOnHover.style.display = 'none'; 
    });
  });
  
  
  document.addEventListener('DOMContentLoaded', (event) => {
   
    const showOnHover = document.querySelector('.light2');
   
    showOnHover.style.display = 'none';
  
    
    const hoverTarget = document.querySelector('#march');
  
    
    hoverTarget.addEventListener('mouseenter', () => {
      showOnHover.style.display = 'block'; 
    });
  
    
    hoverTarget.addEventListener('mouseleave', () => {
      showOnHover.style.display = 'none'; 
    });
  });

  
  document.addEventListener('DOMContentLoaded', (event) => {
    
    const showOnHover = document.querySelector('.light3');
   
    showOnHover.style.display = 'none';
  
    
    const hoverTarget = document.querySelector('#december');
  
   
    hoverTarget.addEventListener('mouseenter', () => {
      showOnHover.style.display = 'block'; 
    });
  
    
    hoverTarget.addEventListener('mouseleave', () => {
      showOnHover.style.display = 'none';
    });
  });


  
        document.addEventListener('DOMContentLoaded', (event) => {
        const images = document.querySelectorAll('.slideshow img');
        let currentImageIndex = 0;
      
        function showNextImage() {
         
          images[currentImageIndex].style.display = 'none';
          
          currentImageIndex = (currentImageIndex + 1) % images.length;
         
          images[currentImageIndex].style.display = 'block';
        }
      
        
        images.forEach(image => {
          image.addEventListener('click', showNextImage);
        });
      });



      document.addEventListener('DOMContentLoaded', (event) => {
        const svgImage = document.getElementById('tsh');
        svgImage.addEventListener('click', () => {
          
          if (svgImage.src.includes('images/bagemp.svg')) {
            svgImage.src = 'images/bagfull.svg'; 
          } else {
            svgImage.src = 'images/bagemp.svg'; 
          }
        });
      });

      document.addEventListener('DOMContentLoaded', (event) => {
        const svgImage = document.getElementById('b');
        svgImage.addEventListener('click', () => {
         
          if (svgImage.src.includes('images/bagemp.svg')) {
            svgImage.src = 'images/bagfull.svg'; 
          } else {
            svgImage.src = 'images/bagemp.svg'; 
          }
        });
      });


      document.addEventListener('DOMContentLoaded', (event) => {
        const svgImage = document.getElementById('k');
        svgImage.addEventListener('click', () => {
        
          if (svgImage.src.includes('images/bagemp.svg')) {
            svgImage.src = 'images/bagfull.svg';
          } else {
            svgImage.src = 'images/bagemp.svg';
          }
        });
      });
      
      
      document.addEventListener('DOMContentLoaded', (event) => {
        const svgImage = document.getElementById('f');
        svgImage.addEventListener('click', () => {
        
          if (svgImage.src.includes('images/bagemp.svg')) {
            svgImage.src = 'images/bagfull.svg';
          } else {
            svgImage.src = 'images/bagemp.svg'; 
          }
        });
      });