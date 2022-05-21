import { render } from 'react-dom';

import App from 'src/components/App';

const target = document.getElementById('root');
const rootReactElement = <App />;

render(rootReactElement, target);
