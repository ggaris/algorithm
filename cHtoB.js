function cHtoB(colorH) {
  let colorLen = colorH.length;
  if (colorLen == 4) {
    return `rgb(${colorH.substr(1).split('').map(value => {
      return parseInt(value.repeat(2), 16)
    }).join(',')})`
  } else if (colorLen == 7) {
    return `rgb(${parseInt(colorH.substring(1, 3), 16)},${parseInt(colorH.substring(3, 5), 16)},${parseInt(colorH.substring(5, 7), 16)})`
  } else {
    console.error('请输入正确的颜色值!')
  }
}
