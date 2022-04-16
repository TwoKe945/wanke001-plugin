
((window) => {
  function open(url)  {
    window.open(url)    
  }

  const clickHandler = {
    openAutoNextVideo: function () {
      let bg = chrome.extension.getBackgroundPage()
      bg.execJs(`
        if(!timer)
          var timer = null

        function closeTimer() {
          if(timer) clearInterval(timer)
        }
        
        function getPointAll() {
          return Object.values(document.querySelectorAll('.ware-rightMain .point'))
        }
        
        function getCurrentPlayVideo() {
        return document.querySelector('.ware-rightMain .point.active')
        }
        
        function getCurrentTime() {
        return document.querySelector('.vjs-remaining-time-display')
        }
        
        function getVideoPointAll() {
        return getPointAll().filter(item => item.innerText !== '章节练习')
        }
        
        function playNextVideo() {
          // 执行下一个视频
          let points = getVideoPointAll()
          let activeIndex = points.indexOf(getCurrentPlayVideo()) 
          if (activeIndex + 1 < points.length) {
            points[activeIndex + 1].click()
          } else {
            closeTimer()
            alert("课程完毕！")
          }
        }
        
        function autoNextVideo() {
          if(getCurrentTime().innerText === '-0:00'){
            playNextVideo()
          }
        }
        
        function openAutoPlayNextVideo(){
          if(timer) {
            alert('功能已打开！');
            return
          }
          if (window.location.href.includes('http://www.wanke001.com/stu/courseWare')) {
            alert('启动自动播放功能！');
            closeTimer();
            timer = setInterval(autoNextVideo,500)
          } else {
            alert('请前往 玩课网课程播放页面运行')
          }
        }
        openAutoPlayNextVideo();
      `);
    },
    openSite: function () {
      open("http://www.wanke001.com")
    }
  }

  window.document.getElementById('openAutoNextVideo').addEventListener('click',clickHandler.openAutoNextVideo)
  window.document.getElementById('wanke_site').addEventListener('click',clickHandler.openSite)

  window.openAutoNextVideo = clickHandler
})(window)
