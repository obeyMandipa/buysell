
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
                <button class="btn btn-sm btn-circle btn-ghost absolute text-white font-bolder bg-red-500 hover:bg-red-500 right-2 top-2">✕</button>
              </form>
              <div class="flex space-x-[140px]">

                <!-- product image -->
                <div class="">
                  <img src="https://i.pinimg.com/736x/53/67/56/5367560231aca4739af4fe5e8f88fa71.jpg" alt="" class=" rounded-[20px] shadow-xl h-[650px] w-[700px]">
                </div>

                <!-- product information -->
                <div class="details h-[700px] w-[750px] ">
                  <p class="text-[30px] font-bold">Prodcut name</p>
                  <p class="">Product discription</p>
                  <!-- product rating -->
                  <div class="rating mt-[10px]">
                    <input type="radio" name="rating-1" class="mask mask-star bg-green-600" />
                    <input type="radio" name="rating-1" class="mask mask-star bg-green-600" checked="checked" />
                    <input type="radio" name="rating-1" class="mask mask-star bg-green-600" />
                    <input type="radio" name="rating-1" class="mask mask-star bg-green-600" />
                    <input type="radio" name="rating-1" class="mask mask-star bg-green-600" />
                  </div>
                  <p class="text-[30px] font-bold mt-[30px]">$300.00</p>
                  <h1 class="text-[20px] font-bold mt-[30px]">Quantity in stock</h1>
                  <p class="text-[20px]">30</p>
                  <div class="flex space-x-4 mt-[30px]">
                    <div class="flex space-x-4 w-[200px] justify-center h-[50px] bg-gray-100 rounded-full p-2 ">
                      <button class=" h-[27px] w-[27px] text-[24px] font-bold" @click="reduceUnit">-</button>
                      <input v-model="unit" type="text" class=" h-[27px] w-[35px] p-2 text-center bg-gray-100 mt-[3px]" placeholder="1" readonly>
                      <button class=" h-[27px] w-[27px] text-[22px] font-bold" @click="addUnit">+</button>
                    </div>
                    <p class="mt-[10px]">Adjust your order quantity</p>
                  </div>
                  <div class="flex space-x-4 mt-[30px]">
                    <button class="btn w-[200px] rounded-[30px] bg-transparent border-2 border-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-black text-[16px] hover:text-white duration-300" onclick="my_modal_5.showModal()">Buy</button>
                    <button class="btn w-[200px] rounded-[30px] bg-transparent border-2 border-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-black text-[16px] hover:text-white duration-300">Add to cart</button>
                  </div>

                  <!-- payment modal component -->
                   <PaymentModal></PaymentModal>

                  <div class=" mt-[40px] border-t-2 p-2 border-gray-500 flex justify-between">
                    <div class="">
                      <p class="flex gap-2 text-[15px] font-bold">
                        <svg class="h-8 w-8 text-orange-500 mt-[-5px]"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="7" cy="17" r="2" />  <circle cx="17" cy="17" r="2" />  <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />  <line x1="3" y1="9" x2="7" y2="9" /></svg>
                        Free delivery
                      </p>
                      <p class="text-[13px]">The product will safely be delivered to the stipulated location</p>
                    </div>
                    <div class="form-control mt-[20px]">
                      <label class="label cursor-pointer">
                        <input type="checkbox" checked="checked" class="checkbox checkbox-success" />
                      </label>
                    </div>
                  </div>
                  <div class=" p-2 border-gray-500 flex justify-between">
                    <div class="">
                      <p class="flex gap-2 text-[15px] font-bold">
                        <svg class="h-[26px] w-[26px] text-orange-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />  <line x1="3" y1="6" x2="21" y2="6" />  <path d="M16 10a4 4 0 0 1-8 0" /></svg>Return delivery
                      </p>
                      <p class="text-[13px]">Free 30day delivery returns</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </dialog>
      </div>

      

      
    </div>
   </main>
  </div>
</template>

<script>
import Navbar2 from '@/components/Navbar2.vue';
import PaymentModal from '@/components/PaymentModal.vue';

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
    PaymentModal
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

