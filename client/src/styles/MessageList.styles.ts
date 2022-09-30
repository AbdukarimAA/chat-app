import styled from "styled-components";

export const MessageListBlock = styled.div`
  background-color: #fffdfd;
  width: 90%;
  margin: 20px auto;
  height: 80%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: flex-end;
  @media screen and (min-width: 516px) {
    margin-bottom: 100px;
  }
`

export const MessageLists = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
  overflow: auto;
  
  ::-webkit-scrollbar {
    background-color: #fff;
    width: 1px;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #000;
  }
`

export const MessageHandle = styled.div`
  background-color: #9ec7f8;
 
  margin: 10px;
  padding: 5px 12px;
  border-radius: 12px;
  width: fit-content;
  @media screen and (max-width: 650px) {
    margin-bottom: 100px;
  }
`

export const Msg = styled.div`
`

export const Date = styled.span`
  right: 0;
  font-size: 10px;
`

export const MessageBlock = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: end;
`