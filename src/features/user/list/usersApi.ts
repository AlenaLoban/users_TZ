import { baseApi } from "../../../core/store/api";
import { IUser } from "../../../core/types/userType";

interface IData {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IUser[];
  support: never;
}

const PER_PAGE = 4;

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<IData, { page: number }>({
      query: ({ page }) => `/users?page=1&per_page=${page * PER_PAGE}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetUsersQuery } = userApi;
