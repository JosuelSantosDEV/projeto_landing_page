
import { screen } from "@testing-library/react";
import Heading from ".";
import { renderTheme } from "../../theme/render-theme";
import { theme } from "../../theme/theme";
import { ThemeProvider } from "styled-components";

describe("<Heading />", () => {

    it("Should render with default values", () => {
        renderTheme(<Heading>Texto</Heading>);
        const heading = screen.getByRole("heading", {name: "Texto"});
        expect(heading).toHaveStyle({
            color: theme.colors.primaryColor,
            'font-size': theme.fonts.sizes.large,
            'text-transform': 'none'
        })
    });

    it("Should render with white color", () => {
        renderTheme(<Heading colorDark={false} >Texto</Heading>);
        const heading = screen.getByRole("heading", {name: "Texto"});
        expect(heading).toHaveStyle({
            color: theme.colors.white,
        })
    });

    it("Should render correct heading sizes", () => {
        const {rerender} = renderTheme(<Heading size={"small"} >Texto</Heading>);
        const heading = screen.getByRole("heading", {name: "Texto"});
        expect(heading).toHaveStyle({
            'font-size': theme.fonts.sizes.medium,
        });

        rerender(<ThemeProvider theme={theme} ><Heading size="medium" >Texto</Heading></ThemeProvider>);
        expect(screen.getByRole("heading", {name: "Texto"})).toHaveStyle({
            'font-size': theme.fonts.sizes.large,
        });

        rerender(<ThemeProvider theme={theme} ><Heading size="big" >Texto</Heading></ThemeProvider>);
        expect(screen.getByRole("heading", {name: "Texto"})).toHaveStyle({
            'font-size': theme.fonts.sizes.xlarge,
        });

        rerender(<ThemeProvider theme={theme} ><Heading size="huge" >Texto</Heading></ThemeProvider>);
        expect(screen.getByRole("heading", {name: "Texto"})).toHaveStyle({
            'font-size': theme.fonts.sizes.huge,
        });

    });

    it("Should render correct font-size when using mobile", () => {
        renderTheme(<Heading size={"huge"} >Texto</Heading>);

        expect(screen.getByRole("heading", {name: "Texto"})).toHaveStyleRule('font-size', theme.fonts.sizes.xlarge, {
            media: theme.media.lteMedium
        });
    
    });

    it("Should render with uppercase letters", () => {
        renderTheme(<Heading uppercase={true} >Texto</Heading>);

        expect(screen.getByRole("heading", {name: "Texto"})).toHaveStyle({
            'text-transform': 'uppercase',
        });
    
    });

    it("Should render correct heading element", () => {
        const { container} = renderTheme(<Heading as="h6" >Texto</Heading>);
 
        const h6 = container.querySelector("h6");

        expect(h6.tagName.toLowerCase()).toBe("h6");
    
    });


});