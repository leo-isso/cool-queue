import styled from 'styled-components'
import colors from '../../styles/colors'

export const Button = styled.button`
  align-items: center;
  background-color: ${(props) =>
    !props.reverse ? colors.primary : colors.white};
  border: 1px solid ${colors.primary};
  border-radius: 4px;
  color: ${(props) => (!props.reverse ? colors.white : colors.primary)};
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-weight: 600;
  justify-content: center;
  padding: 10px 20px;
  margin: 10px;

  &:disabled {
    background-color: ${colors.gray};
    border: 1px solid ${colors.gray};
    color: ${colors.lightGrey};
  }

  &:hover {
    background-color: ${(props) =>
      !props.reverse ? colors.primaryDark : colors.white};
    border: 1px solid ${colors.primaryDark};
    color: ${(props) => (!props.reverse ? colors.white : colors.primaryDark)};
  }
`
