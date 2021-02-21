import { ChatEngine } from 'react-chat-engine';

import './App.css';
import ChatFeed from './components /ChatFeed';
import LoginForm from './components /LoginForm';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />
    
    return (
        <ChatEngine 
            height="100vh"
            projectID="b9211a43-a1b4-4128-a790-ce664c43f040"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
};

export default App;