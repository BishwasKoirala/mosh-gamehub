const getCroppedImageUrl = (url : string) => {
  if (!url) return ''
  const target = 'media/'
  const index = url.indexOf(target) + target.length 
  return url.slice(0,index) + 'crop/600/400/' + url.slice(index)
  // url.slice(9,index) will slice it from http~~to~~media/ 
  //then the 'crop/600/400' is added
  // then adding url.slice(index) will slice the url from games/20~~to~~64.jpg and add it up

}

export default getCroppedImageUrl;
