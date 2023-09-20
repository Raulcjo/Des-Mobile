import { registerRootComponent } from 'expo';

import App from './src/App';
//import routes from './src/routes';
//import FormLogin from './src/pages/FormLogin';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately

registerRootComponent(App);
