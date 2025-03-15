import { renderTheme } from "../../theme/render-theme";
import { screen } from "@testing-library/react";
import { LogoLink } from ".";

describe("<LogoLink />", () => {

    it("Should render text logo", () => {
        renderTheme(<LogoLink text="Texto" link="#target" />);
        const tag = screen.getByRole("heading", {name:"Texto"});
        expect(tag).toBeInTheDocument();
    }
    );



    it("Should render link logo", () => {
        renderTheme(<LogoLink text="Texto" link="#target" />);
        const tag = screen.getByRole("heading", {name:"Texto"});
        expect(tag.firstChild).toHaveAttribute("href", "#target");
    }
    );

    it("Should render image logo", () => {
        renderTheme(<LogoLink text="Texto" srcImg="assets/images/logo.png" link="#target" />);
        const tag = screen.getByRole("img", {name: "Texto"});
        expect(tag).toHaveAttribute("src","assets/images/logo.png");
    }
    );

    it("Should match snapshot", () => {
        renderTheme(<LogoLink text="Texto" link="#target" srcImg="assets/images/logo.png" />);
        const tag = screen.getByRole("heading", {name:"Texto"});
        expect(tag).toMatchSnapshot();
    }
    );

});