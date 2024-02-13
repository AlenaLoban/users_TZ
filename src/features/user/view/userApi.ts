import { baseApi } from "../../../core/store/api";
import { IUser } from "../../../core/types/userType";
interface IUserById {
  data: IUser;
  support: {};
}

const userApiById = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUserById: build.query<IUserById, string>({
      query: (id) => `/users/${id}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetUserByIdQuery } = userApiById;
