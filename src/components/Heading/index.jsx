import P from "prop-types";
import * as Styled from "./styles";

function Heading({children, colorDark = true, as= "h1", size = "medium", uppercase = false}) {
  return (
    <>
      <div >
        <Styled.Title colorDark={colorDark} as={as} size={size} uppercase={uppercase}>
          {children}
        </Styled.Title>
      </div>
    </>
  )
}

export default Heading;

Heading.propTypes = {
  children: P.node.isRequired,
  colorDark: P.bool,
  as: P.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  size: P.oneOf([ "small", "medium", "big", "huge"]),
  uppercase: P.bool,
}