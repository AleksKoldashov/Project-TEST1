import './style-menu.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div class="menu-page">
    <div class="headline">
    <img class="techn" src="pictures/logo-menu/logo-headline/logo-headline.svg"/>
    <img class="menuof" src="pictures/logo-menu/logo-headline/logo-menuof.svg"/>
    
    </div>
    
    <div class="menu">
    <div> <h5>Go to product page</h5><img src="pictures/logo-menu/logoVector.svg"/></div>
    <div> <h5>Track your order</h5><img src="pictures/logo-menu/logoVector.svg"/></div>
    <div> <h5>Contact us</h5><img src="pictures/logo-menu/logoVector.svg"/></div>
    <div> <h5>FAQ</h5><img src="pictures/logo-menu/logoVector.svg"/></div>
      
    </div>
    

   
   
  
 
   
   
  </div>
`

