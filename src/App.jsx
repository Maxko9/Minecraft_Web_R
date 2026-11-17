import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Crossroads from './pages/Crossroad';
import History from './pages/History';
import Skins from './pages/Skins';
import Backgrounds from './pages/Backgrounds';

export default function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Crossroads />} />
                <Route path="/history" element={<History />} />
                <Route path="/skins" element={<Skins />} />
                <Route path="/backgrounds" element={<Backgrounds />} />
            </Routes>
        </Router>
    );
}