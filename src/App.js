import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
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

      
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ApartmentIndex" element={<ApartmentIndex />} />
          <Route path="/ApartmentProtectedIndex" element={<ApartmentProtectedIndex />} />
          <Route path="/ApartmentShow" element={<ApartmentShow />} />
          <Route path="/ApartmentNew" element={<ApartmentNew />} />
          <Route path="/ApartmentEdit" element={<ApartmentEdit />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
