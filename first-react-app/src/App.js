import react from 'react';
import './App.css';
import { Header } from './HeaderComponent/Header';
import { Footer } from './FooterComponent/Footer';
function App() {
    // This function will generate component in react 

    return (
        // JSX Code should be return
        // React.fragment removes unnecessory parent
        <div className='App'>
            <Header></Header>
            <Footer></Footer>
        </div>
    );
}

export default App;