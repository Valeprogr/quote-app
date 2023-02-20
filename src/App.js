import React from 'react';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Container from "../src/components/Container";
import SavedQuoteList from './components/SavedQuoteList';

const App = () => {
    return (
        <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<Container/>}></Route>
        <Route path="/favorites" element={<SavedQuoteList />}/>
        </Routes>
        </BrowserRouter>
    );
}

export default App;
