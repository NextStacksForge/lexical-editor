import { describe, it, expect } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import Counter from "@/components/button-conter"

describe("Counter", () => {
  it("should increment when the button is clicked", async () => {
    render(<Counter />)

    const incrementButton = screen.getByRole("button", { name: /increment/i })
    const countDisplay = screen.getByText(/count:/i)

    expect(countDisplay).toHaveTextContent("Count: 0")

    await fireEvent.click(incrementButton)

    expect(countDisplay).toHaveTextContent("Count: 1")
  })
})
