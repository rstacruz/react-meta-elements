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
    const show = co.getByTestId('button:show')
    act(() => {
      fireEvent.click(show)
    })
    expect(document.title).toEqual('new title')

    // Hide
    const hide = co.getByTestId('button:hide')
    act(() => {
      fireEvent.click(hide)
    })
    expect(document.title).toEqual('previous title')
  })
})
