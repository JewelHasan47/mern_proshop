import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';


function App() {
    return (
        <BrowserRouter>
            <Header />
            <main className={ 'py-3' }>
                <Container>
                    <Routes>
                        <Route exact path={ '/' } element={ <HomeScreen /> } />
                        <Route path={ '/product/:id' } element={ <ProductScreen /> } />
                    </Routes>
                </Container>
            </main>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
