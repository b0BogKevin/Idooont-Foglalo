<template>
  <div class="container col-4">
    <h2>Adatok megadása</h2>
    <form v-on:submit.prevent class="shadow p-4 rounded mt-4">
      <div class="form-group m-2">
        <label for="exampleInputEmail1">Név</label>
        <input v-model="nev" type="text" class="form-control" placeholder="Név">
      </div>

      <div class="form-group m-2">
        <label for="exampleInputEmail1">Telefonszám</label>
        <input v-model="tel" type="text" class="form-control" placeholder="Telefonszám">
      </div>

      <button v-on:click="kuldes()" type="submit" class="btn btn-primary" id="gomb">Submit</button>
    </form>
  </div>
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
  else{
    toast.error("Adjon meg minden adatot!")

  }
}
</script>
