import styled from "styled-components";

const Cell = styled.td<{ depth: number; disabled?: boolean }>`
  padding-left: ${(props) => `${props.depth * 1.25}rem`};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
  border-block-end: 1px solid var(--border-color);
`;

const Button = styled.button`
  width: fit-content;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }

  transition: all 0.3s ease-in-out;
`;

const CreateButton = styled(Button)`
  color: #7891b2;

  &:disabled {
    opacity: 0.5;
  }
`;

const DeleteButton = styled(Button)`
  color: #df4445;
  padding: 4px;
  opacity: 0;
`;

const Controls = styled.div`
  z-index: 10;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: start;
  width: fit-content;
  margin-left: 10px;
  gap: 3px;
  border-radius: 6px;
  padding: 2px;
  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: var(--hover-background);

    ${DeleteButton} {
      opacity: 1;

      &:disabled {
        opacity: 0.5;
      }
    }
  }
`;

const Node = styled.div<{
  depth: number;
  rowsToParent: number;
}>`
  position: relative;
  z-index: 0;
  display: ${(props) => props.depth === 0 && `none`};

  &::before {
    content: "";
    position: absolute;
    top: 13px;
    transform: translateY(50%);
    left: 3px;
    width: 14px;
    height: 1px;
    background-color: #c6c6c6;
    z-index: -1;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: -14px;
    transform: translate(0, 0);
    left: 3px;
    width: 1px;
    height: calc((${(props) => props.rowsToParent}) * 54px);
    background-color: #c6c6c6;
    z-index: -1;
  }
`;

export { Cell, Button, CreateButton, DeleteButton, Controls, Node };
