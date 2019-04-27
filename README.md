<p align='center'>
<br><img src='https://user-images.githubusercontent.com/74385/56846007-04051500-68fc-11e9-9d40-a6f85a1943e5.png' width='160'><br>
</p>

<h1 align='center'>
react-meta-elements
</h1>

<p align='center'>
Sets document title and meta tags using React elements or hooks. A lightweight alternative to React Helmet.
</p>

<p align='center'>
<img src='https://img.shields.io/badge/build-pending-lightgrey.svg'>
</p>

<br>

## Usage

This package exposes `Title`, `Meta` and `Link` components. Use them in the same way you would use their respective HTML elements; they will automatically be mounted onto `document.head`.

```js
import { Title, Meta } from 'react-head'

const MyComponent = () => {
  return (
    <>
      <Title>Hello world!</Title>
      <Meta name='description' content='This is a description' />
    </>
  )
}
```

## More examples

```js
<Title>title here</Title>
<Title title='title here' />

<Title>title here</Title>
<Meta name='description' content='This is a description' />
<Meta property='og:description' content='This is a description' />

<Link rel='canonical' content='https://google.com/' />
```

## Prior art

react-meta-elements is similar to other packages, but in general, it tries to keep the API as simple as possible, without the need for "wrapper" elements.

<table>
<tr>
<th>react-meta-elements</th>
<th>react-helmet</th>
<th>react-head</th>
<th>react-meta-tags</th>
</tr>
<tr></tr>

<tr>
<td valign='top'>

<!-- prettier-ignore -->
```html
<Title>title here</Title>

<Meta
  name='description'
  content='This is a description'
/>
```

</td>
<td valign='top'>

<!-- prettier-ignore -->
```html
<Helmet>
  <title>title here</title>
  <meta
    name='description'
    content='This is a description'
  />
</Helmet>
```

Alternate syntax:

<!-- prettier-ignore -->
```html
<Helmet
  title='title here'
  meta={[
    { name: 'description',
      content: 'This is a description' }
  ]}
/>
```

</td>
<td valign='top'>

<!-- prettier-ignore -->
```js
<HeadProvider>
  <Title>title here</Title>
  <Meta
    name='description'
    content='This is a description'
  />
</HeadProvider>
```

</td>
<td valign='top'>

<!-- prettier-ignore -->
```js
<HeadProvider headTags={[]}>
  <MetaTags>
    <title>title here</title>
    <meta
      name='description'
      content='This is a description'
    />
  </MetaTags>
</HeadProvider>
```

</td>
</tr>
</table>

- [Helmet]: Helmet is a full-featured head tag manager. At time of writing, you need to use v6 (beta) to make it work in a project with React hooks, which is incompatible with the stable v5.

  Unfortunately, this incompatibility makes Helmet not viable for use in reusable packages that may be embedded into projects that may use different versions of Helmet.

- [react-head]: This package follows a very similar API to react-head's. However, react-head requires that you place your entire application into a provider component (`HeadProvider`), while this package doesn't require that.

[helmet]: https://yarn.pm/react-helmet
[react-head]: https://yarn.pm/react-head
[penpad]: https://github.com/rstacruz/penpad

## Thanks

**react-meta-elements** © 2019, Rico Sta. Cruz. Released under the [MIT] License.<br>
Authored and maintained by Rico Sta. Cruz with help from contributors ([list][contributors]).

> [ricostacruz.com](http://ricostacruz.com) &nbsp;&middot;&nbsp;
> GitHub [@rstacruz](https://github.com/rstacruz) &nbsp;&middot;&nbsp;
> Twitter [@rstacruz](https://twitter.com/rstacruz)

[![](https://img.shields.io/github/followers/rstacruz.svg?style=social&label=@rstacruz)](https://github.com/rstacruz) &nbsp;
[![](https://img.shields.io/twitter/follow/rstacruz.svg?style=social&label=@rstacruz)](https://twitter.com/rstacruz)

[mit]: http://mit-license.org/
[contributors]: http://github.com/rstacruz/react-meta-elements/contributors
