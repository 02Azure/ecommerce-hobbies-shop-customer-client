<template>
  <div id="transaction-detail-page" class="page">
    <h2>Transaction ID {{ id }} Log</h2>
    <p>Please note that these are the purchased product data at purchase time</p>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Image</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
        </tr>
      </thead>

      <tbody>
        <OldCartRow
          v-for = "(item, i) in purchasedItems"
          :key = "item.id"
          :item = "item"
          :number = i+1
        />
      </tbody>
    </table>
    <p id="total-price">Total: {{ total }}</p>
  </div>
</template>

<script>
import OldCartRow from '../components/OldCartRow'

export default {
  name: 'TransactionDetail',

  components: { OldCartRow },

  created () {
    this.$store.dispatch('getOneTransaction')
  },

  computed: {
    purchasedItems () {
      return this.$store.state.transaction.PurchasedItems
    },

    total () {
      return this.$store.state.transaction.PurchasedItems.reduce((total, item) => total + (item.price * item.quantity), 0)
    },

    id () {
      return this.$route.params.id
    }
  }
}
</script>

<style scoped>
  #transaction-detail-page {
    background-color: rgba(255, 255, 255, 0.75);
    margin-bottom: 2em;
    padding: 1em 0.5em;
  }

  #total-price {
    margin-right: 0.8em;
    font-weight: bolder;
    text-align: right;
    font-size:1em;
  }

  .page {
    padding: 0 2em;
  }

</style>
