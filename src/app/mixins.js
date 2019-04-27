import {getNestedVal} from './utils'

export const collectValidationErrors = {
  methods: {
    validationErrors (fields) {
      let errors = []

      fields.map(fieldData => {
        let [path, params] = fieldData
        let fieldName = path.split('.').slice(-1)[0]
        let field = getNestedVal(this.$v, path)

        if (field.$dirty) {
          Object.keys(field).filter(k => !k.startsWith('$')).map((k) => {
            if (!field[k]) {
              errors.push({
                field: fieldName,
                message: this.i18n(`validation_${k.toLowerCase()}`, params)
              })
            }
          })
        }
      })

      return errors
    }
  }
}
