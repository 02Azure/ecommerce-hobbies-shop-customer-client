<template>
  <tr @click="toTransDetail(transaction.id)" class="transaction-row">
    <th class="align-middle" scope="row">{{ transaction.id }}</th>
    <td class="align-middle">{{ purchase_date }}</td>
    <td class="align-middle">Rp. {{ total }}</td>
  </tr>
</template>

<script>
export default {
  name: 'TransactionRow',

  props: ['transaction'],

  computed: {
    total () {
      return this.transaction.PurchasedItems.reduce((total, item) => total + (item.price * item.quantity), 0)
    },

    purchase_date () {
      const date = new Date(this.transaction.purchase_date)
      return date.toLocaleString()
    }
  },

  methods: {
    toTransDetail (transId) {
      this.$router.push({ name: 'TransactionDetail', params: { id: transId } })
    }
  }
}
</script>

<style scoped>
  .transaction-row:hover {
    cursor: pointer;
  }
</style>
