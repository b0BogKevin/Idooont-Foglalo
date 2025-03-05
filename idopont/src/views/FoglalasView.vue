<script setup>
import {useRouter} from 'vue-router'
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { usetimeStore } from '@/stores/ido.js';
const router =useRouter()
const store = usetimeStore()
const nap = ref();
const ora = ref();
const idopontok = ref();
const lehetsegesIdopontok = ref([8, 9, 10, 11, 12, 13, 14, 15, 16]);
const vanNap = ref();
onMounted(() => {
  axios.get("http://localhost:3000/idopontok")
    .then(resp => {
      idopontok.value = resp.data
    })
})
const napSelect = () => {
  lehetsegesIdopontok.value = [8, 9, 10, 11, 12, 13, 14, 15, 16]
  idopontok.value.forEach(ido => {
    if (ido.day == nap.value) {
      let index = lehetsegesIdopontok.value.indexOf(ido.hour)
      lehetsegesIdopontok.value.splice(index, 1)
    }

  });

  vanNap.value = true;
}

const foglalas = ()=>
{
store.ora = ora.value
store.nap = nap.value

console.log(store.ora);
console.log(store.nap);
router.push("/reszletek")

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

    <div v-if="vanNap">
      <select v-model="ora" class="form-select form-select-lg">
        <option v-for="ido in lehetsegesIdopontok" :value="ido">{{ ido }}</option>
      </select>
    </div>
    <div v-else>Itt jelennek meg a lehetséges időpontok</div>

  </div>
  <button v-on:click="foglalas" class="btn btn-outline-success">Foglalás</button>
</template>
