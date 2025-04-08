import { renderTheme } from "../../theme/render-theme";
import { screen } from "@testing-library/react";
import { SectionContainer } from ".";

describe("<SectionContainer />", () => {

    it("Should render content", () => {
        const {container} = renderTheme(<SectionContainer><h1>Texto</h1></SectionContainer>);
        const tag = screen.getByRole("heading", {name: "Texto"});
        expect(tag).toBeInTheDocument();
        expect(container).toMatchSnapshot();
    }
    );


});