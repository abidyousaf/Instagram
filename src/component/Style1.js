import styled from "styled-components";
export const ErrorWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  & a {
    text-decoration: none;
    font-size: 14px;
    color: #55aa29;
    padding: 17px 77px;
    border: 1px solid #55aa29;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    border-radius: 3px;
    display: block;
    margin: 20px 0;
    width: max-content;
    background-color: transparent;
    outline: 0;
  }
`;