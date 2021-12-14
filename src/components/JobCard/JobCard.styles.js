import styled from 'styled-components'
import colors from '../../styles/colors'

export const Card = styled.div`
  background-color: ${colors.white};
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  height: 150px;
  margin-bottom: 20px;
  width: 100%;

  &::last-of-type {
    margin-bottom: 0;
  }
`

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  width: 100%;
`

export const Data = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
`

export const DataText = styled.p`
  color: ${colors.primaryDark};
  margin: 10px 0;
`

export const Icon = styled.div`
  cursor: pointer;
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 2em;
`
