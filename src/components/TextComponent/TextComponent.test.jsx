import { renderTheme } from "../../theme/render-theme";
import { screen } from "@testing-library/react";
import { TextComponent } from ".";

describe("<TextComponent />", () => {

    it("Should render a text", () => {
        renderTheme(<TextComponent>Texto</TextComponent>);
        const heading = screen.getByText("Texto");
        expect(heading).toBeInTheDocument();
    }
    );

    it("Should match snapshot", () => {
        const {container} = renderTheme(<TextComponent>Texto</TextComponent>);
        expect(container.firstChild).toMatchSnapshot();
    }
    );

});