import styled from 'styled-components'
import colors from '../../styles/colors'

export const CurrentJobBanner = styled.div`
  background-color: ${colors.primaryDark};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 100%;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const Title = styled.p`
  color: ${colors.white};
`

export const JobName = styled.p`
  color: ${colors.white};
`
