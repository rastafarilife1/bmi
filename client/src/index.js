import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';
import RoomStore from './store/RoomStore';


export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Context.Provider value={{
		user: new UserStore(),
		rooms: new RoomStore(),
	}}>
		<App />
	</Context.Provider >

);


