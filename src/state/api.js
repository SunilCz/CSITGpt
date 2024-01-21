import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: ["dashboard", "chats", "dataingest", "subjects", "models"],
  endpoints: (build) => ({
    getDash: build.query({
      query: (id) => `dashboard/user/${id}`,
      providesTags: ["dashboard"],
    }),

    getChats: build.query({
      query: () => "chat",
      providesTags: ["chats"],
    }),

    getDataIngest: build.query({
      query: () => "dataingest",
      providesTags: ["dataingest"],
    }),

    getSubjects: build.query({
      query: () => "subjects",
      providesTags: ["subjects"],
    }),

    getModels: build.query({
      query: () => "models",
      providesTags: ["models"],
    }),
  }),
});

export const {
  useGetDashQuery,
  useGetChatsQuery,
  useGetDataIngestQuery,
  useGetSubjectsQuery,
  useGetModelsQuery,
} = api;
