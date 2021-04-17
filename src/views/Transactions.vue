<template>
  <div id="transactions-page" class="page">
    <h2>My Transactions History</h2>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Purchase Date</th>
          <th scope="col">Total</th>
        </tr>
      </thead>

      <tbody>
        <TransactionRow
          v-for = "transaction in transactions"
          :key = "transaction.id"
          :transaction = "transaction"
          :total = "total"
        />
      </tbody>
    </table>
    <div v-if="!transactions.length">
      <p>You haven't made any transaction yet...</p>
    </div>

  </div>
</template>

<script>
import TransactionRow from '../components/TransactionRow'

export default {
  name: 'Transactions',

  components: { TransactionRow },

  created () {
    this.$store.dispatch('getUserTransactions')
  },

  computed: {
    transactions () {
      return this.$store.state.transactions
    }
  }
}
</script>

<style scoped>
  #transactions-page {
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
