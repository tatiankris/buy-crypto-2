import React from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import CurrencyPage from './CurrencyPage/CurrencyPage';
import PortfolioModal from './PortfolioModal/PortfolioModal';
import { withContainerProvider } from '../app/providers/with-providers';
import AddCurrencyModal from './AddCurrencyModal/AddCurrencyModal';

export const MAIN = 'main';

function Routing() {
  const location = useLocation();
  const background = location.state && location.state.background;
  const navigate = useNavigate();
  const handleClose = () => {
    navigate(-1);
  };

  return (
    <div>
      <Routes location={background || location}>
        <Route path="/" element={<Navigate to={'currencies'} />} />
        <Route path="currencies" element={<MainPage />} />
        <Route path={'currencies/:id'} element={<CurrencyPage />} />
      </Routes>
      {background && (
        <Routes>
          <Route path={`portfolio`} element={<PortfolioModal handleClose={handleClose} />} />
          <Route path={`currencies/add`} element={<AddCurrencyModal handleClose={handleClose} />} />
          <Route
            path={`currencies/:id/add`}
            element={<AddCurrencyModal handleClose={handleClose} />}
          />
        </Routes>
      )}
    </div>
  );
}

export default Routing;
