# hoist-react-instance-methods

Copies specific methods from a child element to a parent instance. Can be useful in Hight-Order Component.

## Usage

```js
import hoistReactInstanceMethods from 'hoist-react-instance-methods';

hoistReactInstanceMethods(TargetComponent, getElement, methods);

// `getElement` example:
// const getElement = (instance) => instance.refs.app;
```

###### Arguments

1. `TargetComponent` (ReactComponent): Target component to be copied;
2. `getElement` (Function): Get the ref element. The only argument `instance` is the instance of `TargetComponent`. Should return a react element;
3. `methods` ([String]): Specify method names to be copied.

## Installation

```bash
$ npm install hoist-react-instance-methods
```

## License

MIT
