import styled from "styled-components";

export const FormContainer = styled.div`
  max-width: 400px;
  max-height: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f4;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 0px 10px #aaa;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
`;

export const ResultContainer = styled.div`
  margin-top: 20px;
`;

export const ResultItem = styled.div`
  margin: 5px 0;
  font-size: 18px;
  color: black;
`;
export const Formcontainermain = styled.div`
  width: 50%;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
`;

export const Loading = styled.div`
  margin-top: 20px;
  color: #007bff;
`;

export const MainHeader = styled.h2`
  color: red;
  height: 30px;
  background-color: #f5f5dc;
  display: flex;
  justify-content: center;
  align-items: center;
`;
ResultItem.defaultProps = {
  className: "result-item",
};
