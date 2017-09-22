/* @flow */
import cookies from 'js-cookie'

type Attributes = {
  expires: number,
  path?: string,
  secure?: boolean
}

function removeNaked (): string {
  const domain = `${location.hostname}`
  return domain.indexOf('www.') === 0 ? domain.substring(4) : domain
}

function findOrCreate (
  name: string,
  options: Attributes,
  data: ?string
): string {
  const value = cookies.get(name)
  if (value) {
    return value
  }

  const domainParts = removeNaked().split('.')
  const subDomain: any = domainParts[domainParts.length - 1]
  // eslint-disable-next-line eqeqeq
  if (domainParts.length === 4 && parseInt(subDomain, 10) == subDomain) {
    return cookies.get(name)
  }

  let domain = domainParts[domainParts.length - 1]
  let attr: Attributes = options

  for (let i = 2; i <= domainParts.length; i++) {
    domain = `${domainParts[domainParts.length - i]}.${domain}`
    attr = Object.assign({}, options, { domain })

    if (data) {
      cookies.set(name, data, attr)
    }

    const storedId = cookies.get(name, attr)
    if (storedId) {
      return storedId
    }
  }
  if (data) {
    cookies.set(name, data, attr)
  }
  return cookies.get(
    name,
    Object.assign({}, attr, { domain: location.hostname })
  )
}

export function find (name: string, expires: number): string {
  return findOrCreate(name, { expires })
}

export function save (name: string, value: string, options: Attributes): string {
  return findOrCreate(name, options, value)
}
