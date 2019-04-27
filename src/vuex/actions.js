
export const setLanguage = (store, lang) => {
  store.commit('SET_LANGUAGE', lang)
  // Cookies.set('lang', lang)
}

export const setIsMobile = (store) => {
  store.commit('SET_IS_MOBILE', window.IS_MOBILE)
}

export const init = (store) => {
  return new Promise((resolve, reject) => {
    setIsMobile(store)
  })
}
