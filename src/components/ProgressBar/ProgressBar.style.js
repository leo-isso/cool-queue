import styled from 'styled-components'
import colors from '../../styles/colors'

export const Bar = styled.div`
  background-color: ${colors.white};
  border-radius: 5px;
  height: 15px;
  margin: 10px 0;
  overflow: hidden;
  width: 100%;
`
export const CurrentProgress = styled.div`
  background-color: ${colors.success};
  height: 15px;
  width: ${(props) => props.progress}%;
`
