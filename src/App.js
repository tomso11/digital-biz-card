import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';


function App() {
  return (
    <div className = "app">
      <div className="card-container">
        <Header/>
        <MainContent/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
