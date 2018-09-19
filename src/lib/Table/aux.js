import styled from "styled-components";

export const TableHeader = styled.th`
  padding: 6px;
  padding-top: 14px;
  padding-bottom: 14px;
  text-align: left;
  font-weight: 600;
  font-size: 1.25em;
  color: ${props => props.theme.primaryColor}
`;

export const TableRow = styled.tr`
  border-top: 1px solid ${props => props.theme.lightGrayColor};
  &:first-child {
    border: 0;
  }
  &:last-child {
    border-bottom: 1px solid ${props => props.theme.lightGrayColor};
  }
`;

export const TableData = styled.td`
  padding: 12px 6px;
`;
