import { renderTheme } from "../../theme/render-theme";
import { screen } from "@testing-library/react";
import { Footer } from ".";

describe("<Footer />", () => {

    it("Should render", () => {
        const {container} = renderTheme(<Footer html={"<h1>Texto</h1>"} />);
        const tag = screen.getByRole("heading", {name: "Texto"});
        expect(tag).toBeInTheDocument();
        expect(container).toMatchSnapshot();
    }
    );

});