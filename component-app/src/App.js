import './App.css';
import { Header } from './HeaderComponent/Header';
import { MainPage } from './MainPage/MainPage';
import { Footer } from './FooterComponent/Footer';
function App() {
  return (

    //Can use react.fragment
    <div className="App">
    <Header></Header>
    <MainPage></MainPage>
    <Footer></Footer>
      
    </div>
  );
}

export default App;
