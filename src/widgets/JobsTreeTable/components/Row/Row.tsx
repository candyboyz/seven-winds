import { TreeResponse } from "@/shared/store";
import { type Row } from "@tanstack/react-table";
import { Cell } from "../Cell";

interface RowProps<T> {
  row: Row<T>;
  index: number;
  parentIndex?: number;
  isDisabled?: boolean;
  editedRowId?: number;
  handleCreateEmptyRow: (parentId: number) => void;
  handleEditedRow: (rowId: number, rowData: TreeResponse) => void;
  handleDeleteRow: (rid: number) => Promise<void>;
}

export function Row({
  row,
  index,
  parentIndex,
  isDisabled,
  editedRowId,
  handleCreateEmptyRow,
  handleEditedRow,
  handleDeleteRow,
}: RowProps<TreeResponse>) {
  const rid = row.original.id;

  return (
    <tr
      onDoubleClick={() => {
        if (rid) handleEditedRow(rid, row.original);
      }}>
      {row.getVisibleCells().map((cell) => {
        return (
          <Cell
            cell={cell}
            row={row}
            index={index}
            parentIndex={parentIndex}
            key={cell.id}
            handleCreateEmptyRow={handleCreateEmptyRow}
            handleDeleteRow={handleDeleteRow}
            editedRowId={editedRowId}
            isDisabled={isDisabled}
          />
        );
      })}
    </tr>
  );
}
