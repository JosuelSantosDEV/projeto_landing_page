import { screen } from "@testing-library/react"
import { renderTheme } from "../../theme/render-theme"
import Home from "./Home"
import { theme } from "../../theme/theme";


test("renders learn react link", () => {
    const {debug} = renderTheme(<Home/>);
    const headingContainer = screen.getByRole("heading", {name: "Hello World :)"}).parentElement;
    //debug();
    
})