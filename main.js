import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div class="header">
        <div class="b1">Block 1</div>
        <div class="b2">Block 2</div>
        <div class="b3">Block 3</div>
        <div class="b4">Block 4</div>
        <div class="b5">Block 5</div>
        <div class="b6">
            <h5 class="logo"><img src="pictures/logo-index/trastpilot/frame48095833/tp_icons-1/Group.svg"/></h5>
            <h6>Over 10,000 reviews</h6> 
            <img class ="star" src="pictures/logo-index/trastpilot/frame48095833/frame4809531/Group147/vectorstar.svg"/>
            
        </div>
  </div>
`


