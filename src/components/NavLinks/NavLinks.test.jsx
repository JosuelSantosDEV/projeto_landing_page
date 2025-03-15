import { renderTheme } from "../../theme/render-theme";
import { screen } from "@testing-library/react";
import { NavLinks } from ".";

import mock from "./mock";
import { theme } from "../../theme/theme";

describe("<NavLinks />", () => {

    it("Should render links", () => {
        renderTheme(<NavLinks links={mock}/>);
        const tag = screen.getAllByRole("link");
        expect(tag).toHaveLength(mock.length);
    }
    );

    it("Should not render link", () => {
        renderTheme(<NavLinks />);
        const tag = screen.queryAllByRole("link");
        expect(tag).toHaveLength(0);
    }
    );

    it("Should not render link", () => {
        const {debug} = renderTheme(<NavLinks />);
        //debug()
        const tag = screen.getByRole("navigation");
        expect(tag).toHaveStyleRule('flex-flow',"column wrap",{
            media: theme.media.lteMedium
        });
    }
    );


    it("Should match snapshot", () => {
        const {container} = renderTheme(<NavLinks links={mock}/>);
        expect(container.firstChild).toMatchSnapshot();
    }
    );


});