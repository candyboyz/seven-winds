import { type TreeResponse } from "@/shared/store";
import { type Row, type Table } from "@tanstack/react-table";

export const getParentIndex = (
  table: Table<TreeResponse>,
  row: Row<TreeResponse>,
) =>
  table
    .getRowModel()
    .flatRows.findIndex(
      (flatRow) => flatRow.getParentRow()?.id === row.getParentRow()?.id,
    );
