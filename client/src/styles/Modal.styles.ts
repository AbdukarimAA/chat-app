import styled from "styled-components";

export const ModalBlock = styled.div`
  position: absolute;
  width: 300px;
  height: 250px;
  background-color: rgba(92, 180, 236, 0.9);
  bottom: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const CloseIcon = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  right: 0;
`

export const BtnsBlock = styled.div`
  margin-top: 12px;

  button {
    margin: 0 5px;
    border: 0;
    border-radius: 8px;
    padding: 5px;
    font-weight: bold;

    &:hover {
      background: #c2d2f5;
      cursor: pointer;
    }
  }
`
