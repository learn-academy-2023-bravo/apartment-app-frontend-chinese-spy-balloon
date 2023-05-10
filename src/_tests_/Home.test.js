import {render, screen} from "@testing-library/react"
import Home from "../pages/Home"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"



describe("<Home />", () => {
    it("renders without crashing", () => {
        render(
            <BrowserRouter>
            <Home />
            </BrowserRouter>
        )
        const indexLink = screen.getByText(/Home/i)
        expect(indexLink).toBeInTheDocument()
    })
})