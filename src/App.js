import './App.css';
import { Routes, Route } from 'react-router-dom';

import { NavBar } from './components/NavBar/NavBar';
import { HomePage } from './views/HomePage/HomePage';
import { AuthPage } from './views/AuthPage/AuthPage';
import { ChatPage } from './views/ChatPage/ChatPage';

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" restricted element={<HomePage />} exact="true"></Route>
        <Route path="/auth" restricted element={<AuthPage />}></Route>
        <Route path="/chat" restricted element={<ChatPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
