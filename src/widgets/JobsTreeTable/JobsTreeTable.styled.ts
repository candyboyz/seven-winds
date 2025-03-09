import styled from "styled-components";

const TableContainer = styled.div`
  width: 100%;
  overflow: auto;
  position: relative;
`;

const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  border-spacing: 0;
  border-collapse: separate;
`;

const TableHeader = styled.thead`
  position: sticky;
  top: 0;
  z-index: 1;
`;

const TableHeaderRow = styled.tr`
  height: 30px;
`;

const TableHeaderCell = styled.th`
  padding-inline-start: 12px;
  padding-inline-end: 12px;
  text-align: start;
  border-block-end: 1px solid #414144;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  letter-spacing: 0.1;
  color: #a1a1aa;
  overflow-wrap: break-word;
  box-sizing: content-box;
`;

const TableBody = styled.tbody`
  border-spacing: 0;
  border-collapse: separate;
`;

export {
  TableContainer,
  Table,
  TableBody,
  TableHeaderRow,
  TableHeaderCell,
  TableHeader,
};
