import NavBar from "./components/NavBar";
import CallToAction from "./components/CallToAction";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="content w-full flex-grow xl:mx-auto xl:max-w-screen-xl">
        <CallToAction />
        <Testimonial />
      </main>
      <Footer />
    </div>
  );
}

export default App;
