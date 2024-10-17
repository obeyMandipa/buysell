
<template>
  <div>
    <div class=" flex justify-between items-center h-[70px]">
      <div class=" text-[22px] font-bold">image and logo</div>
      <div class="">
        <nav class="flex gap-4">
          <a class="link link-hover hover:underline-offset-8 text-[20px] font-bold hover:text-gray-500 duration-300 hover:-translate-y-1 ">About us</a>
          <a class="link link-hover hover:underline-offset-8 text-[20px] font-bold hover:text-gray-500 duration-300 hover:-translate-y-1 ">Deliveries</a>
        </nav> 
      </div>
      <div class="space-x-[20px]">
       <RouterLink to="/shop"> <button class="btn w-[130px] text-[17px] transition ease-in-out delay-150 bg-transparent hover:-translate-y-1 hover:scale-110 border-2 border-black hover:bg-transparent duration-300 ...">Shop</button></RouterLink> 
        <button class="btn w-[130px] text-[17px] transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-black border-2 border-black duration-300 ... text-white">Sign up </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar1',
  created() {

  },
  data() {
    return {
    }
  },
  props: {
   
  },
  methods: {
   
  },
}
</script>

<style lang="scss" scoped>

</style>

