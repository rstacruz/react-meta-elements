const nodeToString = (children: React.ReactNode): string => {
  if (typeof children === 'string') {
    return children
  } else if (Array.isArray(children)) {
    return children.map(nodeToString).join('')
  } else {
    console.warn('react-meta-elements: Encountered unknown element, ignoring.')
    return ''
  }
}

export default nodeToString
