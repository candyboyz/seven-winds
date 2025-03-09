import { addRow, removeRow, updateRow } from "@/shared/utils";
import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    createEntityUsingPost: build.mutation<
      CreateEntityUsingPostApiResponse,
      CreateEntityUsingPostApiArg
    >({
      query: () => ({ url: `/v1/outlay-rows/entity/create`, method: "POST" }),
    }),
    createRowInEntityUsingPost: build.mutation<
      CreateRowInEntityUsingPostApiResponse,
      CreateRowInEntityUsingPostApiArg
    >({
      query: (queryArg) => ({
        url: `/v1/outlay-rows/entity/${queryArg.eId}/row/create`,
        method: "POST",
        body: queryArg.outlayRowRequest,
      }),
      onQueryStarted: async (args, { dispatch, queryFulfilled }) => {
        const { data } = await queryFulfilled;

        dispatch(
          injectedRtkApi.util.updateQueryData(
            "getTreeRowsUsingGet",
            { eId: args.eId },
            (draft) => {
              if (!data.current) return;

              addRow(draft, data.current, args.outlayRowRequest.parentId);
            },
          ),
        );
      },
    }),
    getTreeRowsUsingGet: build.query<
      GetTreeRowsUsingGetApiResponse,
      GetTreeRowsUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/v1/outlay-rows/entity/${queryArg.eId}/row/list`,
      }),
    }),
    deleteRowUsingDelete: build.mutation<
      DeleteRowUsingDeleteApiResponse,
      DeleteRowUsingDeleteApiArg
    >({
      query: (queryArg) => ({
        url: `/v1/outlay-rows/entity/${queryArg.eId}/row/${queryArg.rId}/delete`,
        method: "DELETE",
      }),
      onQueryStarted: async (args, { dispatch, queryFulfilled }) => {
        await queryFulfilled;

        dispatch(
          injectedRtkApi.util.updateQueryData(
            "getTreeRowsUsingGet",
            { eId: args.eId },
            (draft) => {
              removeRow(draft, args.rId);
            },
          ),
        );
      },
    }),
    updateRowUsingPost: build.mutation<
      UpdateRowUsingPostApiResponse,
      UpdateRowUsingPostApiArg
    >({
      query: (queryArg) => ({
        url: `/v1/outlay-rows/entity/${queryArg.eId}/row/${queryArg.rId}/update`,
        method: "POST",
        body: queryArg.outlayRowUpdateRequest,
      }),
      onQueryStarted: async (args, { dispatch, queryFulfilled }) => {
        const { data } = await queryFulfilled;

        dispatch(
          injectedRtkApi.util.updateQueryData(
            "getTreeRowsUsingGet",
            { eId: args.eId },
            (draft) => {
              if (!data.current) return;

              updateRow(draft, args.rId, data.current);
            },
          ),
        );
      },
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as outlayStringApi };
export type CreateEntityUsingPostApiResponse =
  /** status 200 OK */ EntityResponse;
export type CreateEntityUsingPostApiArg = void;
export type CreateRowInEntityUsingPostApiResponse =
  /** status 200 OK */ RecalculatedRows;
export type CreateRowInEntityUsingPostApiArg = {
  /** eID */
  eId: number;
  outlayRowRequest: OutlayRowRequest;
};
export type GetTreeRowsUsingGetApiResponse =
  /** status 200 OK */ TreeResponse[];
export type GetTreeRowsUsingGetApiArg = {
  /** eID */
  eId: number;
};
export type DeleteRowUsingDeleteApiResponse =
  /** status 200 OK */ RecalculatedRows;
export type DeleteRowUsingDeleteApiArg = {
  /** eID */
  eId: number;
  /** rID */
  rId: number;
};
export type UpdateRowUsingPostApiResponse =
  /** status 200 OK */ RecalculatedRows;
export type UpdateRowUsingPostApiArg = {
  /** eID */
  eId: number;
  /** rID */
  rId: number;
  outlayRowUpdateRequest: OutlayRowUpdateRequest;
};
export type EntityResponse = {
  id?: number;
  rowName?: string;
};
export type RowResponse = {
  equipmentCosts?: number;
  estimatedProfit?: number;
  id?: number;
  machineOperatorSalary?: number;
  mainCosts?: number;
  materials?: number;
  mimExploitation?: number;
  overheads?: number;
  rowName?: string;
  salary?: number;
  supportCosts?: number;
  total?: number;
};
export type RecalculatedRows = {
  changed?: RowResponse[];
  current?: RowResponse;
};
export type OutlayRowRequest = {
  equipmentCosts?: number;
  estimatedProfit?: number;
  machineOperatorSalary?: number;
  mainCosts?: number;
  materials?: number;
  mimExploitation?: number;
  overheads?: number;
  parentId?: number;
  rowName?: string;
  salary?: number;
  supportCosts?: number;
};
export type TreeResponse = {
  child?: TreeResponse[];
  equipmentCosts?: number;
  estimatedProfit?: number;
  id?: number;
  machineOperatorSalary?: number;
  mainCosts?: number;
  materials?: number;
  mimExploitation?: number;
  overheads?: number;
  rowName?: string;
  salary?: number;
  supportCosts?: number;
  total?: number;
};
export type OutlayRowUpdateRequest = {
  equipmentCosts?: number;
  estimatedProfit?: number;
  machineOperatorSalary?: number;
  mainCosts?: number;
  materials?: number;
  mimExploitation?: number;
  overheads?: number;
  rowName?: string;
  salary?: number;
  supportCosts?: number;
};
export const {
  useCreateEntityUsingPostMutation,
  useCreateRowInEntityUsingPostMutation,
  useGetTreeRowsUsingGetQuery,
  useDeleteRowUsingDeleteMutation,
  useUpdateRowUsingPostMutation,
} = injectedRtkApi;
