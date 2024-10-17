
<template>
  <div>
   <header>
    <navbar2 class="border-b-2"></navbar2>
   </header>
   <main>
    <div class="h-[50vh] bg-gradient-to-r from-violet-300  flex justify-between ">
      <p class="text-[70px] font-bold  w-[1000px] ml-[70px] mt-[60px]">Get the best online shoping experienc...</p> 
      <img src="https://i.pinimg.com/564x/19/87/b2/1987b281f2e6105a9f0f5499e6934be9.jpg" alt="" class="rounded-full mr-[40px] h-[500px]">

    </div>
    <div class="mt-[40px] pl-[90px] pr-[90px]">
      <p class="text-[30px] font-bold ">Prodcuts for you...</p>

      <div class="products grid grid-cols-4 gap-2 mt-[40px]">
        <div onclick="my_modal_4.showModal()" class="card  card-compact bg-base-100 w-[400px] h-[400px] shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes" />
          </figure>
          <div class="card-body">
            <span class="flex space-x-[230px]">
              <h2 class="card-title">Shoes</h2>
              <p class="text-[20px] font-bold mt-[5px]">$50.00</p>
            </span>
            <p>Product short decrition can be optional...</p>
            <div class="card-actions justify-end">
              <button class="btn rounded-[30px] bg-transparent border-2 border-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white duration-300">Add to cart</button>
            </div>
          </div>
        </div>

        <dialog id="my_modal_4" class="modal">
          <div class="modal-box w-[1500px] max-w-[2000px] h-[800px]">
            <div class="modal-action">
              <form method="dialog">
                <!-- if there is a button, it will close the modal -->
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
              </form>
              <div class="flex space-x-[140px]">
                <img src="" alt="" class=" bg-red-200 h-[600px] w-[600px]">
                <div class="details bg-red-200 h-[700px] w-[750px] ">
                  <p class="text-[30px] font-bold">Prodcut name</p>
                  <p class="">Product discription</p>
                  <!-- product rating -->
                  <div class="rating">
                    <input type="radio" name="rating-1" class="mask mask-star" />
                    <input type="radio" name="rating-1" class="mask mask-star" checked="checked" />
                    <input type="radio" name="rating-1" class="mask mask-star" />
                    <input type="radio" name="rating-1" class="mask mask-star" />
                    <input type="radio" name="rating-1" class="mask mask-star" />
                  </div>
                  <p class="text-[30px] font-bold">$300.00</p>
                  <h1 class="text-[20px] font-bold">Quantity in stock</h1>
                  <p class="text-[20px]">30</p>
                  <div class="flex space-x-4">
                    <div class="flex space-x-4 w-[200px] justify-center h-[50px] border rounded-full p-2">
                      <button class=" h-[27px] w-[27px] text-[24px] font-bold" @click="reduceUnit">-</button>
                      <input v-model="unit" type="text" class=" h-[27px] w-[35px] p-2 text-center" placeholder="1" readonly>
                      <button class=" h-[27px] w-[27px] text-[22px] font-bold" @click="addUnit">+</button>
                    </div>
                    <p class="">Adjust your order quantity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </dialog>

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
      unit: 1,
    }
  },
  props: {
   
  },

  components: {
    Navbar2,
  },
  methods: {
    addUnit(){
      this.unit++
    },

    reduceUnit(){
      this.unit--
    }
  },
}
</script>

<style lang="scss" scoped>

</style>

