import './style-index.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div class="index-page">
    <div class="headline">
    <img class="logo-head-offer" src="pictures/logo-menu/logo-headline/logo-head-offer.svg"/>
    <div class ="techn-menu">
        <img class="techn" src="pictures/logo-index/logo-headline/logo-techno.svg"/>
        <div class="menu-h">
            <img class="menu-h1" src="pictures/logo-index/logo-headline/logo-header.svg"/>
        </div>
        
    </div>
   
   
    </div>
    
    <div class="power">
      <div class="trastpilot">
    
             <div class="union-1">
                  <div class="union-2">
                    <img class="vector-1" src="pictures/logo-index/trastpilot/union1/vector.svg"/>
                  </div>
             </div>
             
             <div class="frame48095833">
                <h5 class="logo"><img src="pictures/logo-index/trastpilot/frame48095833/tp_icons-1/Group.svg"/></h5>
                <h6>Over 10,000 reviews</h6> 
                <img class ="star" src="pictures/logo-index/trastpilot/frame48095833/frame4809531/Group147/vectorstar.svg"/>
                <img class ="text-trastpilot" src="pictures/logo-index/trastpilot/frame48095833/frame4809531/Group147/vectortext.svg"/>  
              </div>
              
              <div class="frame48095835">
                <a class="pic_49">4.9</a>
                <a class="out">out 5</a>
                <a class="exellent">Exellent</a>
              </div>
              <img class ="img1256" src="pictures/logo-index/trastpilot/img1256.svg"/>
                  <div  class="Frame2043682730">
                        <a class="power-text">Power. It’s in the Air.</a>
                        <a class="small_offer">Limited offer just for today</a>
                        <div class="center-rating">

                              <img class ="imgstars" src="pictures/logo-index/trastpilot/Frame2043682730/rating/stars.svg"/>
                              <a class="text-stars">4.9 / 5.0</a>
                              <a class="text-reviews">10000+ reviews</a>
                              <img class ="imgcircle" src="pictures/logo-index/trastpilot/Frame2043682730/rating/imgcircle.svg"/>
                              <img class ="imgarrow" src="pictures/logo-index/trastpilot/Frame2043682730/rating/imgarrow.svg"/>
                              

                        </div>
                              <a class="price">$199</a>
                              <a class="sale">$1099</a>
                              <img class ="sale-img" src="pictures/logo-index/trastpilot/Frame2043682730/price/sale-img.svg"/>
                  </div>
             
              </div>

       
  </div>
`

                       