import React from "react";
import styled from "styled-components";

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const CustomTable = ({ children }) =>
  <Table>
    <tbody>
      {children}
    </tbody>
  </Table>;

export default CustomTable;
