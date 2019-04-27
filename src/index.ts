import { useEffect, useState } from 'react'
import nodeToString from './utilities/nodeToString'
import spawnHeadElement from './utilities/spawnHeadElement'
import setOrRemoveAttribute from './utilities/setOrRemoveAttribute'

export interface TitleProps {
  title?: string
  children?: React.ReactNode
}

export interface MetaProps {
  charset?: string | null | undefined
  content: string
  httpEquiv?: string | null | undefined
  name?: string | null | undefined
  property?: string | null | undefined
}

export interface LinkProps {
  as?: string | null | undefined
  crossorigin?: string | null | undefined
  useCredentials?: string | null | undefined
  href?: string | null | undefined
  hreflang?: string | null | undefined
  media?: string | null | undefined
  rel?: string | null | undefined
  sizes?: string | null | undefined
  title?: string | null | undefined
  type?: string | null | undefined
}

/**
 * React hook to set the document title.
 */

const useTitle = (title: string | null | undefined) => {
  useEffect(() => {
    if (title == null) return
    const oldTitle = document.title
    document.title = title
    return () => {
      document.title = oldTitle
    }
  }, [title])
}

/**
 * React hook to insert a meta tag.
 */

const useMeta = (props: MetaProps) => {
  return useHeadElement(props, 'meta', [
    'charset',
    'content',
    'httpEquiv',
    'name',
    'property'
  ])
}

const useLink = (props: LinkProps) => {
  return useHeadElement(props, 'link', [
    'as',
    'crossorigin',
    'useCredentials',
    'rel',
    'href',
    'hreflang',
    'media',
    'rel',
    'sizes',
    'title',
    'type'
  ])
}

/**
 * React hook to insert an arbitrary head element.
 */

const useHeadElement = (
  props: { [key: string]: any },
  name: string,
  attributes: string[]
) => {
  const [element, setElement] = useState<HTMLElement | null>(null)

  useEffect(() => {
    let el: HTMLElement

    // Spawn the element if it hasn't been yet
    if (!element) {
      el = spawnHeadElement(name)
      setElement(el)
    } else {
      el = element
    }

    // Set element's attributes via
    // set(el, 'content', props.content)
    attributes.forEach((attrib: string) => {
      setOrRemoveAttribute(el, attrib, props[attrib])
    })

    // Cleanup by removing the spawned element
    return () => {
      if (el && el.parentNode) el.parentNode.removeChild(el)
    }
  }, [JSON.stringify(props)])
}

/**
 * Component version of useTitle.
 */

const Title = (props: TitleProps) => {
  if (props.title != null) {
    useTitle(props.title)
  } else {
    useTitle(nodeToString(props.children))
  }
  return null
}

/**
 * Component version of useMeta.
 */

const Meta = (props: MetaProps) => {
  useMeta(props)
  return null
}

/**
 * Component version of useLink.
 */

const Link = (props: LinkProps) => {
  useLink(props)
  return null
}

/*
 * Export
 */

export { useTitle, useMeta, useLink, Title, Meta, Link }
