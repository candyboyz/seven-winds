import {
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { columns } from "./JobsTreeTable.columns";
import { Row } from "./components";
import { getParentIndex } from "@/shared/utils/getParentIndex";
import { useJobsTreeTable } from "./hooks";
import { FormProvider } from "react-hook-form";
import { useRef } from "react";
import { useOnClickOutside } from "@/shared/hooks";
import * as S from "./JobsTreeTable.styled";

export const JobsTreeTable = () => {
  const {
    rows,
    isDisabled,
    handleCreateEmptyRow,
    form,
    onSubmit,
    editedRowId,
    handleEditedRow,
    onBlur,
    onPressEnter,
    handleDeleteRow,
  } = useJobsTreeTable();

  const table = useReactTable({
    data: rows,
    columns,
    state: { expanded: true },
    getCoreRowModel: getCoreRowModel(),
    getSubRows: (row) => row?.child,
    getExpandedRowModel: getExpandedRowModel(),
  });

  const formRef = useRef<HTMLFormElement>(null);

  useOnClickOutside(onBlur, formRef);

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        onKeyDown={onPressEnter}
        ref={formRef}>
        <S.TableContainer>
          <S.Table>
            <S.TableHeader>
              {table.getHeaderGroups().map((headerGroup) => {
                return (
                  <S.TableHeaderRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <S.TableHeaderCell key={header.id}>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                        </S.TableHeaderCell>
                      );
                    })}
                  </S.TableHeaderRow>
                );
              })}
            </S.TableHeader>
            <S.TableBody>
              {table.getRowModel().rows.map((row, index) => {
                return (
                  <Row
                    row={row}
                    index={index}
                    key={row.id}
                    parentIndex={getParentIndex(table, row)}
                    handleCreateEmptyRow={handleCreateEmptyRow}
                    handleEditedRow={handleEditedRow}
                    editedRowId={editedRowId}
                    isDisabled={isDisabled}
                    handleDeleteRow={handleDeleteRow}
                  />
                );
              })}
            </S.TableBody>
          </S.Table>
        </S.TableContainer>
      </form>
    </FormProvider>
  );
};
