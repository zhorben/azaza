import {Dictionary} from './dictionary'

let interpolate = (state, text, vals) => {
  let newText = text
  vals.forEach((val, i) => {
    let translated = i18n(state)(val)
    newText = newText.split('{' + i + '}').join(translated)
  })
  return newText || text
}

let i18n = state => (id, sep = ' ') => {
  let translate = data => {
    let id = data
    let vals = []
    if ($.isArray(data)) {
      id = data[0]
      vals = data[1]
    }
    let trans = Dictionary[id]
    if (!trans) {
      return id
    }
    if ($.isArray(vals) && vals.length > 0) {
      return interpolate(state, trans[state.activeLang], vals)
    }

    return trans[state.activeLang]
  }
  if ($.isArray(id)) {
    let trans = id.map(translate)
    return trans.join(sep)
  }
  return translate([id, sep])
}

export default i18n
