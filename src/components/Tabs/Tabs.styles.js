import styled from 'styled-components'
import colors from '../../styles/colors'

export const Background = styled.div`
  background-color: ${colors.primaryDark};
  width: 100%;
`

export const Tabs = styled.div`
  display: flex;
  height: 45px;
  justify-content: left;
  width: 100%;
`

export const Tab = styled.div`
  align-items: center;
  background-color: ${(props) =>
    props.isSelected ? colors.white : colors.primaryDark};
  border-radius: 5px 5px 0 0;
  cursor: pointer;
  color: ${(props) =>
    props.isSelected ? colors.primaryDark : colors.white};
  display: flex;
  justify-content: center;
  height: 45px;
  width: 100px;

  &:hover {
    background-color: ${colors.primary};
    color: ${colors.white};
  }
`
