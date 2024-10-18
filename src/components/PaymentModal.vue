
<template>
  <div>
    <dialog id="my_modal_5" class="modal overflow-y-auto">
      <div class="modal-box w-[1500px] max-w-[700px] h-[800px] ml-[800px] ">
        <h3 class="text-[30px] font-bold">Order summery</h3>
        <div class="flex space-x-3 mt-[20px]">
          <input type="number" placeholder="Enter Coupon code" class="input input-bordered rounded-full w-full max-w-xs" />
          <button class="btn rounded-full w-[200px] bg-green-400 hover:bg-green-800 hover:text-white">Apply coupon</button>
        </div>
        <div class="">
          <h1 class="text-[20px] font-bold mt-[20px]">Payment details</h1>
          <ul class="list-none space-y-2 ">
            <li class="flex text-[18px]"><input type="radio" name="radio-5" class="radio radio-success" />&nbsp Cash on delivery </li>
            <li class="flex text-[18px]"><input type="radio" name="radio-5" class="radio radio-success" />&nbsp Paynow</li>
            <li class="flex text-[18px]"><input type="radio" name="radio-5" class="radio radio-success" />&nbsp Paypal</li>
            <li class="flex text-[18px]"><input type="radio" name="radio-5" class="radio radio-success" />&nbsp Credit or Debit card</li>
          </ul>
        </div>
        <div class="mt-[20px]">
          <p class="mt-[10px]">Email*</p>          
          <input type="email" placeholder="" class="input input-bordered w-full max-w-xs" />
          <p class="mt-[10px]">Card holder name*</p>          
          <input type="text" placeholder="" class="input input-bordered w-full max-w-xs" />
          <p class="mt-[20px]">Card number*</p>          
          <input type="number" placeholder="" class="input input-bordered w-full max-w-xs" />
          <div class="flex space-x-8 mt-[20px]">
            <span>
              <label for="">Expiary</label>
              <input type="date" placeholder="" class="input input-bordered w-full max-w-xs" />
            </span>
            <span>
              <label for="">CVC</label>
              <input type="number" placeholder="" class="input input-bordered w-full max-w-xs" />
            </span>
          </div>
        </div>
        <div class=" space-y-4 mt-[30px] border-t-2 border-gray-400 text-[20px] font-bold pt-[10px]">
          <h1>Deliver Information</h1>
          <input type="text" placeholder="Name of recepient" class="input input-bordered w-full max-w-xs mt-[20px]" /> <br>
          <input type="number" placeholder="mobile number" class="input input-bordered w-full max-w-xs" /> <br>
          <h1 class="mt-[30px]">Location</h1>


        </div>
        <div class="modal-action">
          <form method="dialog">
            <!-- if there is a button, it will close the modal -->
            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
        </div>
      </div>
    </dialog>

    
  </div>
</template>

<script>
export default {
  name: 'PaymentModal',
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

