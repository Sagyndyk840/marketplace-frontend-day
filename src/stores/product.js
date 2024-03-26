import {defineStore} from "pinia";
import {api} from "@/boot/axios.js";

export const useProductStore = defineStore({
    id: 'product',
    state: () => ({
        products: [],
        loading : false,
        pagination: {},
        currentPaginate: 1
    }),
    getters: {

    },
    actions: {
        async getProducts (filter) {
            try {

                this.loading = true

                let params =  new URLSearchParams(filter)

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
        }
    }
})