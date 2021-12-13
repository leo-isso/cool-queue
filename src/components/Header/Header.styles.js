import styledComponents from 'styled-components'
import colors from '../../styles/colors'

export const Header = styledComponents.div`
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  background-color: ${colors.primary};
  height: 3rem;
  width: 100%;
`

export const Wrapper = styledComponents.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const Brand = styledComponents.div`
  color: ${colors.white};
  font-size: 1.5rem;
  fontweight: bold;
`

export const Nav = styledComponents.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
`
export const NavItem = styledComponents.div`
  color: ${colors.white};
  align-items: center;
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  margin-left: 15px;
`
