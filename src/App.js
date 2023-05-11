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


  const [currentUser, setCurrentUser] = useState(MockUsers[null])

  const [apartments, setApartments] = useState(MockApartments)
 
  const signin = (email) => {
    const user = MockUsers.find(user => user.email === email)
    if (!user){
      return console.error('Please enter a correct email')
    }
    setCurrentUser(user)

  }
  
  return (
    <>

      <Header current_user={currentUser}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn signin={signin} currentUser={currentUser}/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/apartmentedit/:id" element={<ApartmentEdit apartments={apartments}/>} />
        <Route path="/apartmentnew" element={<ApartmentNew />} />
        <Route path="/apartmentindex" element={<ApartmentIndex apartments={apartments}/>} />
        <Route path="*" element={<NotFound />} />
        <Route path="/apartmentprotectedindex" element={<ApartmentProtectedIndex apartments={apartments} current_user={currentUser} />} />
        <Route path="/apartmentshow/:id" element={<ApartmentShow apartments={apartments} current_user={currentUser} />} />

      </Routes>
      <Footer />

    </>
  );
}

export default App;
