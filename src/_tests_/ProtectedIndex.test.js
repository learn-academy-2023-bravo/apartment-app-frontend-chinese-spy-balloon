import {render, screen} from "@testing-library/react"
import ApartmentProtectedIndex from "../pages/ApartmentProtectedIndex"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"



describe("<ApartmentProtectedIndex />", () => {
    it("renders without crashing", () => {
        render(
            <BrowserRouter>
            <ApartmentProtectedIndex />
            </BrowserRouter>
        )
        const indexLink = screen.getByText(/logged/i)
        expect(indexLink).toBeInTheDocument()
    })
})