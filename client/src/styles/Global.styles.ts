import styled from "styled-components";

export const GlobalTemplate = styled.div`
  background-color: #2b2a2a;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ChatTemplate = styled.div`
  background-color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 375px;
  height: 812px;
  border-radius: 50px;
  overflow: hidden;
`

export const TemplateBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 9px;
  position: absolute;
  bottom: 0;
`

export const BorderBottom = styled.div`
  background-color: #000;
  bottom: 0;
  width: 150px;
  height: 4px;
  border-radius: 30px;
`
