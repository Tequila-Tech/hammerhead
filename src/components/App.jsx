
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogList from './BlogList';
import BlogDetail from './components/BlogDetail';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/blogs" element={<BlogList />} />
                <Route path="/blog/:id" element={<BlogDetail />} />
            </Routes>
        </Router>
    );
};

export default App;