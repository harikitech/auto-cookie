/* @flow */
import cookies from 'js-cookie'

function removeNaked (): string {
  const domain = `${location.hostname}`
  return domain.indexOf('www.') === 0 ? domain.substring(4) : domain
}

function findOrCreate (name: string, expires: number, data: ?string): string {
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
  for (let i = 2; i <= domainParts.length; i++) {
    domain = `${domainParts[domainParts.length - i]}.${domain}`

    if (data) {
      cookies.set(name, data, { domain, expires })
    }

    const storedId = cookies.get(name, { domain, expires })
    if (storedId) {
      return storedId
    }
  }
  if (data) {
    cookies.set(name, data, { domain, expires })
  }
  return cookies.get(name, { domain: location.hostname, expires })
}

export function find (name: string, expires: number): string {
  return findOrCreate(name, expires)
}

export function save (name: string, value: string, expires: number): string {
  return findOrCreate(name, expires, value)
}
