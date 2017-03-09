
import React, { Component } from 'react';
import assert from 'assert';
import jsdom from 'jsdom';
import { mount } from 'enzyme';
import hoistReactInstanceMethods from '../src';

describe('hoist-react-instance-methods', function () {
	beforeEach(() => {
		global.document = jsdom.jsdom(
			'<!doctype html><html><body></body></html>'
		);
		if (typeof window === 'undefined') {
			global.window = global.document.defaultView;
			global.navigator = global.window.navigator;
		}
	});

	it('basic', function () {
		class Child extends Component {
			test() {
				return true;
			}

			render() {
				return null;
			}
		}

		class App extends Component {
			render() {
				return (
					<Child ref="child" />
				);
			}
		}

		const getElement = (instance) => instance.refs.child;
		hoistReactInstanceMethods(App, getElement, ['test']);

		class Root extends Component {
			componentDidMount() {
				assert(this.refs.app.test());
			}

			render() {
				return (
					<App ref="app" />
				);
			}
		}

		mount(<Root />);
	});
});
