import styled from 'styled-components'
import colors from '../../styles/colors'

export const Button = styled.button`
  ${props => console.log(props)}
  align-items: center;
  background-color: ${(props) => props.variant.standard.backgroundColor};
  border: 1px solid ${props => props.variant.standard.borderColor};
  border-radius: 4px;
  color: ${(props) => props.variant.standard.color};
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-weight: 600;
  justify-content: center;
  padding: 10px 20px;
  margin: 0 10px;

  &:disabled {
    background-color: ${colors.gray};
    border: 1px solid ${colors.gray};
    color: ${colors.lightGrey};
  }

  &:hover {
    background-color: ${(props) => props.variant.onHover.backgroundColor};
    border: 1px solid ${(props) => props.variant.onHover.borderColor};
    color: ${(props) => (props.variant.onHover.color)};
  }
`
