import styles from "./style";
import { CustomService, Services1, Services2, About, Clients, CTA, Footer, Navbar, Hero, DroneRegulations } from "./components";
import './i18n';

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        {/*<Stats />   Used to display stats below the hero section*/}
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
  </div>
);

export default App;
