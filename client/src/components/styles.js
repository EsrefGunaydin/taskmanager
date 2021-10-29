import styled from "styled-components";

const PRIMARYCOLOR = "#282c34";

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
  background: #fff7eb;
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
  font-family: "Courier New";
  letter-spacing: 0;
  text-align: left;
  color: ${PRIMARYCOLOR};
`;

export const Card = styled.div`
  width: 580px;
  min-height: 200px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  margin: 0 auto;
  margin-top: 200px;
`;

export const Span = styled.span`
  border: none;
  color: ${PRIMARYCOLOR};
  font-family: "Courier New";
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  box-shadow: 0 0 5px 5px red;
`;

export const Container = styled.div`
  min-width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em;
  padding-left: 20px;
  margin: 10px;
  background: white;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;
