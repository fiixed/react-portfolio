import './App.css';
import { Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components/Home';
import Resume from './components/Resume';
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path='/' component={Home} />
      <Route path='/resume' component={Resume} />
      <Route path='/projects' component={Projects} />
      <Route path='/contact' component={Contact} />
    </>
  );
}

export default App;
