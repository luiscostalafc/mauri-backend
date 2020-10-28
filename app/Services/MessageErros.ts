export const getErrors = (error: { messages: { errors: any[] } }) => {
  return error.messages.errors.map(e => {
    const rule = getRule(e.rule)
    return `${e.field} ${rule}`
  }).join(', ')
}

const getRule = (rule: string) => {
  switch (rule) {
    case 'required':
      return 'é obrigatório'
    case 'alpha':
      return 'deve ser alfa'
    case 'confirmed':
      return 'deve ser confirmado'
    case 'distinct':
      return 'deve ser distrito'
    case 'email':
      return 'deve ser um e-mail válido'
    case 'exists':
      return 'não existe'
    case 'unique':
      return 'deve ser único'
    case 'ip':
      return 'deve ser IP'
    case 'maxLength':
      return 'deve ser maior...'
    case 'minLength':
      return 'deve ser menor...'
    case 'unsigned':
      return 'deve ser sem sinal'
    case 'range':
      return 'deve estar entre.. e ..'
    case 'regex':
      return 'deve ser ()'
    case 'uuid':
      return 'deve ser uuid'
    case 'mobile':
      return 'deve ser móvel'
    case 'after':
      return 'deve ser depois'
    case 'before':
      return 'deve ser antes'
    case 'afterField':
      return 'deve estar depois de'
    case 'beforeField':
      return 'deve estar antes de'
    case 'blacklist':
      return 'não deve estar em'
    default:
      return ''
  }
}
