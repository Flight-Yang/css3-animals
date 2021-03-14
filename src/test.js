// import string from './css.js'

const string = `.skin *{box-sizing: border-box;margin: 0;padding: 0;}
.skin *::before, .skin *::after{box-sizing: border-box;}

.skin{
  background: #ffe600;
  min-height: 50vh;
  position: relative;
}
body{
    margin: 0;
    top: 0;
    background-color: #777891;
}

.bk{
    position: relative;
}
.head{
    width: 192px;
    height: 184px;
    background-color:#4c4d5e;
    position: relative;
    left: 50%;
    top: 200px;
    margin-left: -96px;
    border-radius: 50%;
}

.ear.left{
    width: 104.7px;
    height: 111.97px;
    position: absolute;
    right: 50%;
    top: 180px;
    border-top-right-radius: 100% 10%;
    border-bottom-left-radius: 70% 90%;
    margin-right: 26px;
    background-color: #4c4d5e;
    overflow: hidden;
    transform: rotate(6deg);
    margin-top: 14px;
    animation: tiaodong 1s infinite linear alternate;
}

@keyframes tiaodong{
        0%{transform: rotate(6deg);}
        50%{transform: rotate(10deg);}
        100%{transform: rotate(6deg);}
}

@keyframes tiaodong1{
    0%{transform: rotate(-6deg);}
    50%{transform: rotate(-10deg);}
    100%{transform: rotate(-6deg);}
}




.ear.right{
    width: 104.7px;
    height: 111.97px;
    position: absolute;
    left: 50%;
    top: 180px;
    border-top-left-radius: 100% 10%;
    border-bottom-right-radius: 70% 90%;
    background-color: #4c4d5e;
    overflow: hidden;
    transform: rotate(-6deg);
    margin-top: 14px;
    margin-left: 26px;
    animation: tiaodong1 1s infinite linear alternate;
}

.ear.left::before{
    content: '';
    width: 100%;
    height: 150%;
    position: absolute;
    background-color: #68e8d7;
    border-radius: 100%;
    transform: rotate(-50deg);
    top: -1.2rem;
    left: -3rem;
}

.ear.right::before{
    content: '';
    width: 100%;
    height: 150%;
    position: absolute;
    background-color: #68e8d7;
    border-radius: 100%;
    transform: rotate(50deg);
    top: -1.2rem;
    left: 3rem;

}

.eyes.left{
    position: absolute;
    width: 52px;
    height: 40px;
    background-color: #68e8d7;
    right: 50.5%;
    margin-right: 25px;
    margin-top: 70px;
    border-bottom-right-radius: 50% 75%;
    border-bottom-left-radius: 50% 75%;
}

@keyframes zhayan{
    10%{transform: scaleY(1);}
    11%{transform: scaleY(1);}
    20%{transform: scaleY(1);}
    30%{transform: scaleY(0);}
    40%{transform: scaleY(1);}
    50%{transform: scaleY(1);}
    60%{transform: scaleY(1);}
    70%{transform: scaleY(1);}
    71%{transform: scaleY(0);}
    80%{transform: scaleY(1);}
    90%{transform: scaleY(1);}
    100%{transform: scaleY(1);}

 }
.eyes{
    top:215px;
    z-index:2;
    animation:3s zhayan infinite linear alternate;

}



.eyes.right{
    position: absolute;
    width: 52px;
    height: 40px;
    background-color: #68e8d7;
    left: 50.5%;
    margin-left: 25px;
    margin-top: 70px;
    border-bottom-right-radius: 50% 75%;
    border-bottom-left-radius: 50% 75%;
}

.eyes.right::before{
    content: '';
    width: 12px;
    height: 28px;
    background-color:#4c4d5e;
    position: absolute;
    right: 50%;
    border-bottom-left-radius: 50% 50%;
    border-bottom-right-radius: 50% 50%;
}

.eyes.left::before{
    content: '';
    width: 12px;
    height: 28px;
    background-color: #4c4d5e;
    position: absolute;
    left: 50%;
    margin-left: -px;
    border-bottom-left-radius: 50% 50%;
    border-bottom-right-radius: 50% 50%;
}

.nose{
    width: 5.19px;
    height: 3px;
    position: absolute;
    left: 50%;
    top: 200px;
    margin-top: 110px;
    margin-left: -2.595px;
    background-color: #2a2a33;
    border-bottom-left-radius: 50% 80%;
    border-bottom-right-radius: 50% 80%;
}

.mouse.left{
    right: 50%;
    transform: rotate(58deg);
    margin-right: 2.2px;
    margin-top: 124px;
    border-top-left-radius: 50% 80%;
    border-top-right-radius: 50% 80%;
    border-radius: 50%;
}

.mouse.right{
    left: 50%;
    transform: rotate(-58deg);
    margin-left: 1.9px;
    margin-top: 124px;
    border-top-left-radius: 50% 80%;
    border-top-right-radius: 50% 80%;
    border-radius: 50%;
}

.mouse{
    position: absolute;
    width: 1.5px;
    height: 7px;
    top: 200px;
    background-color: #2a2a33;
}

.face.left{
    width: 37.61px;
    height: 23.06px;
    position: absolute;
    right: 50%;
    top: 200px;
    margin-right: 52px;
    border-radius: 50%;
    background-color: #ff6ec7;
    opacity: 0.2;
    margin-top: 110px;
    transform: rotate(3deg);
}

.face.right{
    width: 37.61px;
    height: 23.06px;
    position: absolute;
    left: 50%;
    top: 200px;
    margin-left: 52px;
    border-radius: 50%;
    background-color: #ff6ec7;
    opacity: 0.2;
    margin-top: 110px;
    transform: rotate(-3deg);

}`


const player = {
  id: undefined,
  time: 100,
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  n: 1,
  init: () => {
    player.ui.demo.innerText = string.substr(0, player.n)
    player.ui.demo2.innerHTML = string.substr(0, player.n)
    player.bindEvents()
    player.play()
  },
  bindEvents: () => {
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        const value = player.events[key] // pause / play / slow
        document.querySelector(key).onclick = player[value]
      }
    }

  },
  run: () => {
    player.n += 1
    if (player.n > string.length) {
      window.clearInterval(player.id)
      return
    }
    player.ui.demo.innerText = string.substr(0, player.n)
    player.ui.demo2.innerHTML = string.substr(0, player.n)
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight
  },
  play: () => {
    window.clearInterval(player.id)
    player.id = setInterval(player.run, player.time)
  },
  pause: () => {
    window.clearInterval(player.id)
  },
  slow: () => {
    player.pause()
    player.time = 300
    player.play()
  },
  normal: () => {
    player.pause()
    player.time = 100
    player.play()
  },
  fast: () => {
    player.pause()
    player.time = 0
    player.play()
  }
}

player.init()






