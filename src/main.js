setTimeout(() => {
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
}, 0);