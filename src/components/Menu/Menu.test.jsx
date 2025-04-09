import { renderTheme } from "../../theme/render-theme";
import { fireEvent, render, screen } from "@testing-library/react";
import { Menu } from ".";

import linksMock from "../NavLinks/mock"
import { theme } from "../../theme/theme";

const logoData = {
    text: "Logo",
    link: "#target"
}

describe("<Menu />", () => {

    it("Should render", () => {
        const {container} = renderTheme(<Menu links={linksMock} logoData={logoData} />);

        const tag = screen.getByText("Logo");
        expect(tag).toBeInTheDocument();

        expect(
            screen.getByRole("navigation", {name: "Main menu"})
        ).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    it("Should render menu moblile and button for open and close the menu", () => {
        const {container} = renderTheme(<Menu links={linksMock} logoData={logoData} />);

        const button  = screen.getByLabelText("Open/Close menu");
        const menuContainer = button.nextSibling;

        expect(button).toHaveStyleRule("display", "none")

        expect(button).toHaveStyleRule("display", "grid", {
            media: theme.media.lteMedium
        })

        expect(menuContainer).toHaveStyleRule("opacity", "0", {
            media: theme.media.lteMedium
        })

        expect(screen.getByLabelText("Open menu")).toBeInTheDocument();

        fireEvent.click(button)

        expect(menuContainer).toHaveStyleRule("opacity", "1", {
            media: theme.media.lteMedium
        })

        expect(screen.getByLabelText("Close menu")).toBeInTheDocument();

        fireEvent.click(menuContainer)

        expect(menuContainer).toHaveStyleRule("opacity", "0", {
            media: theme.media.lteMedium
        })

        expect(screen.getByLabelText("Open menu")).toBeInTheDocument();

    });

    it("Should not render links", () => {
        const {container} = renderTheme(<Menu logoData={logoData} />)

        expect(screen.getByRole("navigation", {name: "Main menu"}).firstChild).not.toBeInTheDocument()

        expect(container).toMatchSnapshot()
    })

});