import React, { useState } from 'react'
import { Title, Meta } from '../src'
import { render, fireEvent, act, cleanup } from 'react-testing-library'

afterEach(cleanup)

const Toggler = ({
  children,
  show
}: {
  children: React.ReactNode
  show?: boolean
}) => {
  const [isVisible, setVisible] = useState(show || false)
  return (
    <div>
      {isVisible ? children : null}
      <button onClick={() => setVisible(false)} data-testid='button:hide'>
        Hide
      </button>
      <button onClick={() => setVisible(true)} data-testid='button:show'>
        show
      </button>
    </div>
  )
}

describe('Title', () => {
  it('works', () => {
    const co = render(<Title title='hello' />)
    expect(document.title).toEqual('hello')
  })

  it('supports children', () => {
    const co = render(<Title>hello</Title>)
    expect(document.title).toEqual('hello')
  })

  it('falls back to old title when unmounted', () => {
    document.title = 'previous title'

    const co = render(
      <Toggler>
        <Title title='new title' />
      </Toggler>
    )

    expect(document.title).toEqual('previous title')

    // Show
    togglerShow(co)
    expect(document.title).toEqual('new title')

    // Hide
    togglerHide(co)
    expect(document.title).toEqual('previous title')
  })
})

describe('Meta', () => {
  it('works', () => {
    const co = render(<Meta name='description' content='hello there' />)

    const meta = document.querySelector('meta[name="description"]')
    if (!meta) throw new Error('meta tag not found')

    const content = meta.getAttribute('content')
    expect(content).toEqual('hello there')
  })

  it('works with http-equiv', () => {
    const co = render(<Meta httpEquiv='refresh' content='6000' />)

    const meta = document.querySelector('meta[http-equiv="refresh"]')
    if (!meta) throw new Error('meta tag not found')

    const content = meta.getAttribute('content')
    expect(content).toEqual('6000')
  })

  it('gets unmounted', () => {
    const co = render(
      <Toggler>
        <Meta name='keywords' content='abcdef' />
      </Toggler>
    )

    togglerShow(co)

    const meta = document.querySelector('meta[name="keywords"]')
    expect(meta).toBeTruthy()

    togglerHide(co)
    const meta2 = document.querySelector('meta[name="keywords"]')
    expect(meta2).toBeFalsy()
  })
})

/*
 * Utilities
 */

function togglerShow(co: any) {
  const show = co.getByTestId('button:show')
  act(() => {
    fireEvent.click(show)
  })
}

function togglerHide(co: any) {
  const hide = co.getByTestId('button:hide')
  act(() => {
    fireEvent.click(hide)
  })
}
