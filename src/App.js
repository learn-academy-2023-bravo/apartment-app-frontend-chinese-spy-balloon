import Footer from "./components/Footer";
import Header from "./components/Header"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import NotFound from "./pages/NotFound"
import ApartmentEdit from "./pages/ApartmentEdit"
import ApartmentNew from "./pages/ApartmentNew"
import ApartmentIndex from "./pages/ApartmentIndex"
import ApartmentProtectedIndex from "./pages/ApartmentProtectedIndex"
import ApartmentShow from "./pages/ApartmentShow"


const App = () => {

  
  return (
    <>

      <Footer />
      <Header />
      <Home />
      <SignIn />
      <SignUp />
      <NotFound />
      <ApartmentEdit />
      <ApartmentNew />
      <ApartmentIndex />
      <ApartmentProtectedIndex />
      <ApartmentShow />

    </>
  );
}

export default App;
