
<template>
  <div>
    <div class=" flex justify-between items-center h-[70px]">
      <div class=" text-[22px] font-bold">image and logo</div>
      <div class="">
        <nav class="flex justify-between w-[200px]" >
          <a class="link link-hover hover:underline-offset-8 text-[20px] font-bold hover:text-gray-500 duration-300 hover:-translate-y-1 ">Shop</a>
          <a class="link link-hover hover:underline-offset-8 text-[20px] font-bold hover:text-gray-500 duration-300 hover:-translate-y-1 ">About us</a>
        </nav> 
      </div>
      <div class="flex space-x-[40px] ">
        <label class="input input-bordered flex items-center gap-2">
          <input type="text" class="grow w-[400px]" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="h-4 w-4 opacity-70">
            <path
              fill-rule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clip-rule="evenodd" />
          </svg>
        </label>
        <RouterLink to="/shop" class="flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <svg class="h-8 w-8 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>  
          <p >Account</p>
        </RouterLink>
        <RouterLink to="/shop" class="flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <svg class="h-8 w-8 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
          </svg>
          <p>Cart</p>
        </RouterLink>        
      </div>
    </div>
  </div>
</template>

<script>
import { BeakerIcon } from '@heroicons/vue/24/outline'


export default {
  name: 'Navbar2',
  created() {

  },
  data() {
    return {
      
    }
  },
  props: {
   
  },
  components: {
  },
  methods: {
   
  },
}
</script>

<style lang="scss" scoped>

</style>

