import { render, screen } from '@testing-library/react'
import Header from '../components/Header'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

describe("<Header/>", () => {
    it("renders without error", () => {
        render (
            <BrowserRouter>
                <Header/>
            </BrowserRouter>
        )
        const indexLink = screen.getByText(/Sign In/i)
        expect(indexLink).toBeInTheDocument()
    })

    it("Header has clickable links", () => {
        render (
            <BrowserRouter>
                <Header/>
            </BrowserRouter>
        )
        userEvent.click(screen.getByRole('heading', {
            name: /Sign Up/i
        }))
        expect(screen.getByText("Sign Up")).toBeInTheDocument()
    })
})