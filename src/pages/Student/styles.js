import styled from 'styled-components';
import { darken } from 'polished';


export const Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;

`;
export const Content = styled.div`
  background: #fff;
  margin-top: 30px;
  align-items:center;
  border-radius: 4px;
  padding: 30px;
  max-width: 1200px;
  width: 100%;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-content:center;
  margin-top: 30px;
  max-width: 1200px;

  p {
    font-size: 16pt;
    font-weight: bold;
    color: #444444;
    align-items:flex-start

  }

  button{
        margin:5px 0 0;
        height:44px;
        padding: 0 15px;
        font-weight:bold;
        background:#ee4b64;
        color:#fff;
        border:0;
        border-right: 1px solid rgba(0,0,0,0.1);
        border-radius:4px;
        font-size:16px;
        transition: background 0.2s;
        &:hover{
          background:${darken(0.2, '#ee4b64')}
        }
  }
  input {
    background: #ffffff;
    border-color: black;
    border: 0px;
    border-radius: 4px;
    height: 36px;
    padding: 0 15px;
    color: #444444;
    border: 0.8px solid #dddddd;
    margin-left: 15px;
    text-align: center;
    &::placeholder {
      color: #999999;
    }
  }
`;

export const StudentTable = styled.table``;
