import React from 'react';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Container from "../src/components/Container";
import SavedQuoteList from './components/SavedQuoteList';
import Footer from './components/Footer';
const App = () => {
    return (
        <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" index element={<Container/>}></Route>
        <Route path="/favorites" element={<SavedQuoteList />}/>
        </Routes>
        <Footer />
        </BrowserRouter>
    );
}

export default App;
