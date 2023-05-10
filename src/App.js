import { Routes, Route } from "react-router-dom"
import { useState } from 'react'
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
import MockUsers from "./MockUsers.js"
import MockApartments from "./MockApartments.js"


const App = () => {

  const [currentUser, setCurrentUser] = useState(MockUsers[0])
  const [apartments, setApartments] = useState(MockApartments)
  
  return (
    <>

      <Header current_user={currentUser}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/apartmentedit" element={<ApartmentEdit />} />
        <Route path="/apartmentnew" element={<ApartmentNew />} />
        <Route path="/apartmentindex" element={<ApartmentIndex apartments={apartments}/>} />
        <Route path="*" element={<NotFound />} />
        <Route path="/apartmentprotectionindex" element={<ApartmentProtectedIndex apartments={apartments} current_user={currentUser} />} />
        <Route path="/apartmentshow/:id" element={<ApartmentShow apartments={apartments} />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
