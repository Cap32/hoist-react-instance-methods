
export default function hoistReactInstance(Target, getElement, methods) {

	// don't hoist over string (html) components
	if (typeof Target !== 'string') {

		methods && [].concat(methods).forEach((method) => {
			Target.prototype[method] = function (...args) {
				const element = getElement(this);
				if (element && element[method]) {
					return element[method](...args);
				}
			};
		});

	}

	return Target;
}
