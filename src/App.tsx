import './App.css';
import Header from './components/Header';
import ProfileContainer from './components/ProfileContainer';
import { BrowserRouter, Route } from 'react-router-dom'

// TODO: [DONE] - Set profile layout 
// TODO: [DONE] - Set API files
// TODO: [] - Show content in the browser
// TODO: [] - Style it

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
            <Route path='/' exact component={ProfileContainer}/>
            <Route path='/:username' component={ProfileContainer}/>
      </BrowserRouter>  
    </div>
  );
}

export default App;
