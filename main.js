setInterval(function checkImage() {
  const imgTop = $('#myimage').position().top;
  const imgBottom = $('#myimage').height() + imgTop;
  let viewportTop = $(document).scrollTop();
  let viewportBottom = viewportTop + window.innerHeight;
  if ((viewportTop < imgTop && imgTop < viewportBottom) || (viewportTop < imgBottom && imgBottom < viewportBottom)) {
    console.log('im here');
  } else if (!(viewportTop < imgTop && imgTop < viewportBottom) || !(viewportTop < imgBottom && imgBottom < viewportBottom)) {
    console.log('not')
  }
},2000)
