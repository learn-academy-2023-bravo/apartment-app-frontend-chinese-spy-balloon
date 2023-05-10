import {render, screen} from "@testing-library/react"
import ApartmentNew from "../pages/ApartmentNew"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"



describe("<ApartmentNew />", () => {
    it("renders without crashing", () => {
        render(
            <BrowserRouter>
            <ApartmentNew />
            </BrowserRouter>
        )
        const indexLink = screen.getByText(/Apartment/i)
        expect(indexLink).toBeInTheDocument()
    })
})