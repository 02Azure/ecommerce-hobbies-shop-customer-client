<template>
  <tr class="cart-row">
    <th class="align-middle" scope="row">{{ number }}</th>
    <td class="align-middle"><router-link :to="{ name: 'ProductDetail', params: { id: item.ProductId } }">{{ item.name }}</router-link></td>
    <td class="align-middle">
      <router-link class="product-name-cart" :to="{ name: 'ProductDetail', params: { id: item.ProductId } }">
        <img
          :src="item.image_url"
          onerror="this.src = 'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg'"
          alt="product's image"
        >
      </router-link>
    </td>
    <td class="align-middle">Rp. {{ item.price }}</td>
    <td class="align-middle">{{ item.quantity }}</td>
  </tr>
</template>

<script>
export default {
  name: 'OldCartRow',

  props: ['item', 'number']
}
</script>

<style scoped>
img {
  max-height: 80px;
}

a {
  font-weight: bold;
}
</style>
