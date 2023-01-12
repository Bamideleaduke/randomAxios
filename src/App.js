import './App.css';
import FirstRequest from './component/firstRequest/FirstRequest';
import PostRequest from './component/postRequest/PostRequest';
import RandomJoke from './component/randomJoke/RandomJoke';
import Title from './component/title/Title';

function App() {
  return (
    <div className="App">
      <Title />
      <FirstRequest />
      <RandomJoke />
      <PostRequest />
    </div>
  );
}

export default App;
