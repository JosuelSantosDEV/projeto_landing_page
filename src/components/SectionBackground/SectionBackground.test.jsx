import { renderTheme } from "../../theme/render-theme";
import { screen } from "@testing-library/react";
import { SectionBackground } from ".";
import { theme } from "../../theme/theme";

describe("<SectionBackground />", () => {

    it("Should render with background dark", () => {
        const {container} = renderTheme(<SectionBackground background={true} >Texto</SectionBackground>);
        const tag = screen.getByText("Texto");
        expect(tag).toBeInTheDocument();
        expect(container.firstChild).toHaveStyle({
            "background": theme.colors.primaryColor
        });
        expect(container).toMatchSnapshot();
    }
    );

    it("Should render with background ligth", () => {
        const {container} = renderTheme(<SectionBackground><h1>Texto</h1></SectionBackground>);
        const tag = screen.getByRole("heading", {name: "Texto"});
        expect(tag).toBeInTheDocument();
        expect(container.firstChild).toHaveStyle({
            "background": theme.colors.white
        });
        expect(container).toMatchSnapshot();
    }
    );

});