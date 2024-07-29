import { baseApi } from "@/redux/api/baseApi";

const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // ! for adding to cart
    addToCart: builder.mutation({
      query: (payload) => {
        return {
          url: "/cart/add-cart",
          method: "POST",
          body: payload,
        };
      },
    }),

    // ! get all cart data
    getCart: builder.query({
      query: () => {
        return {
          url: "/cart/get-cart",
          method: "GET",
        };
      },
    }),

    // ! add cart quantity
    addCartQuantity: builder.mutation({
      query: (payload: { pid: string; oquantity: number }) => {
        return {
          url: "/cart/increase-quantity",
          method: "PATCH",
          body: payload,
        };
      },
    }),

    // ! decrease cart quantity
    decreaseCartQuantity: builder.mutation({
      query: (payload: { pid: string }) => {
        return {
          url: "/cart/decrease-quantity",
          method: "PATCH",
          body: payload,
        };
      },
    }),

    // ! delete cart item
    deleteCartQuantity: builder.mutation({
      query: (payload: { pid: string }) => {
        return {
          url: "/cart/delete-cart",
          method: "PATCH",
          body: payload,
        };
      },
    }),

    //
  }),
});

//
export const {
  useAddToCartMutation,
  useGetCartQuery,
  useAddCartQuantityMutation,
  useDecreaseCartQuantityMutation,
  useDeleteCartQuantityMutation,
} = cartApi;
