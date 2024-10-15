
<template>
  <div>
    <header>
      <div class="bg-blue-300 h-[60vh]"> 
        <Navbar1></Navbar1>
      </div>
    </header>

    <main class=" mt-[200px]">
      <div class=" space-y-11">
        <div class="explore bg-violet-300 h-[40vh] content-center">
        <h1>Explore</h1>
        </div>
        <div class="sell bg-violet-300 h-[40vh]">
          <h1>Sell</h1>
        </div>
        <div class="buy bg-violet-300 h-[40vh]">
          <h1>Buy</h1>
        </div>
        </div>
    </main>
  
  </div>
</template>

<script>
  import Navbar1 from "@/components/Navbar1.vue";
  import Button from "primevue/button"

export default {

  name: 'Landing',
  created() {

  },
  data() {
    return {
    }
  },
  props: {
   
  },
  components: {
    Button,
    Navbar1
  },

  methods: {
   
  },
}
</script>

<style scoped>

</style>

