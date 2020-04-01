import * as cookies from 'js-cookie'

function removeNaked(): string {
  const domain = `${location.hostname}`
  return domain.indexOf('www.') === 0 ? domain.substring(4) : domain
}

function setCookie(
  domainParts: string[],
  name: string,
  options: cookies.CookieAttributes,
  data: string | object,
): string | undefined {
  let domain = domainParts[domainParts.length - 1]
  const attr: cookies.CookieAttributes = options
  for (let i = 2; i <= domainParts.length; i++) {
    domain = `${domainParts[domainParts.length - i]}.${domain}`
    attr.domain = domain
    cookies.set(name, data, attr)
    if (cookies.get(name)) {
      return domain
    }
  }
  cookies.set(name, data, options)
  return cookies.get(name)
}

export function save(
  name: string,
  data?: string | object,
  options?: cookies.CookieAttributes,
): string | undefined {
  const value = cookies.get(name)
  if (value) {
    return value
  }
  const domainParts: string[] = removeNaked().split('.')
  const subDomain: any = domainParts[domainParts.length - 1]
  if (domainParts.length === 4 && parseInt(subDomain, 10) == subDomain) {
    return cookies.get(name)
  }

  if (data) {
    setCookie(domainParts, name, options || {}, data)
  }
  return cookies.get(name)
}
