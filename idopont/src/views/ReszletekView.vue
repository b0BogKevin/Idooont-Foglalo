<template>
  <div class="content">
    <form v-on:submit.prevent>
      <div class="form-group">
        <label for="exampleInputEmail1">Név</label>
        <input v-model="nev" type="text" class="form-control" placeholder="Név">
      </div>

      <div class="form-group">
        <label for="exampleInputEmail1">Telefonszám</label>
        <input v-model="tel" type="text" class="form-control" placeholder="Telefonszám">
      </div>

      <button v-on:click="kuldes()" type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
  <div id="siker">{{ siker }}</div>
</template>

<script setup>
import { ref } from 'vue';
import { usetimeStore } from '@/stores/ido.js';
import axios from 'axios';
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'

const toast = useToast()
const router = useRouter()
const store = usetimeStore()
const nev = ref("");
const tel = ref("");
const siker = ref("")
const kuldes = () => {

  if (nev.value != "" && tel.value != "") {
    axios.post("http://localhost:3000/idopontok", { day: store.nap, hour: store.ora })
    if (router) {
      toast.success("Sikeres foglalás")

    }
  }
}
</script>
