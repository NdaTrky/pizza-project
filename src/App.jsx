import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './layout/Header';
import Order from './layout/Order';
import Success from './layout/Success';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/order" element={<Order />} />
        <Route path="/success" element={<Success />} />  
      </Routes>
    </Router>
  );
}

export default App;