import {defineStore} from "pinia";
import {api} from "@/boot/axios.js";
import {notify} from "@kyvg/vue3-notification";
import router from "@/router/index.js";

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        loading: false
    }),

    getters: {},

    actions: {
        async register (data) {
            try {
                this.loading = true
                let response = await api.post('register', data)

                if (response.status === 200) {
                    notify({
                        text: response.data.message,
                        type: 'success'
                    })
                    sessionStorage.setItem('token', response.data.data.token)
                    router.push({name: 'HomePage'})
                }
            } catch (e) {
                const errorData = e?.response?.data?.data

                if (errorData && e?.response?.status === 403) {
                    for (let key in errorData) {
                        notify({
                            title: 'Валидация',
                            text: errorData[key],
                            type: 'error'
                        })
                    }
                } else {
                    notify({
                        text: 'Произошло ошибка',
                        type: 'error'
                    })
                }
            } finally {
                this.loading = false
            }
        }
    }
})
