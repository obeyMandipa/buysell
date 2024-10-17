
<template>
  <div>
   <header>
    <navbar2 class="border-b-2"></navbar2>
   </header>
   <main>
    <div class="h-[50vh] bg-violet-300">

    </div>
    <div class="mt-[40px] pl-[90px] pr-[90px] bg-red-200">
      <p class="text-[30px] font-bold ">Prodcuts for you...</p>

      <div class="products grid grid-cols-4 gap-2 mt-[40px]">
        <div class="card card-compact bg-base-100 w-[400px] h-[400px] shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p >$50</p>
            <div class="card-actions justify-end">
              <button class="btn rounded-[30px] bg-transparent border-2 border-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white duration-300">Add to cart</button>
            </div>
          </div>
        </div>

        <div class="card card-compact bg-base-100 w-[400px] h-[400px] shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p >$50</p>
            <div class="card-actions justify-end">
              <button class="btn rounded-[30px] bg-transparent border-2 border-black  ">Add to cart</button>
            </div>
          </div>
        </div>

        <div class="card card-compact bg-base-100 w-[400px] h-[400px] shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p >$50</p>
            <div class="card-actions justify-end">
              <button class="btn rounded-[30px] bg-transparent border-2 border-black">Add to cart</button>
            </div>
          </div>
        </div>

        <div class="card card-compact bg-base-100 w-[400px] h-[400px] shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p >$50</p>
            <div class="card-actions justify-end">
              <button class="btn rounded-[30px] bg-transparent border-2 border-black">Add to cart</button>
            </div>
          </div>
        </div>
      </div>

      

      
    </div>
   </main>
  </div>
</template>

<script>
import Navbar2 from '@/components/Navbar2.vue';

export default {
  name: 'Shop',
  created() {

  },
  data() {
    return {
    }
  },
  props: {
   
  },

  components: {
    Navbar2
  },
  methods: {
   
  },
}
</script>

<style lang="scss" scoped>

</style>

