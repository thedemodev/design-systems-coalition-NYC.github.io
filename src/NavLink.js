import styled from 'styled-components'
import {
  space,
  color,
  fontSize,
  fontWeight
} from 'styled-system'
import { Link } from 'react-router-dom'

const NavLink = styled.a`
  text-decoration: none;
  display: inline-block;
  ${space}
  ${color}
  ${fontSize}
  ${fontWeight}
`

NavLink.defaultProps = {
  py: 2,
  mx: 2,
  fontWeight: 700,
  color: 'inherit',
}

NavLink.Router = NavLink.withComponent(Link)

export default NavLink
