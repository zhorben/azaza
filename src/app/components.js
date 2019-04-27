import Vue from 'vue'

Vue.component('validation-errors', {
  props: ['errors'],
  render: function (createElement) {
    let fields = []
    let messages = []
    const errors = this.errors
      .filter((e) => {
        if (!fields.includes(e.field) && !messages.includes(e.message)) {
          console.log(e.field, 1, e.message)
          fields.push(e.field)
          messages.push(e.message)
          return true
        }
      })
      .map(e => createElement('div', {
        'class': {
          'error': true
        }
      }, [createElement('p', [e.message])]))
    return createElement(
      'div', {
        'class': {
          'errors': true
        }
      }, errors)
  }
})
