import {render, screen} from "@testing-library/react"
import ApartmentIndex from "../pages/ApartmentIndex"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"



describe("<ApartmentIndex />", () => {
    it("renders without crashing", () => {
        render(
            <BrowserRouter>
            <ApartmentIndex />
            </BrowserRouter>
        )
        const indexLink = screen.getByText(/Apartment/i)
        expect(indexLink).toBeInTheDocument()
    })
})