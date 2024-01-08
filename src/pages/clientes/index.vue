<template>
  <div class="title">
    <h1>Clientes</h1>
  </div>
  <div class="container-flex">
    <table class="table-auto mx-auto px-auto">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Email</th>
          <th>Direccion</th>
          <th>Telefono</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in clientes" key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.address }}</td>
          <td>{{ item.phone }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts" setup>

import type { icliente } from '@/types'
const { data } = await $fetch('/api/clientes')
const clientes:icliente[] = data as icliente[]
console.log(clientes)
</script>
<style scoped>
table {margin: 3;}
td { margin: 3;padding: 2;}
</style>
