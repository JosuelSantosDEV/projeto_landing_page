import { renderTheme } from "../../theme/render-theme";
import { screen } from "@testing-library/react";
import { GridContent } from ".";
import mock from "./mock"

describe("<GridContent />", () => {

    it("Should render grid container", () => {
        const {container} = renderTheme(<GridContent {...mock} />);
        expect(container).toMatchSnapshot()
    }
    );

    it("Should render grid container with background false", () => {
        const {container} = renderTheme(<GridContent {...mock} background={undefined} />);
        expect(container).toMatchSnapshot()
    }
    );


});