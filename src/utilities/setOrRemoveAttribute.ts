const ALIASES: { [key: string]: string } = {
  httpEquiv: 'http-equiv',
  useCredentials: 'use-credentials'
}

/**
 * If `value` is given, sets an attribute. If it's null'ish, the attribute is removed.
 * @private
 *
 * @example
 *     // set the attribute on:
 *     setOrRemoveAttribute(el, 'name', 'Name goes here')
 *
 *     // removes the attribute on any of these:
 *     setOrRemoveAttribute(el, 'name')
 *     setOrRemoveAttribute(el, 'name', null)
 *     setOrRemoveAttribute(el, 'name', undefined)
 */

const setOrRemoveAttribute = (
  el: HTMLElement,
  name: string,
  value?: string | null | undefined
) => {
  // Normalize the name to account for React-like names (eg, useCredentials)
  const attrib = ALIASES[name] || name

  if (value != null) {
    el.setAttribute(attrib, value)
  } else {
    el.removeAttribute(attrib)
  }
}

export default setOrRemoveAttribute
