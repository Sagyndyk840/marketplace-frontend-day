import {defineStore} from "pinia";
import {api} from "@/boot/axios.js";

export const useCategoryStore = defineStore({
    id: 'category',
    state: () => ({
        categories: [],
        loading: false
    }),

    getters: {

    },

    actions: {
        async getCategories () {
            try {
                this.loading = true

                let response = await api.get('categories')

                if (response.status === 200) {
                    this.categories = response.data.data
                }
            } catch (e) {
            } finally {
                this.loading = false

            }
        }
    }
})