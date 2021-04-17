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
    product: {},
    transactions: [],
    transaction: {},
    cartQuantities: {}
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

    changeQuantity (state, payload) {
      state.carts[payload.index].Cart.quantity += payload.increment
    },

    setProducts (state, payload) {
      state.products = payload.products
    },

    setProduct (state, payload) {
      state.product = payload.product
    },

    setTransactions (state, payload) {
      state.transactions = payload.transactions
    },

    setTransaction (state, payload) {
      state.transaction = payload.transaction
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
              title: `Welcome, ${response.data.username}!`,
              background: 'azure'
            })

            router.push({ name: 'Home' })
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

    register (context, payload) {
      axios({
        method: 'POST',
        url: '/register',
        data: {
          username: payload.username,
          email: payload.email,
          password: payload.password
        }
      })

        .then(response => {
          swalert.fire({
            icon: 'info',
            title: 'Registration complete! Now you can login with your brand new account!'
          })

          router.push({ name: 'Login' })
        })

        .catch(err => {
          let msg

          if (Array.isArray(err.response.data.error)) {
            msg = err.response.data.error.join('\n')
          } else {
            msg = err.response.data.error
          }

          swalert.fire({
            icon: 'error',
            title: msg,
            background: 'mistyrose'
          })
        })
    },

    logout (context, payload) {
      context.commit('setLoggedIn', { status: false })
      context.commit('setUsername', { username: 'Guess' })

      localStorage.clear()
      swalert.fire({
        icon: 'info',
        title: 'Successfully logged out'
      })
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
      console.log(payload)
      axios({
        method: 'POST',
        url: '/carts',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          ProductId: payload.ProductId,
          quantity: payload.quantity
        }
      })

        .then(response => {
          swalert.fire({
            icon: 'success',
            width: 350,
            title: `${payload.name} has been successfully added to your cart!`
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
        data: {
          quantity: +payload.quantity,
          ProductId: +payload.ProductId
        }
      })

        .then(response => {
          swalert.fire({
            icon: 'success',
            title: "Your cart Item's quantity has been successfully saved!"
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
        confirmButtonText: 'Yes',
        timer: undefined
      })
        .then(result => {
          if (result.isConfirmed) {
            axios({
              method: 'DELETE',
              url: '/carts',
              headers: {
                access_token: localStorage.access_token
              },
              data: {
                ProductId: payload.ProductId
              }
            })

              .then(response => {
                context.dispatch('getUserCarts')
                swalert.fire({
                  icon: 'success',
                  width: 350,
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
    },

    getUserTransactions (context, payload) {
      axios({
        method: 'GET',
        url: '/transactions',
        headers: {
          access_token: localStorage.access_token
        }
      })

        .then(response => {
          context.commit('setTransactions', { transactions: response.data })
        })

        .catch(err => {
          swalert.fire({
            icon: 'error',
            title: err.response.data.error,
            background: 'mistyrose'
          })
        })
    },

    getOneTransaction (context, payload) {
      const transactionId = router.currentRoute.params.id

      axios({
        method: 'GET',
        url: `/transactions/${transactionId}`,
        headers: {
          access_token: localStorage.access_token
        }
      })

        .then(response => {
          context.commit('setTransaction', { transaction: response.data })
        })

        .catch(err => {
          swalert.fire({
            icon: 'error',
            title: err.response.data.error,
            background: 'mistyrose'
          })
        })
    },

    purchaseItems (context, payload) {
      axios({
        method: 'POST',
        url: '/transactions',
        headers: {
          access_token: localStorage.access_token
        }
      })

        .then(response => {
          swalert.fire({
            icon: 'success',
            title: 'Thanks you, your purchase will be processed ASAP!'
          })

          context.commit('setCarts', { carts: [] })
        })

        .catch(err => {
          swalert.fire({
            icon: 'error',
            title: err.response.data.error,
            background: 'mistyrose'
          })
        })
    }
  }
})
