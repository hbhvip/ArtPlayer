# artplayer-react

React Component for Artplayer, It is recommended to package itself according to actual business needs.

## Demo

[Checkout the demo](https://codesandbox.io/s/n74859y9rl) from Codesandbox

## Install

Install with `npm`

```
$ npm install artplayer-react
```

Or install with `yarn`

```
$ yarn add artplayer-react
```

## Usage

```js
import ArtplayerComponent from 'artplayer-react';
import 'artplayer-react/dist/artplayer-react.css';

// ...
<ArtplayerComponent
    option={
        {
            // option, no 'container' property required
        }
    }
    getInstance={ins => console.log(ins)} // get the instance
/>;
```

## License

MIT © [Harvey Zack](https://sleepy.im/)
