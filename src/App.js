
import './App.css';
import Header from './components/Header';
import SliderImages from './components/SliderImages';
import CardsSlider from './components/CardsSlider';
import Premiers from './components/Premiers';
import Footer from './components/Footer';
//import AllMovies from './components/AllMovies';
import AllMoviesFetch from './components/AllMoviesFetch';
import SingleMovie from './components/SingleMovie';
import SingleMovieFetch from './components/SingleMovieFetch';
import Registration from './components/Registration';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>

          <Route exact path="/">
            <SliderImages />
            <CardsSlider />
            <Premiers />
          </Route>

          <Route exact path="/movies">
            <AllMoviesFetch />
          </Route>

          {<Route exact path="/movies/:movid">
            <SingleMovieFetch />
          </Route>}
          <Route exact path="/register">
            <Registration/>
          </Route>

        </Switch>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
