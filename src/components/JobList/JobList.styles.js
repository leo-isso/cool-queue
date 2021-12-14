import styled from 'styled-components'
import colors from '../../styles/colors'

export const Wrapper = styled.div`
  width: 100%;
  margin: 25px 0;
`
export const Empty = styled.div`
  background-color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 100%;
`

export const EmptyText = styled.h2`
  color: ${colors.grey};
  font-size: 1.5rem;
`
