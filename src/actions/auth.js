import axios from 'axios'
import {
	LOGIN_SUCCESS,
	LOGOUT,
	SET_IS_AUTHENTICATED
} from './types';

// Test
export const test = () => async dispatch => {
	const response = await axios.post('/api/game/test', "test")
	console.log('response=> ', response.data)

	dispatch({
		type: LOGIN_SUCCESS
	})
}

// Login User
export const logout = () => async dispatch => {
	localStorage.removeItem('auth')
	localStorage.removeItem('userInfo')
	localStorage.removeItem('jwtToken')

	dispatch({
		type: LOGOUT,
		payload: false
	});
};

export const setIsAuthenticated = (user) => async dispatch => {
	let stringUser = user.replace(/&#34;/g, '"')
	let jsonUser = JSON.parse(stringUser)
	console.log("stringuser", stringUser)
	console.log("parsedUser", jsonUser)
	
	localStorage.setItem('auth', true)
	localStorage.setItem('userInfo', stringUser)
	
	dispatch({
		type: SET_IS_AUTHENTICATED,
		payload: jsonUser
	});
};
// Logout
export const login = () => ({ type: LOGOUT });

