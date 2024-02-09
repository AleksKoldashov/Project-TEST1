import './style-index.css'
import './style-slider.css'
import './style-modal.css'
import './style-drop.css'

document.querySelector('#app').innerHTML = `
  <div class="index-page">
    <div class="headline">
    <img class="logo-head-offer" src="pictures/logo-menu/logo-headline/logo-head-offer.svg"/>
    <div class ="techn-menu">
        <img class="techn" src="pictures/logo-index/logo-headline/logo-techno.svg"/>
        <div class="menu-h" id="menu">
            <img class="menu-h1" id="menu" src="pictures/logo-index/logo-headline/logo-header.svg"/>
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
    <div class="frame2043682670">
      <div class="frame2043682735">
     
         

          <div class="frame2043682652">
                  <div class="frame2043682651">
                        <div class="frame2043682649">
                            <div class="frame2043682648">
                                <div class="frame2043682646">
                                    <div class="frame2043682646-slider">

                                      <div class="wrapper">
                                      <input type="radio" name="point" id="slide1" checked>
                                      <input type="radio" name="point" id="slide2">
                                      <input type="radio" name="point" id="slide3">
                                      <input type="radio" name="point" id="slide4">
                                    
                                        <div class="slider">
                                          <div class="slides slide1"></div>
                                          <div class="slides slide2"></div>
                                          <div class="slides slide3"></div>
                                          <div class="slides slide4"></div>
                                        </div>	
                          
                                          <div class="controls">
                                            <label for="slide1"></label>
                                            <label for="slide2"></label>
                                            <label for="slide3"></label>
                                            <label for="slide4"></label>
                                          </div>
                                      </div>
                                    <a class="text24"> Apple MacBook Air (M1, 2020) 16 ГБ, 1 ТБ SSD “Space Gray”</a>
                                    
                                    <div class="frame149286307">
                                    <a class="items35">35 items left</a>
                                    <img class="img3448" src="pictures/logo-block3/frame149286307/3448.svg"/>  
                                    <img class="img3447" src="pictures/logo-block3/frame149286307/3447.svg"/> 
                                    </div>
                                    
                                    <a class="text-fill"> 
                                    The Handheld Gateway to Your PS5® Games Play Your Game Collection 
                                    Experience Breathtaking Immersion with DualSense® Wireless Controller 
                                    Features Feel the incredible immersion of haptic feedback and adaptive triggers 
                                    in supported games
                                    </a>

                                    <div class="sale-ending-timer">
                                        <div class="frame2043682668">
                                        <a class="timer-text">sale ends in &nbsp </a>
                                        <a class="timer-number" id="timer"></a>
                                        </div>
                                        
                                  </div>

                                    </div>
                                </div>
                                <div class="frame2043682647">
                                <a class="text24-1">£199</a>
                                <div class="frame2043682623">
                                    <div class="frame149286310">
                                    <a class="text25">$1099</a>
                                    </div>
                                    <a class="text26">-75%</a>
                                </div>
                                </div>
                            </div>
                        </div>
                        <a class="mini-text">
                        Take part in our contest and get a chance to get the prize by clicking on the button below
                        </a>
                        <div class="frame2043682650">
                            <div class="frame48095907">
                            <a>Special offer only for split payments by</a>
                            <img src="pictures/logo-block3/frame2043682650/afterpay-logo.svg"/>
                            <a>with 10 interest-free installments</a>    
                            </div>
                            <!-- Триггер/Открыть модальный -->
                            
                            <button class="button-650" id="myBtn">Buy now pay later</button>
                           
                            <!-- Модальный -->
                            <div id="myModal" class="modal">
                            
                              <!-- Модальное содержание -->
                              <div class="modal-content">
                              <div class="header-modal">
                              <img src="pictures/modal/after-pay.svg"/>
                              <span class="close"> <img id="close" src="pictures/modal/X-afterpay-popup.svg"/></span>
                              </div>
                              <a class="modal-header-text">Make easy monthly payments</a> 
                              <div class="modal-body">
                              <div class="modal-body-header">
                              <span>£9.99/mo.</span>
                              <div class="modal-body-header-1">10 months</div>
                              </div>
                              <div class="modal-body-1">
                              <span>APR</span>
                              <span>Interest</span>
                              <span>Total</span>
                              </div>
                              <div class="modal-body-2">
                              <span>0%</span>
                              <span>£0</span>
                              <span>£89.00</span>
                              </div>

                              </div> 
                              <img src="pictures/modal/line.svg"/>
                              <button class="BtnDisabled">Confirm to checkout</button>
                              </div>
                            
                            </div>
                        </div>
                  </div>

                  <a class="price-frame652">
                  <p>In stock, ready for ship</p> <p>Delivery in 2-4 days in UK</p>
                  </a>
          </div>

          <div class="dropdown">
              <p class="drop-text">Free shipping in United Kingdom</p>
              <img class="arrow-drop" src="pictures/logo-block3/dropdown/arrow-drop.svg"/>
              <div class="panel">
              <img class="delivery" src="pictures/logo-block3/dropdown/delivery.svg"/>
              <p>All purchases are shipped from our warehouse in United Kingdom and are fully 
              insured with a tracking number. Tracked delivery between 2-4 days in United Kingdom + 
              Free Delivery.</p>
            </div> 

          </div>

      </div> 
        <div class="footer">

        <p>*Information is not a public offer</p>
        <p>
        This site is not part of the Facebook or Facebook Inc.
         website. Also, this site is not endorsed by Facebook in any way 
         FACEBOOK is a trademark of FACEBOOK, Inc. Facebook provides a platform 
         for serving advertising, but the opinions and/or views expressed on this 
         website are not  representative of Facebook, Inc. Opinions and/or views 
         expressed on our website's social media platforms, including but 
         not limited to our blogs and Facebook pages, represent the thoughts of 
         individual bloggers and online communities, and not necessarily those of 
         our website or any of its business partners, affiliates or any of their 
         respective officers, employees, staff or board members. The views and 
         opinions expressed on these pages do not in any way reflect the opinions 
         of the site on which they are published, other sites affiliated with the
          site, the personnel involved in the maintenance of the site or any member 
          of the site. Any opinions or views expressed on this website's social 
          media platforms are not representative of Facebook, Inc. Although our 
          website makes reasonable efforts to monitor and/or moderate content 
          posted on its social media platforms, we do not moderate all comments 
          and cannot always respond to online inquiries in a timely manner. All 
          new customers are entered into the raffle for the displayed campaign product.
           If you are the lucky winner, you will be contacted directly by email. This special 
           offer includes a three-day trial to an affiliated service, after 
           which the subscription fee will be thirty-three euros every fourteen days
            - automatically deducted from your credit card. If for any reason you are 
            not satisfied with the service, you can cancel your account within three days. 
            The service will renew every thirty days until cancelled. This campaign will expire 
            on December 31 of this year. If you would like to participate without signing up for
             a three-day trial at Toolsandtoys, please email.
        </p>
      
        </div>
    </div>         
       
  </div>

`



// Модальное окно
// Получить модальный
const modal = document.getElementById("myModal");

// Получить кнопку, которая открывает модальный
const btn = document.getElementById("myBtn");

// Получить элемент <span>, который закрывает модальный
const span = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на кнопку, откройте модальный
btn.onclick = function() {
  modal.style.display = "block";
}

// Когда пользователь нажимает на <span> (x), закройте модальное окно
span.onclick = function() {
  modal.style.display = "none";
}

// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Таймер обратного отсчета

// Установите дату, до которой мы ведем обратный отсчет
var countDownDate = new Date("July 1, 2024 04:00:00").getTime();

// Обновляйте обратный отсчет каждые 1 секунду
var x = setInterval(function() {

  // Получить сегодняшнюю дату и время
  var now = new Date().getTime();

  // Найти расстояние между сейчас и датой обратного отсчета
  var distance = countDownDate - now;

  // Расчет времени по дням, часам, минутам и секундам
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Отображение результата в элементе с помощью id="demo"
  document.getElementById("timer").innerHTML = hours + ": "
  + minutes + ": " + seconds;

  // Если обратный отсчет завершен, напишите текст
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "17:34:53";
  }
}, 1000);

// Дроп

var acc = document.getElementsByClassName("arrow-drop");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


