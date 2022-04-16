function execJs(code) {
  chrome.tabs.getSelected(null, function(tab) {
    chrome.tabs.executeScript(null, {
      code
    })
  })
}

const job_libs = {
  '第2章 绘图与填充': {
    '当将浮动的选择范围转换为路径时，所创建的路径的状态是': [
      '工作路径'
    ],
    '在按住什么功能键的同时单击路径面板中的填充路径图标': [
      'alt'
    ],
    '可以移动某个锚点的位置，并可以对锚点进行变形操作':[
      '路径直接选择工具'
    ],
    '在按住alt键的同时，使用什么工具将路径选择后，拖拉该路径将会将该路径复制':[
      '直接选择工具'
    ],
    '当使用绘图工具时，如何暂时切换到吸管工具':[
      '按住alt键'
    ],
    '图标时，若想弹出选择描边工具的对话框，同时按住下列哪个键': [
      'alt'
    ],
    '裁切路径命令对话框中的平滑度是用来定义什么的':[
      '定义曲线由多少个直线片段组成'
    ],
    '下面对矢量图和象素图描述正确的是':[
      '图形软件能够生成矢量图'
    ],
    'Photoshop中存在一个圆形选区的情况下，按Alt键单击路径调板上的“从选区建立工作路径”按钮，并在弹出的对话框中输入下列哪一个数值，得到的路径节点相对最少':[
      '3'
    ],
    'Photoshop中在路径控制面板中单击“从选区建立工作路径”按钮，即创建一条与选区相同形状的路径，利用直接选择工具对路径进行编辑，路径区域中的图像有什么变':[
      '没有变化'
    ],
    '在路径曲线线段上，方向线和方向点的位置决定了曲线段的什么':[
      '形状'
    ],
    'Photoshop中要暂时隐藏路径在图像中的形状，执行以下的哪一种操作':[
      '单击路径控制面板中的空白区域'
    ],
    'Photoshop中下列哪几项能够正确叙述路径':[
      '可以使用涂抹工具对路径进行描边操作',
      '通过将路径缩览图拖至创建新路径按钮上能够复制该路径',
    ],
    '下面对于在Photoshop中使用形状工具的优点，叙述正确的是哪几项':[
      '由于形状是矢量的，因此具有与图像分辨率无关的特性，从而在输出时可以获得较高的质量',
      '由于形状是矢量的，因此使用形状可以使文件更小',
      '可以通过改变形状的节点，改变形状的外形，从而使工作更灵活',
      '能够使图像的路径层次更明显',
    ],
    '使用下面哪种方法能进行路径的创建': [
      '使用自由钢笔工具',
      '先建立选区，再将其转化为路径',
      '使用钢笔工具'
    ],
    '路径工具的作用主要有':[
      '使着色工具沿着路径画线',
      '将路径转为选择区域',
      '在路径中填充色彩'
    ],
    '下列关于路径的描述正确的':[
      'A',
      'B',
      'C',
      'D'
    ],
    'Photoshop中如果在图像中有路径，并需要将其保留下来。应将图像存储为什么格式': [
      'PSDG',
      'TIFF',
    ]
  },
  '第3章 修改图像': {
    '以下不是图像大小的常用尺寸单位的是': [
      '像点'
    ],
    '以下哪种格式的图像文件属于压缩文件，容量较小，适合于在网上发布': [
      'jpg'
    ],
    '是Photoshop图像最基本的组成单元':[
      '像素'
    ],
    '在Photoshop中移动图层，必须使用':[
      '移动工具'
    ],
    '键可以在使用“缩放”工具过程中，实现“放大”和“缩小”模式的互换。':["Alt" ],
    'Photoshop中利用单行或单列选框工具选中的是': ['一行或一列像素'],
    '在Photoshop中新建图像文件默认的背景颜色是': ['白色'],
    '下列创建参考线的方法': ['按住Shift键，从水平标尺拖拽以创建垂直参考线'],
    'Photoshop中在使用仿制图章复制图像时，每一次释放左键后再次开始复制图像，都将从原取样点开始复制，而非按断开处继续复制，其原因是下列哪一项':[
      '此工具的“对齐的”复选框未被选中'
    ],
    'Photoshop中在使用矩形选择工具创建矩形选区时，得到的是一个具有圆角的矩形选择区域，其原因是下列各项的哪一项':[
      '矩形选择工具具有一个较大的羽化值'
    ],
    '关于图像的缩放效果，下面说法正确的是':['无论放大或缩小图像，图像的像素的数量均不会变化'],
    '对选区区域的影响与“仿制图章工具”相似':['修复画笔工具'],
    '图像分辨率的单位是':['ppi'],
    '如何旋转一个层或选区':['单击并拖拉旋转工具', '单击右键', '编辑>变换>旋转'],
    'Photoshop中下面对于“图像大小”叙述正确的是哪几项':['A', 'B', 'C', 'D'],
    'Photoshop中下面对于“图像大小”与“画布大小”命令间的区别，描述不正确的是下面哪一项':[
      '“画布大小”命令不可以改变图像分辨率，而“图像大小”则可以', 
      '“图像大小”命令可以在不损失像素的情况下缩小图像，而“画布大小”命令则不可以'],
    '设置绘图颜色可以用哪些方法':[
      'A', 'B', 'C', 'D'
    ],
    '以下哪些工具属性栏包含“容差”': ['魔棒', '油漆桶'],
    '属于给对象执行变换操作': [
      'A', 'B', 'C', 'D'],
      '又称为调色工具': [
        '加深工具',
        '减淡工具',
        '海绵工具',
      ]
  },
  '第4章 图像色彩调整': {
    '一个JPEG格式的图像在PS中打开后，存在着几个图层':[
      '1'
    ],
    '命令，可使图像产生一种滤色效果':[
      '图片过滤器'
    ],
    '“曲线”命令是对图像的': [
      '亮度／对比度'
    ],
    'Photoshop中渐变工具不能在下面哪一种颜色模式下的图像中使用': [
      '索引颜色模式'
    ],
    '用于印刷的Photoshop图像文件必须设置为': [
      'CMYK'
    ],
    '下列哪种分辨率用于在线印刷时的最终输出':[
      '72ppi'
    ],
    '将“曲线”右上角的端点向左移动，可以':[
      '增加图像亮部的对比度，并使图像变亮'
    ],
    '以下哪个命令不能对图像进行色彩调整':[
      '羽化'
    ],
    '命令，可以将当前图像或当前层中图像的颜色与它下一层中的图像或其他图像文件中的图像相匹配':[
      '颜色匹配  '
    ],
    '可对图像中特定颜色进行修改的命令是':[
      '“色相饱和度”命令'
    ],
    '命令，可以让用户直观地调整图像或选取范围内图像的色彩平衡、对比度、亮度和饱和度':[
      '变化 '
    ],
    '下列哪组颜色混合后能够得到印刷品的绿色':[
      'Y100'
    ],
    '索引颜色模式的图像不可以存储为': [
      'TXT'
    ],
    '以下哪种色彩模式可使用的内置滤镜最多': [
      'RGB'
    ],
    'Photoshop中以下哪种图像格式支持透明':[
      'PNG-8',
      'GIF',
      'PNG-24',
    ],
    'Photoshop中以下哪种情况适用于用PNG-24格式来优化保存图像':[
      '图像色调较为丰富',
      '图像有多色阶透明',
    ],
    'Photoshop中下面有关图像的颜色模式描述正确的是':[
      '不同的颜色模式表示图像中像素点采用了不同的颜色描述方式',
      '在Photoshop中处理的图像都会有一定的颜色模式',
      '不同的颜色模式其色域空间也不同',
    ],
    '新建文件时，可选择的图像模式有':[
      '位图', 'RGB', 'CMYK', 'Lab', '灰度'
    ],
    '“色相／饱和度”命令可以修改图像的': [
      '饱和度',
      '明度',
      '色相',
    ],
    '在photoshop中对图像的对比度进行调整的命令是': [
      '“亮度／对比度”命令 ',
      '“色阶”命令 '
    ]
  },
  '第5章 文字处理': {
    '工具箱中有几个文字工具':[
      '4'
    ],
    '使用“变形文字”面板下的命令，对文字进行变形后，则该文字':[
      '文字打印出来还能保证其较高清晰度'
    ],
    '文字图层的特点是什么': [
      '文字图层在使用扭曲、模糊、锐化等滤镜前需要栅格化'
    ],
    '以下对文字路径说法正确的一项是':[
      '输入文字的长度与路径长度相同时，还能输入文字，多余的文字将隐藏，不可见 '
    ],
    '在Photoshop中，文字应用了效果后，是否可以再对其内容和效果进行修改': [
      '都可以修改 '
    ],
    '你认为对文字图层不可以直接进行哪一项变换': [
      '扭曲变换'
    ],
    'Photoshop中下面对文字图层描述正确的是': [
      '文字图层可直接执行所有的图层样式,并且在执行完各种图层样式之后，文字仍然可以继续被编辑',
      '文字图层可以被转换成矢量路径 '
    ],
    'Photoshop中文字的基本属性包括':[
      '字符属性',
      '段落属性'
    ],
    'Photosnop的“文字工具”可以在图像中设置': [
      '横排',
      '直排'
    ],
    '在Photoshop中，通过调整文本图层的“混合选项”来制作文字特效':[
      '正确'
    ]
  },
  '第6章 图层处理': {
    '通过图层面板复制层时，先选取需要复制的图层，然后将其拖动到图层面板底部的': [
      '新建'
    ],
    '将两个图层创建了链接，则以下陈述正确的是':[
      '对一个图层进行移动，另一个也会随着移动 '
    ],
    '下列叙述中，哪个不会在操作过程中创建新图层':[
      '将一个图层添加蒙版'
    ],
    '下面哪个效果不是“图层>效果”菜单中的命令':[
      '模糊'
    ],
    '要使某图层与其下面的图层合并可按': [
      'Ctrl＋E '
    ],
    'Photoshop中以下哪些模式的图像不支持图层': [
      'Multichannel多通道',
      'Bitmap位图',
      'IndexColor索引色 ',
    ],
    'Photoshop中下列哪些操作不能删除当前图层': [
      '按键盘上的Esc键',
      '按键盘上的Delete键'
    ],
    'Photoshop中下面哪种图层是不能改变图层的不透明度的': [
      '被隐藏显示的图层',
      '背景层'
    ],
    '在Photoshop中，图层的不透明度决定了该图层显示其下层图层的清晰度。数值越大，其透明度越高，显示其下层图层越清楚': [
      '错误'
    ],
    '图层就像是一组可以绘制、存放图像的透明电子画布': [
      '正确'
    ]
  }
  ,
}


chrome.runtime.onMessage.addListener(({ type, name }) => {
  alert(type)
});


chrome.contextMenus.create({
  id: 'wanke001_root',
  title: '玩课网'
});

/**

    (function(window) {
      // let currentMaintopic = Object.values(window.document.querySelectorAll('.container .maintopic')).filter(item => item.style.display !== 'none')[0]
      // console.log(window.document.querySelectorAll('.container .maintopic'))
    })(window)
*/

chrome.contextMenus.create({
  parentId: 'wanke001_root',
  id: 'wanke001_auto_do_work',
  title: '自动刷题',
  onclick: () => {
    execJs(`
      var containerDom = document.querySelector('iframe').contentWindow.document  
      function check(currentMaintopic, text, type) {
        let result = Object.values(currentMaintopic.querySelectorAll('.topic-choice .'+type)).filter(item => {
          return item.innerText.includes(text.trim())
        })[0];
        if (result) {
          result.className = type + ' checked';
          result.querySelector('input').checked = true;
        }
      }

      function checkedResult(text) {
        // 当前题目
        let currentMaintopic = Object.values(containerDom.querySelectorAll('.container .maintopic')).filter(item => item.style.display !== 'none')[0]
        // 获取正确答案题号
        check(currentMaintopic, text, currentMaintopic.querySelectorAll('.topic-choice .radio').length > 0 ? 'radio' : 'checkbox')
      }
      
      function clickNext() {
        let currentMaintopic = Object.values(containerDom.querySelectorAll('.container .maintopic')).filter(item => item.style.display !== 'none')[0]
        let nextBtn = currentMaintopic.querySelector('.btn-next')
        
        if(!nextBtn.className.includes('btn-forbidden')) {
          nextBtn.click();
          return true;
        } else {
          return false;
        }
      }


      function cleanState(currentMaintopic, type) {
        if(!currentMaintopic.querySelectorAll('.topic-choice .'+type)) return
        Object.values(currentMaintopic.querySelectorAll('.topic-choice .'+type)).forEach(item => {
          item.querySelector('input').checked = false
          item.className = type;
        });
      }

      (function({ document }){
        var timer = null
        // 获取iframe容器DOM 
        function doAnswer(number) {
          let currentMaintopic = Object.values(containerDom.querySelectorAll('.container .maintopic')).filter(item => item.style.display !== 'none')[0]
          cleanState(currentMaintopic, 'radio')
          cleanState(currentMaintopic, 'checkbox')
          
          let data = ${JSON.stringify(job_libs)}
          const lib = data[number]
          let text = currentMaintopic .querySelector('.topicmain p').nextElementSibling.nextElementSibling.nextElementSibling.innerText
            
          if (!text) {
            alert("没有题目")
            return
          }
          let keys =  Object.keys(lib).filter(item => text.replaceAll('，','').includes(item.replaceAll('，','')))
          if(keys.length === 1) {
            lib[keys[0]].forEach(item => {
              checkedResult(item)
            })
          }
          var flag =  clickNext()
          if (timer) {
             clearTimeout(timer)
             timer = null
          }
          console.log(flag, text)
          if (flag) {
            timer = setTimeout(() => {
              doAnswer(number)
            }, 500)
          } else {
            alert('题目已经做完！')
          }
        }
        const currentChapter = document.querySelector('.ware-rightMain .point.active').parentElement.parentElement.parentElement.parentElement.querySelector('.chapter').innerText
        doAnswer(currentChapter)
      })(window)
    `)
  }
});

chrome.contextMenus.create({
  parentId: 'wanke001_root',
  id: 'wanke001_open_auto_next_video',
  title: "自动刷课",
  onclick: () => {
    execJs(`if(!timer)
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
  openAutoPlayNextVideo();`)
  }
});
