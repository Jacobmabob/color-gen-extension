const colorGenButton = document.querySelector('.color-gen');

async function fetchColors() {
    const response = await fetch("http://colormind.io/api/", {
        method: "POST",
        body: JSON.stringify({
          model: "default",
        }),
      });
      const data = await response.json();
      console.log(data)
    
     }
    
colorGenButton.addEventListener('click', fetchColors)