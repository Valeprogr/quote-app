import React from 'react';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import Container from "../src/components/Container";
import SavedQuote from './components/SavedQuote';

const App = () => {
    return (
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Container/>}></Route>
        <Route path="/favorites" element={<SavedQuote />}/>
        </Routes>
        </BrowserRouter>
    );
}

export default App;
