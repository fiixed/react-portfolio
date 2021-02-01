import './App.css';
import { Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components/Home';
import Resume from './components/Resume';
import Projects from './components/Projects'

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path='/' component={Home} />
      <Route path='/resume' component={Resume} />
      <Route path='/projects' component={Projects} />
    </>
  );
}

export default App;
