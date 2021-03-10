/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// const regEmail = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/

interface IValidateFields {
  value: string | null
  rules: Array<string>
}
export const validate = (fields: Array<IValidateFields>) => {
  let isValid = true
  fields.map((field: { rules: string[]; value: string | null }) => {
    if (field.rules) {
      field.rules.map((rule: string) => {
        switch (rule) {
          case 'CANNOT_BE_BLANK':
            if (!field.value || field.value.length < 1) {
              isValid = false
            }
            break
          default:
            break
        }
      })
    }
  })
  return isValid
}

export default validate
