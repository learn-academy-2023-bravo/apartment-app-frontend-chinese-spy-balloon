import {render, screen} from "@testing-library/react"
import ApartmentShow from "../pages/ApartmentShow"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"



describe("<ApartmentShow />", () => {
    it("renders without crashing", () => {
        render(
            <BrowserRouter>
            <ApartmentShow />
            </BrowserRouter>
        )
        const indexLink = screen.getByText(/Apartment/i)
        expect(indexLink).toBeInTheDocument()
    })
})