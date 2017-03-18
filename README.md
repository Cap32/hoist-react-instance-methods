# hoist-react-instance-methods

[![Build Status](https://travis-ci.org/Cap32/hoist-react-instance-methods.svg?branch=master)](https://travis-ci.org/Cap32/hoist-react-instance-methods)

Copies specific methods from a child instance to a parent instance. Can be useful in Hight-Order Component.

## Usage

```js
import hoistReactInstanceMethods from 'hoist-react-instance-methods';

hoistReactInstanceMethods(TargetComponent, getInstance, methods);

// `getInstance` example:
// const getInstance = (instance) => instance.refs.app;
```

###### Arguments

1. `TargetComponent` (ReactComponent): Target component to be copied;
2. `getInstance` (Function): Get the ref element. The only argument `instance` is the instance of `TargetComponent`. Should return a react element;
3. `methods` ([String]): Specify method names to be copied.

## Installation

```bash
$ npm install hoist-react-instance-methods
```

## License

MIT
