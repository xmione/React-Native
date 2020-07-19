// Import the screens
import Main from './components/Main';
import Chat from './components/Chat';
// Import React Navigation
import { createAppContainer } from 'react-navigation'
import { createStackNavigator} from 'react-navigation-stack'
// Create the navigator
const navigator = createStackNavigator({
  Main: { screen: Main },
  Chat: { screen: Chat },
});

const App = createAppContainer(navigator);
// Export it as the root component
export default App;