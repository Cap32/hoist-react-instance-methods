# hoist-react-instance-methods

[![Build Status](https://travis-ci.org/Cap32/hoist-react-instance-methods.svg?branch=master)](https://travis-ci.org/Cap32/hoist-react-instance-methods)

Copies specific methods from a child instance to a parent instance. Can be useful in Higher Order Components.


## Motivations

It's recommented to use Higher Order Components (HOC) over `mixins` and over `context`

https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750
https://facebook.github.io/react/blog/2016/07/13/mixins-considered-harmful.html
https://twitter.com/dan_abramov/status/749715530454622208/photo/1

But sometimes HOC is burdensome

###### Example

```js
// some fake HOCs
@connectRedux()
@withRouter()
@sthElse()
class MyAwesomeInput extends Component {
  focus() {
    return this.input.focus();
  }

  render() {
    return (
      <label>
        <input ref={(input) => this.input = input} />
      </label>
    );
  }
}

class App extends Component {
  componentDidMount() {

    // WTF!!! This is not an awesome Input!!!
    this.awesomeInput.getWrappedInstance().getWrappedInstance().getWrappedInstance().focus();

  }

  render() {
    return (
      <MyAwesomeInput ref={(input) => this.awesomeInput = input} />
    );
  }
}
```

### With hoist-react-instance-methods 

```js
@hoistReactInstanceMethods(

  // get instance
  (input) => input.getWrappedInstance().getWrappedInstance().getWrappedInstance(),

  // specify method names to be copied
  ['focus']

)
@connectRedux()
@withRouter()
@sthElse()
class MyAwesomeInput extends Component {
  focus() {
    return this.input.focus();
  }

  render() {
    return (
      <div>
        <input ref={(input) => this.input = input} />
      </div>
    );
  }
}

class App extends Component {
  componentDidMount() {

    // Awesome!
    this.awesomeInput.focus();

  }

  render() {
    return (
      <MyAwesomeInput ref={(input) => this.awesomeInput = input} />
    );
  }
}
```


## Usage

```js
import hoistReactInstanceMethods from 'hoist-react-instance-methods';

hoistReactInstanceMethods(getInstance, methods)(TargetComponent);

// `getInstance` example:
// const getInstance = (instance) => instance.refs.app;
```

###### Arguments

1. `getInstance` (Function): Get the ref element. The only argument `instance` is the instance of `TargetComponent`. Should return a component instance
2. `methods` ([String]): Specify method names to be copied


###### Returns

A higher-order React component class


## Installation

```bash
yarn add hoist-react-instance-methods
```


## License

MIT
