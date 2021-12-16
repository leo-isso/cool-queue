import styled from 'styled-components'
import colors from '../../styles/colors'

export const Background = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
`

export const ModalBase = styled.div`
  border-radius: 15px;
  position: relative;
  background-color:${colors.white};
  overflow: hidden;
  max-width: 500px;
  width: 80%;
`

export const Close = styled.div`
  cursor: pointer;
  color: ${colors.primary};
  font-size: 1.5em;
  position: absolute;
  right: 20px;
  top: 20px;
`
export const Header = styled.div`
  border-bottom: 1px solid ${colors.grey};
  background-color: ${colors.lightGrey};
  color: ${colors.primary};
  height: 55px;
  font-size: 1.5em;
  font-weight: bold;
  padding: 20px;
`
