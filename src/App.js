
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import { Route, Routes} from 'react-router-dom';
import store from './redux/store';


const App = (props) => {

 

  return (
    
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path = '/profile'  element= {<Profile profilePage={props.state.profilePage} 
            dispatch = {props.dispatch}/>}/>
            <Route path = '/dialogs'   element = {<Dialogs store = {props.store}/>}/>
            <Route path = '/news' element = {<News/>}/>
            <Route path = '/music' element = {<Music/>}/>
            <Route path = '/settings' element = {<Settings/>}/>
          </Routes>
        </div>
      </div>);
}

export default App;
