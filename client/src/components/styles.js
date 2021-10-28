import styled from "styled-components";

export const Wrapper = styled.section`
  width: 600px;
  margin: 0 auto;
`;

export const Input = styled.input`
  width: 360px;
  font-size: 18px;
  font-family: "Ubuntu Mono";
  padding: 15px;
  margin: 10px;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: gray;
    padding-left: 20px;
  }
`;

export const Button = styled.button`
  background-color: #008cba;
  border: none;
  color: white;
  padding: 15px 28px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

export const Title = styled.h1`
  font-size: 18px;
  font-family: "Ubuntu Mono";
  text-align: left;
  color: #282c34;
  padding: 0.5em;
  padding-left: 20px;
  background: white;
  box-shadow: 2px 3px 3px 2px #adadad;
`;
