import { renderTheme } from "../../theme/render-theme";
import { screen } from "@testing-library/react";
import { SectionContainer } from ".";

describe("<SectionContainer />", () => {

    it("Should render", () => {
        renderTheme(<SectionContainer>Texto</SectionContainer>);
        const tag = screen.getByText("Texto");
        expect(tag).toBeInTheDocument();
    }
    );

});