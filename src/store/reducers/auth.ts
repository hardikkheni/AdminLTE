import _ from 'lodash';
import { AnyAction } from 'redux';

export interface IAuthState {
	user?: {
		name: string;
		username: string;
		age: number;
		email: string;
	} | null;
}

const authState: IAuthState = {
	user: null,
};

const reducer = (state = authState, action: AnyAction) => {
	const chunks: Array<string> = action.type.split('.');
	const module = chunks.shift();
	const type = chunks.join('.');
	if (module !== 'auth') {
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
