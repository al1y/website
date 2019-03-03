import * as React from 'react';
import {render} from 'react-dom';
import App from './App';

const RootElementId = 'root';
let root = document.createElement('div');
root.id = RootElementId;
root.setAttribute('height', '100%');
document.body.appendChild(root);
document.title = 'ally';

render(
    <App />,
    document.getElementById(RootElementId)
);