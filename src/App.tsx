import './App.css'

import { Footer } from './components/partials/Footer/Footer';
import { Header } from './components/partials/Header';
import { MainRoutes } from './MainRoutes';

const App = () => {
  return(
    <>
      <Header />
      <MainRoutes />
      <Footer />
    </>
  );
}

export default App