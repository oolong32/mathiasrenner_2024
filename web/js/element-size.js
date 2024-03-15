function getSize(el) {
  // returns width and height of element
  if (el) {
    const w = null
    const h = null
    return {w, h}
  } else {
    console.log('getSize() got bad element 😖')
  }
}

function setSize(el, dimensions) {
  // sets width and height of element
  // dimensions is an object: {w, h}
  el.setAttribute('width', dimensions.w)
  el.setAttribute('height', dimensions.h)
}
