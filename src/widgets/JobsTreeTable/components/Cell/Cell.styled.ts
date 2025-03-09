import styled from "styled-components";

const Cell = styled.td`
  padding-inline-start: 12px;
  padding-inline-end: 12px;
  border-block-end: 1px solid #414144;
  text-align: start;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  letter-spacing: 0.1;
  color: #a1a1aa;
  overflow-wrap: break-word;
  box-sizing: content-box;
  height: 60px;
`;

const Input = styled.input`
  min-height: 8px;
  width: 100%;
  outline: 1px solid #414144;
  padding: 8px 10px;
  color: #71717a;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  letter-spacing: 0.1px;
  border-radius: 6px;
  background: transparent;
  border: none;

  &::placeholder {
    color: #71717a;
  }
`;

export { Cell, Input };
