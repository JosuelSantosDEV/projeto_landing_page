import { renderTheme } from "../../theme/render-theme";
import { screen } from "@testing-library/react";
import { GridImage } from ".";

import mock from "./mock";

describe("<GridImage />", () => {

    it("Should render with background", () => {
        const {container} = renderTheme(<GridImage {...mock}></GridImage>);
        
        expect(container).toMatchSnapshot();
    }
    );

    it("Should render without background", () => {
        const {container} = renderTheme(<GridImage {...mock} background={undefined} ></GridImage>);
        
        expect(container).toMatchSnapshot();
    }
    );

});