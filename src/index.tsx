import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/demo/Hello';
import HelloClass from './components/demo/HelloClass'
import HelloHoc from './components/demo/HelloHOC'
import HelloHooks from './components/demo/HelloHooks'

ReactDOM.render(
    // <HelloClass name="ts" />,
    // <HelloHoc name="ts" loading={false} />,
    <HelloHooks name="ts"/>,
    document.getElementById('root')
);


