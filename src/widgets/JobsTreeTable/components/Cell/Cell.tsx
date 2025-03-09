import { TreeResponse } from "@/shared/store";
import { type Cell, type Row } from "@tanstack/react-table";
import { useCallback } from "react";
import { Controls } from "../Controls";
import { Controller, useFormContext } from "react-hook-form";
import { numberFormatter } from "@/shared/utils";
import * as S from "./Cell.styled";

interface CellProps<T> {
  cell: Cell<T, unknown>;
  row: Row<T>;
  index: number;
  parentIndex?: number;
  editedRowId?: number;
  isDisabled?: boolean;
  handleCreateEmptyRow: (parentId: number) => void;
  handleDeleteRow: (rid: number) => Promise<void>;
}

export function Cell({
  cell,
  row,
  index,
  parentIndex,
  editedRowId,
  isDisabled,
  handleCreateEmptyRow,
  handleDeleteRow,
}: CellProps<TreeResponse>) {
  const cid = cell.column.id;
  const rid = row.original.id;
  const initialValue = cell.getValue() as number | string;
  const isEditing = editedRowId === rid || rid === 0;
  const valueType = typeof initialValue === "number" ? "number" : "text";

  const form = useFormContext();

  const renderControls = useCallback(
    () => (
      <Controls
        row={cell.row}
        key={`controls-${cell.row.id}`}
        index={index}
        parentIndex={parentIndex}
        handleCreateEmptyRow={handleCreateEmptyRow}
        handleDeleteRow={handleDeleteRow}
        isDisabled={isDisabled}
      />
    ),
    [
      cell.row,
      handleCreateEmptyRow,
      handleDeleteRow,
      index,
      isDisabled,
      parentIndex,
    ],
  );

  const renderEditableField = useCallback(() => {
    return (
      <Controller
        name={cid}
        control={form.control}
        defaultValue={initialValue}
        render={({ field }) => {
          return <S.Input {...field} />;
        }}
      />
    );
  }, [cid, form.control, initialValue]);

  const renderCellContent = useCallback(() => {
    return isEditing
      ? renderEditableField()
      : valueType === "number"
        ? numberFormatter.format(Number(initialValue))
        : initialValue;
  }, [initialValue, isEditing, renderEditableField, valueType]);

  if (cid === "id") return renderControls();

  return <S.Cell key={`${cell.id}-${rid}`}>{renderCellContent()}</S.Cell>;
}
