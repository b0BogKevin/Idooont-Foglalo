<script setup>
import axios from 'axios';
import { ref } from 'vue';
const nap = ref();
const idopontok = ref();
const vanNap = ref();
const napSelect = ()=>{
  
vanNap.value=true;
}
</script>

<template>
  <div class="container">
    <h1>Pszichológus időpont foglalás</h1>
    <div>Nap</div>
    <select v-model="nap" v-on:change="napSelect" class="form-select form-select-lg">
<option value="1">Hétfő</option>
<option value="2">Kedd</option>
<option value="3">Szerda</option>
<option value="4">Csütörtök</option>
<option value="5">Péntek</option>

      </select>

<div v-if="vanNap"></div>
<div v-else>Itt jelennek meg a lehetséges időpontok</div>

  </div>

</template>

