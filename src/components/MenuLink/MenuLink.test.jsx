import { renderTheme } from "../../theme/render-theme";
import { screen } from "@testing-library/react";
import { MenuLink } from ".";

describe("<MenuLink />", () => {

    it("Should render a link", () => {
        renderTheme(<MenuLink link="https://localhost" >Texto</MenuLink>);
        const tag = screen.getByRole("link", {name: "Texto"});
        expect(tag).toBeInTheDocument();
    }
    );

    it("Should render open in a new tab", () => {
        renderTheme(<MenuLink link="https://localhost" newTab={true}>Texto</MenuLink>);
        const tag = screen.getByRole("link", {name: "Texto"});
        expect(tag).toHaveAttribute("target", "_blank")
    }
    );

    it("Should render a link with attributs", () => {
        renderTheme(<MenuLink link="https://localhost" >Texto</MenuLink>);
        const tag = screen.getByRole("link", {name: "Texto"});
        expect(tag).toHaveAttribute("target", "_self")
    }
    );

    it("Should a snapshot", () => {
        const {container} = renderTheme(<MenuLink link="https://localhost" newTab={false} >Texto</MenuLink>);
        expect(container).toMatchSnapshot();
    }
    );

});