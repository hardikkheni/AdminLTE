import _ from 'lodash';
import { AnyAction } from 'redux';

export interface IThemeState {
	classes: Array<String>;
}

const themeState: IThemeState = {
	classes: ['hold-transition'],
};

export const THEME_ACTION = {
	TOGGLE_SIDEBAR: 'theme.toggle_sidebar',
};

const reducer = (state = themeState, action: AnyAction) => {
	const chunks: Array<string> = action.type.split('.');
	const module = chunks.shift();
	const type = chunks.join('.');
	if (module !== 'theme') {
		return state;
	}
	switch (type) {
		case THEME_ACTION.TOGGLE_SIDEBAR.split('.')[1]:
			const i = state.classes.indexOf('sidebar-collapse');
			const t = state.classes;
			if (i !== -1) {
				t.splice(i, 1);
			} else {
				t.push('sidebar-collapse');
			}
			_.set(state, 'classes', [...t]);
			break;
		default:
			if (_.has(state, type)) {
				_.set(state, type, action.payload);
			}
	}
	return state;
};

export default reducer;
