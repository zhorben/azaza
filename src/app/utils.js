
export const setBodyClasses = (classes) => {
  let classesToSet = classes
  if ($.type(classes) === 'array') {
    classesToSet = classes.reduce((prev, curr) => `${prev} ${curr}`, 'page')
  } else {
    classesToSet = `page ${classesToSet}`
  }
  $('body').attr('class', classesToSet)

  // if (window.IS_MOBILE) {
  //   $('body').addClass('iti-mobile')
  // }
}

export const getNestedVal = (obj, path) => {
  if (!path) return obj

  let prop
  let props = path.split('.')
  let i = 0
  let iLen = props.length - 1

  for (; i < iLen; i++) {
    prop = props[i]

    let candidate = obj[prop]
    if (candidate !== undefined) {
      obj = candidate
    } else {
      break
    }
  }
  return obj[props[i]]
}
