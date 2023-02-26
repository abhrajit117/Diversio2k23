import './App.css';
import Header from './components/header/header.jsx';
import Profile from './components/Profile/profile.jsx';
// import Feed from './components/Feed/feed.jsx';
import Explore from './components/Explore/Explore.jsx';
import Chat from './components/Chat/chat';
// import Post from './components/Post/post.jsx';
import Inchat from './components/Inchat/Inchat';
// import { BrowserRouter as router, Route, Router, Switch } from 'react-router-dom';

function Chats() {
    return (
        <div className='screen '>
            <Header />
            <div className='flex'>
                <div className='flex-none w-1/6 mx-3 ...'>    <Profile />                 </div>
                <div className='flex-2 w-3/6 '>   <div id="phase1">  <Inchat /></div> </div>
                <div className='flex-1 w-1/6 ml-8 mr-5 rightPannel' >    <Explore /> <Chat />   </div>
            </div>

        </div>
    );
}

export default Chats;
