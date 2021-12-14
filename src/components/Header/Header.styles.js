import styled from 'styled-components'
import colors from '../../styles/colors'

export const Header = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  background-color: ${colors.primary};
  height: 3rem;
  width: 100%;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const Brand = styled.div`
  cursor: pointer;
  color: ${colors.white};
  font-size: 1.5rem;
  font-weight: bold;
`

export const Nav = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
`
export const NavItem = styled.div`
  cursor: pointer;
  color: ${colors.white};
  align-items: center;
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  margin-left: 20px;

  &:hover {
    color: ${colors.lightGrey};
  }

  &::first-of-type {
    margin-left: 0;
  }
`
export const NavItemText = styled.span`
  margin-left: 5px;
  font-size: 1rem;
`
