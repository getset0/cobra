import React from "react";
import {
  TableHeader,
  TableRow,
  TableData
} from "./aux";
import Table from "./Table";
import { mount } from "enzyme";

it("renders Table without crashing", () => {
  mount(
    <Table>
      <TableRow>
        <TableHeader>
            header 1
        </TableHeader>
      </TableRow>
      <TableRow>
        <TableData>
            Data 1
        </TableData>
      </TableRow>
      <TableRow>
        <TableData>
            Data 1 l2
        </TableData>
      </TableRow>
    </Table>);
});
