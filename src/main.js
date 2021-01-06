window.autoScaleOnLoad = function () {
  console.log(window.innerWidth / window.innerHeight)
  if ((window.innerWidth / window.innerHeight) < 1) {
    document.getElementsByClassName('no-pc')[0].style.display = 'none'
    
    console.log('竖屏')
    autoScale({
      // 设计宽度PC
      deviseW: 1920,
      // 设计高度PC
      deviseH: 1080,
      type: 'rotate',
      box: '.rotate'
    })
    autoScale({
      // 设计宽度PC
      deviseW: 1920,
      // 设计高度PC
      deviseH: 1080,
      type: 'scale-pc',
      box: '.scale-box',
      rotate: true
    })
    autoScale({
      // 设计宽度PC
      deviseW: 1920,
      // 设计高度PC
      deviseH: 1080,
      type: 'scale-w',
      box: '.scale-w',
      rotate: true
    })
  } else {
    document.getElementsByClassName('no-phone')[0].style.display = 'none'
    autoScale({
      // 设计宽度PC
      deviseW: 1920,
      // 设计高度PC
      deviseH: 1080,
      type: 'scale-pc',
      box: '.scale-box'
    })
    autoScale({
      // 设计宽度PC
      deviseW: 1920,
      // 设计高度PC
      deviseH: 1080,
      type: 'scale-w',
      box: '.scale-w'
    })
  }
}