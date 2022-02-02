import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './modules/rootReducer';
import App from './App';

// store를 만들 때는 createStore()메소드가 사용되며 reducer가 인수로 사용됨
const store = createStore(rootReducer);
 
// ReactDOM, render(첫 번째 인수, 두 번째 인수)
// 첫 번째 인수는 App.js으로 정의하고 있는 App 컴포넌트를 지정하고 있음
// 두 번째 인수는 root라는 ID의 요소를 지정함
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
