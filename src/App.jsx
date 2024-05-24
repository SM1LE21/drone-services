import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from "./style";
import { CustomService, Services1, Services2, About, Clients, CTA, Footer, Navbar, Hero, DroneRegulations, FAQ } from "./components";
import './i18n';

const App = () => (
  <Router>
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <Routes>
        <Route path="/" element={
          <>
            <div className={`bg-primary ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                <Hero />
              </div>
            </div>

            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`}>
                <div className="mt-20">
                  <Services1 />
                </div>
                <CustomService />
                <Services2 />
                <DroneRegulations />
                <About />
                <CTA />
                <Footer />
              </div>
            </div>
          </>
        } />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </div>
  </Router>
);

export default App;
