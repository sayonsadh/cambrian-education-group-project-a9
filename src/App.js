import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Review from './components/Review/Review';
import NotFound from './components/NotFound/NotFound';
import SingleServices from './components/SingleService/SingleServices';

function App() {
  return (
    <div className="App">

      {/* react router  */}
      <Router>
        <Header></Header>
        <Switch>

          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/service'>
            <SingleServices></SingleServices>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/review'> 
            <Review></Review>
          </Route>
          <Route path='/notfound'>
            <NotFound></NotFound>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

