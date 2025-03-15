import { renderTheme } from "../../theme/render-theme";
import { screen } from "@testing-library/react";
import { Dummy } from ".";

describe("<Dummy />", () => {

    it("Should render", () => {
        renderTheme(<Dummy>Texto</Dummy>);
        const tag = screen.getByText("Texto");
        expect(tag).toBeInTheDocument();
    }
    );

});