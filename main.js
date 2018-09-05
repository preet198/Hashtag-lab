window.setInterval(function checkImage() {
  let viewportTop = $(document).scrollTop();
  let viewportBottom = viewportTop + window.innerHeight;
  const imgTop = $('img').offset().top;
  const imgBottom = $('#myimage').height() + imgTop;

  if ((viewportTop < imgTop && imgTop < viewportBottom) ||
    (viewportTop < imgBottom && imgBottom < viewportBottom)) {
    console.log('im here');
  } else if (!(viewportTop < imgTop && imgTop < viewportBottom) ||
    !(viewportTop < imgBottom && imgBottom < viewportBottom)) {
    console.log('not')
  }
},2000)

