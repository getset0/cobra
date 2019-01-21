import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withBackgrounds } from "@storybook/addon-backgrounds";
import { backgroundOptions } from "./util";
import { Table, TableRow, TableHeader, TableData } from "../lib";

storiesOf("Table", module)
  .addDecorator(withInfo)
  .addDecorator(withBackgrounds(backgroundOptions))
  .add("Table", () => (
    <Table>
      <TableRow>
        <TableHeader>header 1</TableHeader>
        <TableHeader>header 2</TableHeader>
        <TableHeader>header 3</TableHeader>
      </TableRow>
      <TableRow>
        <TableData>Data 1</TableData>
        <TableData>Data 2</TableData>
        <TableData>Data 3</TableData>
      </TableRow>
      <TableRow>
        <TableData>Data 1 l2</TableData>
        <TableData>Data 2 l2</TableData>
        <TableData>Data 3 l2</TableData>
      </TableRow>
    </Table>
  ));
