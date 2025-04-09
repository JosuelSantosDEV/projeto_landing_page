import { renderTheme } from "../../theme/render-theme";
import { screen } from "@testing-library/react";
import { GridTwoColumn } from ".";
import mock from "./mock";

describe("<GridTwoColumn />", () => {

    it("Should render grid with two columns grid", () => {
        const {container} = renderTheme(<GridTwoColumn {...mock} ></GridTwoColumn>);
        expect(container).toMatchSnapshot()
    }
    );

});