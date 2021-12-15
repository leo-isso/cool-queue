import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 10px auto;
  width: 80%;
`

export const Text = styled.p`
  margin: 5px;

  &::first-of-type {
    margin-top: 0;
  }

  &::last-of-type {
    margin-bottom: 0;
  }
`
export const Buttons = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 10px auto;
  width: 100%;
`
