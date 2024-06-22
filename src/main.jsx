import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import BlogPage from './components/BlogPage/BlogPage.jsx'
import Haqida from './components/Haqida.jsx'
import Serivce from './components/Serivce.jsx'
import Car from './components/Car.jsx'
import Port from './components/Port.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/about" element={<Haqida />} />
        <Route path="/ser" element={<Serivce />} />
        <Route path="/port" element={<Port />} />
        <Route path="/car" element={<Car />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
