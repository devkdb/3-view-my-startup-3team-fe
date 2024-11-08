import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from "./Main.js"
import HomePage from './pages/HomePage/index.jsx';
import AllStartupListPage from './pages/AllStartupListPage/index.jsx';
import ComparePage from './pages/ComparePage/index.jsx';
import CompareStatusPage from './pages/CompareStatusPage/index.jsx';
import InvestStatusPage from './pages/InvestStatusPage/index.jsx';

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<HomePage />} />
          <Route path='all-startup-list' element={<AllStartupListPage />} />
          <Route path='compare' element={<ComparePage />} />
          <Route path='compare-status' element={<CompareStatusPage />} />
          <Route path='invest-status' element={<InvestStatusPage />} />
        </Route >
      </Routes>
    </BrowserRouter>
  );
}

export default App;
