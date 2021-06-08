import _ from 'lodash';
import { AnyAction } from 'redux';

export interface IThemeState {
	classes: Array<String>;
}

const themeState: IThemeState = {
	classes: ['hold-transition'],
};

const reducer = (state = themeState, action: AnyAction) => {
	const chunks: Array<string> = action.type.split('.');
	const module = chunks.shift();
	const type = chunks.join('.');
	if (module !== 'theme') {
		return state;
	}
	switch (type) {
		default:
			if (_.has(state, type)) {
				_.set(state, type, action.payload);
			}
	}
	return state;
};

export default reducer;
