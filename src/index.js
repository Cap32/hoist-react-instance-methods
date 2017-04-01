
export default function hoistReactInstance(getInstance, methods) {
	return (Target) => {
		if (typeof getInstance !== 'function' ||
			typeof Target !== 'string' // don't hoist over string (html) components
		) {

			methods && [].concat(methods).forEach((method) => {
				Target.prototype[method] = function (...args) {
					const element = getInstance(this);
					if (element && element[method]) {
						return element[method](...args);
					}
				};
			});

		}

		return Target;

	};
}
