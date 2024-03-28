import {defineStore} from "pinia";
import {api} from "@/boot/axios.js";
import router from "@/router/index.js";
import {notify} from "@kyvg/vue3-notification";

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        loading: false
    }),

    getters: {},

    actions: {
        async login (data) {
          try {
              this.loading = true
              let response = await api.post('login', data)

              if (response.status === 200) {
                  notify({
                      text: response.data.message,
                      type: 'success'
                  })
                  sessionStorage.setItem('token', response.data.data.token)
                  sessionStorage.setItem('user', response.data.data.user)
                  router.push({name: 'HomePage'})
              }
          } catch (e) {
              const errorData = e?.response?.data?.data

              if (e?.response?.status === 403 && errorData) {
                  for (const key in errorData) {
                      notify({
                          title: 'Валидация',
                          text: errorData[key],
                          type: 'error'
                      })
                  }
              } else {
                  notify({
                      text: 'При регистрации произошло ошибка!!!',
                      type: 'error'
                  })
              }
          } finally {
              this.loading = false
          }
        },
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
                    sessionStorage.setItem('user', response.data.data.user)
                    router.push({name: 'HomePage'})
                }
            } catch (e) {
                const errorData = e?.response?.data?.data

                if (e?.response?.status === 403 && errorData) {
                    for (const key in errorData) {
                        notify({
                            title: 'Валидация',
                            text: errorData[key],
                            type: 'error'
                        })
                    }
                } else {
                    notify({
                        text: 'При регистрации произошло ошибка!!!',
                        type: 'error'
                    })
                }
            } finally {
                this.loading = false
            }
        }
    }
})
