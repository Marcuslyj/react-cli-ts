import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

// import Hello from './components/demo/Hello';
// import HelloClass from './components/demo/HelloClass'
// import HelloHoc from './components/demo/HelloHOC'
// import HelloHooks from './components/demo/HelloHooks'
import Root from './routers'
import store from './redux/store'

ReactDOM.render(
    // <HelloClass name="ts" />,
    // <HelloHoc name="ts" loading={false} />,
    // <HelloHooks name="ts"/>,
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById('root')
);


