import { renderTheme } from "../../theme/render-theme";
import { screen } from "@testing-library/react";
import { Menu } from ".";

describe("<Menu />", () => {

    it("Should render", () => {
        renderTheme(<Menu>Texto</Menu>);
        const tag = screen.getByText("Texto");
        expect(tag).toBeInTheDocument();
    }
    );

});