!function(e){var n={};function t(o){if(n[o])return n[o].exports;var a=n[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(o,a,function(n){return e[n]}.bind(null,a));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);t(1),t(2);var o=1,a=0,s=1,l=0,i=!1,d=1,r=0,p=!1,c=0,m=!1;document.getElementById("test1");window.wweR=function(){(s+=1)>l?(document.getElementsByClassName("footer-list-menu")[0].remove("test1"),i=!1):s==l&&(s+=1)},window.getStyleDigable=function(){(o+=1)>a?(document.querySelector(".searchbar").classList.remove("style-on-active"),console.log("Disable"),document.getElementsByClassName("search-result")[0].style.display="none",document.getElementsByClassName("long-line ")[0].style.display="none",document.getElementsByClassName("searchbar")[0].style.borderRadius="24px",document.getElementsByClassName("searchbar")[0].style.border="",document.getElementsByClassName("searchIcon")[0].style.margin="0 0 0 14px",document.getElementsByClassName("microphoneIcon")[0].style.margin="0 16px 0 3px"):(document.querySelector(".searchbar").classList.toggle("style-on-active"),console.log("Enable"),o==a&&(o+=1),document.getElementsByClassName("microphoneIcon")[0].style.margin="0 17px 0 3px",document.getElementsByClassName("searchIcon")[0].style.margin="0 0 0 15px",document.getElementsByClassName("search-result")[0].style.display="flex",document.getElementsByClassName("long-line")[0].style.display="block",document.getElementsByClassName("searchbar")[0].style.borderRadius="24px 24px 0 0",document.getElementsByClassName("searchbar")[0].style.border="none",document.getElementsByClassName("search-list")[0].style.boxShadow="none",document.getElementsByClassName("inputWrapper2")[0].style.boxShadow="none",document.getElementsByClassName("wrapper-element")[0].style.boxShadow="none",document.getElementsByClassName("element-delete")[0].style.boxShadow="none")},window.getStyle=function(){o=(a+=1)-1},window.setT=function(){document.getElementsByClassName("inputText")[0].focus()},function(){for(var e=document.body.getElementsByClassName("search-list"),n=0;n<e.length;n++){for(var t="",o=0;o<10;o++)t+=`<div class="element" style="display:flex;" > \n        <div class="element-icon" style="box-shadow:none; "> </div> \n        <div class="wrapper-element" style="justify-content: space-between;display:flex;flex:100%;"> \n        <a  style=" box-shadow:none; color: #52188c;padding-top: 1px;">this text was generated at javascript ${o}</a>  \n        <div class="element-delete" style="margin-top: 1px;padding-right: 6px;"> <a style=" box-shadow:none; color: #80868b; cursor: pointer; font: 13px arial,sans-serif; align-self: center;"> Удалить </a> </div>\n        </div>  \n        </div>`;e[n].innerHTML=t}}(),window.createFooterListMenu=function(){if(s=(l+=1)-1,0==i){i=!0;let e=document.getElementsByClassName("firstFooter")[0],n=document.createElement("div");n.className="footer-list-menu",n.id="test1",n.style="\n        display: flex;\n        position: fixed;\n        width: 213px;\n        height: 298px;\n        right: 30px;\n        border: 1px solid #999;\n        bottom: 30px;\n        flex-direction: column;\n        padding:10px 0;\n        white-space: nowrap;\n        background: #fff;\n        box-shadow: 0 2px 4px rgba(0,0,0,.2);\n    ",n.innerHTML="\n            <a>Настройки поиска</a>\n            <a>Расширенный поиск</a>\n            <a>Ваши данные в Поиске</a>\n            <a>История</a>\n            <a>Поиск в справке</a>\n            <a>Отправить отзыв</a>\n    \n            ",e.append(n)}else i=!1,document.getElementsByClassName("footer-list-menu")[0].remove("test1")},console.log("WebPack BaBy"),console.log("Clean WebPack BaBy"),window.createMenuAccount=function(){if(d=(r+=1)-1,0==p){p=!0;let e=document.body,n=document.createElement("div");n.className="menu-account",n.id="test2",n.style="\n    background: #fff;\n    border: 1px solid #ccc;\n    border-color: rgba(0,0,0,.2);\n    color: #000;\n    box-shadow: 0 2px 10px rgba(0,0,0,.2);\n    display: flex;\n    max-height: calc(100vh - 44px - 15px - 100px);\n\n\n    align-items: center;\n    flex-direction: column;\n    border-radius: 8px;\n    width: 356px;\n    height: 432px;\n    outline: none;\n    overflow: hidden;\n    position: absolute;\n    right: 30px;\n    top: 60px;\n   \n\n    ",n.innerHTML='\n           <div class=\'account-manager\' style="\n           display: flex;\n           justify-content: space-between;\n           flex-direction: column;\n           align-items: center;\n         \n           margin:20px; \n           width:288px;\n           height:190px\n \n           ">\n\n                <div class=\'circle-icon\' style=\' display: flex;\n                justify-content: center;\n                align-items: center;  \n                border-radius:50px; \n                background: #5c6bc0; \n                width:86px;height:86px\'>\n\n                     <span style="font-family: arial,sans-serif; color:white; font-size: 45px;" >M</span>\n\n                </div>\n             \n              \n               <div style="padding-bottom: 10px; font: 500 16px/22px Google Sans,Roboto,RobotoDraft,Helvetica,Arial,sans-serif;">\n               <div> User Name</div>\n               <div> User Email</div>\n             \n               </div>\n\n               <div  style="padding-bottom: 10px;">\n          \n                  <a class=\'manage-account\' style=\'\n                  font: 500 14px/16px Google Sans,Roboto,RobotoDraft,Helvetica,Arial,sans-serif;\n                  padding: 8px 16px;\n                  cursor: pointer;\n                  border: 1px solid #dadce0;\n                  border-radius: 50px;\n                  \'> Управление аккаунтом Google</a>\n             \n               </div>\n           \n           </div>\n\n           <div class=\'add-account\' style=\n           "background: #fff;\n           border-top: 1px solid #e8eaed;\n           width:354px;\n           height:51px\n           ">\n           \n           \n                  <a style=\'\n                  display:flex;\n                  cursor: pointer;\n                  color: rgb(60, 64, 67);\n                  letter-spacing: 0.25px;\n                  text-align: center;\n                  width: 100%;\n                  font: 500 14px / 16px "Google Sans", Roboto, RobotoDraft, Helvetica, Arial, sans-serif;\n                  outline: 0px;\n                  padding: 14px 41px;\n                  text-decoration: none;\n                  align-items: center;\n                  \'>\n                    <div class="svg-acount-manage">\n                        \n                    </div>\n                    \n                    <div style=\'\n                    padding: 3px 0px 0px 14px;\n                    \'>Добавьте ещё один аккаунт</div>\n                    \n                  </a>\n\n           </div>\n           \n           <div class=\'log-off\' style="\n           display:flex;\n           align-items: center;\n           justify-content: center;\n           border-bottom: 1px solid #e8eaed;\n           border-top: 1px solid #e8eaed;   \n           width:354px;\n           height:72px\n           ">\n          \n           <button style=\'\n          \n           background-color: white;\n           cursor: pointer;\n           border-width: 1px;\n           border-style: solid;\n           border-color: rgb(218, 220, 224);\n           border-radius: 4px;\n           font: 500 14px / 16px "Google Sans", Roboto, RobotoDraft, Helvetica, Arial, sans-serif;\n\n           width:92px;\n           height:38px;\n           \'>\n           Выйти</button>\n           \n           </div>\n\n\n           <div class=\'polisy\' \n           style="\n         \n           width:288px;\n           height:48px;\n           display: flex;\n           flex-direction: column;\n           align-items: center;\n           justify-content: space-around;\n           margin-top: 15px;\n           color: rgb(95, 99, 104);\n           font: 400 12px / 16px Roboto, RobotoDraft, Helvetica, Arial, sans-serif;\n           \n           ">\n                 <a style="padding: 4px;"> Политика конфиденциальности </a>\n                 <a style="padding: 4px;"> Условия использования </a>\n             \n\n           </div>\n    \n            ',e.append(n)}else p=!1,document.getElementsByClassName("menu-account")[0].remove("test2")},window.wweR2=function(){(d+=1)>r?(document.getElementsByClassName("menu-account")[0].remove("test2"),p=!1):d==r&&(d+=1)},window.CreateLispAppGoogle=function(){if((c+=1)-1,0==m){m=!0;let e=document.body,n=document.createElement("div");n.className="create-lisp-app-google",n.id="style-2",n.style="\n    background: #fff;\n    border: 1px solid #ccc;\n    border-color: rgba(0,0,0,.2);\n    color: #000;\n    box-shadow: 0 2px 10px rgba(0,0,0,.2);\n    display: flex;\n    max-height: calc(100vh - 44px - 15px - 100px);\n\n\n    \n    align-items: center;\n    flex-direction: column;\n    border-radius: 8px;\n    width: 330px;\n    height: 457px;\n    outline: none;\n    overflow: hidden;\n    position: absolute;\n    right: 30px;\n    top: 60px;\n    overflow: auto; \n   \n\n    ",n.innerHTML="\n           <div class='qwe'style='\n          \n  \n       \n\n           display:flex;\n           flex-wrap: wrap;\n           justify-content: space-around;\n           padding-left: 15px;\n           padding-right: 25px;\n           padding-top: 25px;\n           \n           \n           '>\n           \n           \n           <div class='google-app'>Item name</div>\n           <div class='google-app'>Item name</div>\n           <div class='google-app'>Item name</div>\n           <div class='google-app'>Item name</div>\n           <div class='google-app'>Item name</div>\n           <div class='google-app'>Item name</div>\n           <div class='google-app'>Item name</div>\n           <div class='google-app'>Item name</div>\n           <div class='google-app'>Item name</div>\n           <div class='google-app'>Item name</div>\n           <div class='google-app'>Item name</div>\n           <div class='google-app'>Item name</div>\n           \n\n           </div>\n\n           <div style='\n           \n                display:flex;\n           flex-wrap: wrap;\n           justify-content: space-around;\n           padding-left: 15px;\n           padding-right: 25px;\n          \n\n           '>\n         \n           <div class='google-app2'>Item name</div>\n           <div class='google-app2'>Item name</div>\n           <div class='google-app2'>Item name</div>\n           <div class='google-app2'>Item name</div>\n           <div class='google-app2'>Item name</div>\n           <div class='google-app2'>Item name</div>\n           <div class='google-app2'>Item name</div>\n           <div class='google-app2'>Item name</div>\n           <div class='google-app2'>Item name</div>\n          \n\n\n           </div>\n\n           <div style='\n        \n           background-color: #fff;\n           border: 1px solid #dadce0;\n           border-radius: 4px;\n           box-sizing: border-box;\n           color: #1a73e8;\n           display: inline-block;\n           font: 500 14px/16px Google Sans,Roboto,RobotoDraft,Helvetica,Arial,sans-serif;\n           margin: 16px 0 20px 0;\n           max-width: 265px;\n           outline: 0;\n           padding: 10px 24px;\n           text-align: center;\n           text-decoration: none;\n           white-space: normal;\n           width: auto;\n\n           \n           '>\n           Другие приложения и продукты от Google\n           </div>\n            ",e.append(n)}else m=!1,document.getElementsByClassName("create-lisp-app-google")[0].remove("style-2")}},function(e,n,t){},function(e,n,t){}]);