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
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`

export const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`

export const OptionsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`

export const Title = styled.h2`
  color: ${colors.white};
`

export const Text = styled.p`
  color: ${colors.white};
  margin: 5px 0;

  &::first-of-type {
    margin-top: 10px;
  }

  &::last-of-type {
    margin-top: 10px;
  }
`
