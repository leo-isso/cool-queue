import styled from 'styled-components'
import colors from '../../styles/colors'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 20px 0;
`
export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`
export const Input = styled.input`
  border: 1px solid ${props => props.hasError ? colors.danger : colors.grey};
  border-radius: 5px;
  font-size: 1em;
  padding: 5px;

  &:focus {
    outline: none;
    border: 1px solid ${colors.primary};
  }
`
export const Error = styled.span`
  color: ${colors.danger};
  margin-top: 3px;
  font-size: 0.9em;
`
