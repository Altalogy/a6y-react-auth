/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// const regEmail = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/

export const validate = (values, fields) => {
  let isValid = true
  const errors = {}
  fields.map(field => {
    if (field.validation) {
      field.validation.map(rule => {
        switch (rule.type) {
          case 'CANNOT_BE_BLANK':
            if (!values[field.name] || values[field.name].length < 1) {
              errors[field.name] = rule.type
              isValid = false
            }
            break
          default:
            break
        }
      })
    }
  })
  return { isValid, errors }
}

export default validate
