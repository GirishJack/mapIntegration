import {createStackNavigator,createAppContainer} from 'react-navigation';
import Login from '../Components/Login';
import Register from '../Components/Register';
import Geolocation from '../Components/Geolocation';

const Route= createStackNavigator({

    Login:Login,
    Register:Register,
    Geolocation:Geolocation

},
{
    initialRouteName:'Login'
},
)

const RouterConfig= createAppContainer(Route)

export default RouterConfig;