/**
 * Create a `<meta>` element and append it to the head.
 * @private
 */

const spawnHeadElement = (name: string) => {
  // Create the element
  const el = document.createElement(name)

  // Append into <head>
  const heads = document.getElementsByTagName('head')
  const head = heads && heads[0]
  if (head) head.appendChild(el)

  return el
}

export default spawnHeadElement
