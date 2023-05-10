import {render, screen } from "@testing-library/react"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import mockApartment from "../MockApartments"
import ApartmentEdit from "../pages/ApartmentEdit"

describe("<ApartmentEdit />", () => {
    it("renders the new apartment from the updated existing apartment" , () =>{
        render(
            <MemoryRouter initialEntries={['/apartmentedit/1']}>
                <Routes>
                    <Route path='/apartmentedit/:id'
                    element={<ApartmentEdit apartment={mockApartment} />} />
                </Routes>
            </MemoryRouter>
        )
        
    })
})