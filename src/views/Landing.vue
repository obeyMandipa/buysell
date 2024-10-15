
<template>
  <div>
    <header>
      <div class="bg-gradient-to-r from-violet-300 h-[60vh]"> 
        <Navbar1></Navbar1>

        <div class="flex">
          <p class="text-[70px] font-bold  w-[1000px] ml-[70px] mt-[60px]">
            Getting the best experience in buying, selling and exploring...
          </p>

          <div class="flex ">
            <img src="https://i.pinimg.com/564x/f6/09/41/f6094121ae8689a84eebb990d664440a.jpg" alt="" class="h-[600px] rounded-[350px] mt-[100px] ml-[60px]">
            <img src="https://i.pinimg.com/736x/a0/7f/21/a07f2141f649d6122dd1db4d5863b95f.jpg" alt="" class="absolute h-[250px] w-[250px] rounded-full ml-[570px] mt-[70px]">
            <img src="https://i.pinimg.com/564x/40/0f/02/400f0222ff7bd0442c68e4a27fbd1b3a.jpg" alt="" class="absolute h-[300px] w-[320px] rounded-full ml-[-200px] mt-[250px]"
          </div>
        </div>
      </div>
    </header>

    <main class=" mt-[30vh]">
      <div class=" space-y-11">
        <div class="explore bg-violet-300 h-[90vh] justify-center">
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

