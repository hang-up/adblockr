var blockrContainer={options:{colors:["#F19A2A","#F2B635","#00CAFF","#00A0E6","#F25648"],title:"You are using an adblocker!",caption:"Thanks for making the countless sleepless developments nights completely worthless.",aggressive:!1},setBackgroundColor:function(){var e=Math.floor(Math.random()*blockrContainer.options.colors.length);document.getElementsByClassName("adblocker-overlay")[0].style.backgroundColor=blockrContainer.options.colors[e]},getText:function(){return blockrContainer.buildDomElement("<div class='adblocker-overlay'><span class='close-cross' data-target='adblocker-overlay'></span><h1 class='center'><img width='100' height='100' src='palm1.svg' id='adblocker-icon'></h1><h1 class='center' id='adblocker-title'></h1> <p class='center' id='adblocker-caption'></p></div>")},appendText:function(){if(!document.getElementById("ad-blockr")){var e=document.getElementsByTagName("body")[0];e.style.display="none",e.appendChild(blockrContainer.getText()),document.getElementById("adblocker-title").innerHTML=blockrContainer.options.title,document.getElementById("adblocker-caption").innerHTML=blockrContainer.options.caption,blockrContainer.fadeIn(e)}},closePanel:function(){var e=document.querySelector(".adblocker-overlay .close-cross"),o=document.getElementsByClassName("adblocker-overlay")[0];e.onclick=function(){if("adblocker-overlay"===this.dataset.target){blockrContainer.fadeOut(o)}}},aggressive:function(e){e||(document.querySelector(".adblocker-overlay .close-cross").style.display="block",blockrContainer.closePanel())},fadeIn:function(e){var o=.1;e.style.display="block";var t=setInterval(function(){o>=1&&clearInterval(t),e.style.opacity=o,e.style.filter="alpha(opacity="+100*o+")",o+=.1*o},10)},fadeOut:function(e,o){var t=1,n=setInterval(function(){.1>=t&&(clearInterval(n),e.style.display="none"),e.style.opacity=t,e.style.filter="alpha(opacity="+100*t+")",t-=.1*t},10);o()},buildDomElement:function(e){var o=document.createDocumentFragment(),t=document.createElement("div");for(t.innerHTML=e;t.firstChild;)o.appendChild(t.firstChild);return o},init:function(e){if(e)for(var o in e)blockrContainer.options.hasOwnProperty(o)&&(blockrContainer.options[o]=e[o]);blockrContainer.appendText(),blockrContainer.setBackgroundColor(),blockrContainer.aggressive(blockrContainer.options.aggressive)}};