import { renderTheme } from "../../theme/render-theme";
import { screen } from "@testing-library/react";
import { SectionBackground } from ".";

describe("<SectionBackground />", () => {

    it("Should render", () => {
        renderTheme(<SectionBackground>Texto</SectionBackground>);
        const tag = screen.getByText("Texto");
        expect(tag).toBeInTheDocument();
    }
    );

});