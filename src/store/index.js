import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import axios from '../API/axios'
import swalert from '../API/swal'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    username: 'Guess',
    carts: [],
    products: [],
    product: {}
  },

  mutations: {
    setLoggedIn (state, payload) {
      state.isLoggedIn = payload.status
    },

    setUsername (state, payload) {
      state.username = payload.username
    },

    setCarts (state, payload) {
      state.carts = payload.carts
    },

    setProducts (state, payload) {
      state.products = payload.products
    },

    setProduct (state, payload) {
      state.product = payload.product
    }
  },
  actions: {
    login (context, payload) {
      axios({
        method: 'POST',
        url: '/login',
        data: {
          username: payload.username,
          password: payload.password
        }
      })

        .then(response => {
          if (response.data.role === 'customer') {
            localStorage.setItem('access_token', response.data.access_token)
            localStorage.setItem('username', response.data.username)

            context.commit('setUsername', { username: response.data.username })
            context.commit('setLoggedIn', { status: true })

            swalert.fire({
              icon: 'success',
              iconColor: 'deepskyblue',
              title: `Welcome, ${response.data.name}!`,
              background: 'azure'
            })
          } else {
            const err = {
              response: {
                data: {
                  error: 'Please login as customer user'
                }
              }
            }
            throw err
          }
        })

        .catch(err => {
          swalert.fire({
            icon: 'error',
            title: err.response.data.error,
            background: 'mistyrose'
          })
        })
    },

    logout (context, payload) {
      context.commit('setLoggedIn', { status: false })
      context.commit('setUsername', { username: 'Guess' })

      localStorage.clear()
      router.push({ name: 'Home' })
    },

    getAllProducts (context, payload) {
      axios({
        method: 'GET',
        url: '/products'
      })

        .then(response => {
          context.commit('setProducts', { products: response.data })
        })

        .catch(err => {
          swalert.fire({
            icon: 'error',
            title: err.response.data.error,
            background: 'mistyrose'
          })
        })
    },

    getOneProduct (context, payload) {
      const productId = router.currentRoute.params.id

      axios({
        method: 'GET',
        url: `/products/${productId}`
      })

        .then(response => {
          context.commit('setProduct', { product: response.data })
        })

        .catch(err => {
          swalert.fire({
            icon: 'error',
            title: err.response.data.error,
            background: 'mistyrose'
          })
        })
    },

    getUserCarts (context, payload) {
      axios({
        method: 'GET',
        url: '/carts',
        headers: {
          access_token: localStorage.access_token
        }
      })

        .then(response => {
          context.commit('setCarts', { carts: response.data })
        })

        .catch(err => {
          swalert.fire({
            icon: 'error',
            title: err.response.data.error,
            background: 'mistyrose'
          })
        })
    },

    addUserCarts (context, payload) {
      axios({
        method: 'POST',
        url: '/carts',
        headers: {
          access_token: localStorage.access_token
        },
        body: {
          quantity: payload.quantity,
          ProductId: payload.ProductId
        }
      })

        .then(response => {
          swalert.fire({
            icon: 'success',
            title: 'Item has been successfully added to your cart!'
          })
        })

        .catch(err => {
          swalert.fire({
            icon: 'error',
            title: err.response.data.error,
            background: 'mistyrose'
          })
        })
    },

    updateUserCarts (context, payload) {
      axios({
        method: 'PATCH',
        url: '/carts',
        headers: {
          access_token: localStorage.access_token
        },
        body: {
          quantity: payload.quantity,
          ProductId: payload.ProductId
        }
      })

        .then(response => {
          swalert.fire({
            icon: 'success',
            title: "Item's quantity has been successfully updated!"
          })
        })

        .catch(err => {
          swalert.fire({
            icon: 'error',
            title: err.response.data.error,
            background: 'mistyrose'
          })
        })
    },

    deleteUserCarts (context, payload) {
      swalert.fire({
        title: 'Are you sure you want to remove this item from your cart?',
        toast: false,
        position: 'center',
        icon: 'question',
        showConfirmButton: true,
        showCancelButton: true,
        cancelButtonColor: 'red',
        confirmButtonText: 'Yes'
      })
        .then(result => {
          if (result.isConfirmed) {
            axios({
              method: 'DELETE',
              url: '/carts',
              headers: {
                access_token: localStorage.access_token
              },
              body: {
                ProductId: payload.ProductId
              }
            })

              .then(response => {
                swalert.fire({
                  icon: 'success',
                  title: 'Item has been successfully removed from your cart!'
                })
              })

              .catch(err => {
                swalert.fire({
                  icon: 'error',
                  title: err.response.data.error,
                  background: 'mistyrose'
                })
              })
          }
        })
    }
  }
})