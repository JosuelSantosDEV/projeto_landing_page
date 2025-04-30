import { renderTheme } from "../../theme/render-theme";
import { screen } from "@testing-library/react";
import { GoTop } from ".";

describe("<GoTop />", () => {

    it("Should render a go to top buttom", () => {
        const {container} = renderTheme(<GoTop/>);
        const tag = screen.getByLabelText("Go to top");
        expect(tag).toBeInTheDocument();
        expect(tag).toHaveAttribute("href", "#")
        expect(container).toMatchSnapshot()
    }
    );

});