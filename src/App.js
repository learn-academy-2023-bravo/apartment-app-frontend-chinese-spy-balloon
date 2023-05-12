import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from 'react'
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

  const [apartments, setApartments] = useState([])


  useEffect(() => {
    readApartment()
  }, [])

  const readApartment = () => {
    fetch('http://localhost:3000/apartments')
    .then(response => response.json())
    .then(payload => {
      setApartments(payload)
    })
    .catch(error => console.log("apartment read errors", error))
  }

  const createApartment = (createdApartment) => {
    fetch('http://localhost:3000/apartments', {
      body: JSON.stringify(createdApartment),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => response.json())
    .then(() => readApartment())
    .catch(error => console.log("Create apartment errors: ", error))
  }
 
  const updateApartment = (selectedApartment, id) => {
    fetch(`http://localhost:3000/apartments/${id}`, {
      body: JSON.stringify(selectedApartment),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then(response => response.json())
    .then(() => readApartment())
    .catch(error => console.log("Updated apartment errors: ", error))
  }


  const signin = (email) => {
    const user = MockUsers.find(user => user.email === email)
    if (!user){
      return console.error('Please enter a correct email')
    }
    setCurrentUser(user)

  }
  
  return (
    <>
      <div className="logo" />
      <Header current_user={currentUser}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn signin={signin} currentUser={currentUser}/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/apartmentedit/:id" element={<ApartmentEdit apartments={apartments} updateApartment={updateApartment}/>} />
        <Route path="/apartmentnew" element={<ApartmentNew  createApartment={createApartment}/>} />
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
