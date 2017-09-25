import * as cookies from 'js-cookie'

function removeNaked (): string {
  const domain = `${location.hostname}`
  return domain.indexOf('www.') === 0 ? domain.substring(4) : domain
}

function findOrCreate (
  name: string,
  options: cookies.CookieAttributes,
  data?: string
): string | undefined {
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
  let attr: cookies.CookieAttributes = options

  for (let i = 2; i <= domainParts.length; i++) {
    domain = `${domainParts[domainParts.length - i]}.${domain}`
    attr = Object.assign({}, options, { domain })

    if (data) {
      cookies.set(name, data, attr)
    }

    const storedId = cookies.get(name)
    if (storedId) {
      return storedId
    }
  }
  if (data) {
    cookies.set(name, data, attr)
  }
  return cookies.get(name)
}

export function find (name: string, options: cookies.CookieAttributes): string | undefined {
  return findOrCreate(name, options)
}

export function save (name: string, value: string, options: cookies.CookieAttributes): string | undefined {
  return findOrCreate(name, options, value)
}
