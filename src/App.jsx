import "./scss/App.scss";
import Header from "./components/Header/Header";
import Portfolio from "./components/Portfolio/Portfolio";
import Chart from "./components/Chart/Index";
import Trade from "./components/Trade/Index";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <>
      <Header />
      <main>
        <Portfolio />
        <Chart />
        <Trade />
      </main>
      <Footer />
    </>
  );
};

export default App;
