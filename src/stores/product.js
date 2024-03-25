import {defineStore} from "pinia";
import {api} from "@/boot/axios.js";

export const useProductStore = defineStore({
    id: 'product',
    state: () => ({
        loading : false,
        products: [],
        pagination: {},
        currentPaginate: 1,
        product: {}
    }),
    getters: {

    },
    actions: {
        async getProducts (filter) {
            try {
                this.loading = true

                let params = new URLSearchParams(filter)

                let url = `products?${params.toString()}`

                let response = await api.get(url)

                if (response.status === 200) {
                    this.products = response.data.data
                    this.pagination = response.data.meta
                }
            } catch (e) {

            } finally {
                this.loading = false
            }
        },

        async getProduct (id) {
            try {
                this.loading = true

                let response = await api.get(`products/${id}`)

                if (response.status === 200) {
                    this.product = response.data.data
                }
            } catch (e) {

            } finally {
                this.loading = false
            }
        }
    }
})