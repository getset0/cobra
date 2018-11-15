import styled from "styled-components";
import PropTypes from "prop-types";
import { theme } from "../constants";

export const TableHeader = styled.th`
  padding: 6px;
  padding-top: 14px;
  padding-bottom: 14px;
  text-align: left;
  font-weight: 600;
  font-size: 1.25em;
  color: ${props => props.theme.primaryColor};
`;

TableHeader.propTypes = {
  theme: PropTypes.object
};

TableHeader.defaultProps = {
  theme: theme
};

export const TableRow = styled.tr`
  border-top: 1px solid ${props => props.theme.lightGrayColor};
  &:first-child {
    border: 0;
  }
  &:last-child {
    border-bottom: 1px solid ${props => props.theme.lightGrayColor};
  }
`;

TableRow.propTypes = {
  theme: PropTypes.object
};

TableRow.defaultProps = {
  theme: theme
};

export const TableData = styled.td`
  padding: 12px 6px;
  text-align: left;
`;
