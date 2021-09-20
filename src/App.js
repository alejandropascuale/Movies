import SideBar from './components/SideBar';
import TopBar from './components/TopBar';
import ContentRowTop from './components/ContentRowTop';
import Footer from './components/Footer';
import './assets/css/app.css';
import './assets/css/fonts.css';



function App() {
  return (
    <div id="wrapper">
      < SideBar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          < TopBar />
          < ContentRowTop />
        </div>
        < Footer />
      </div>
    </div>
  );
}

export default App;
