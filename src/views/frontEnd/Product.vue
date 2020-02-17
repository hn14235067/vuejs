<template>
  <div>
    <Header />
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h3 class="mb-4 productTitle">{{product.title}}</h3>
          <p class="mb-4 productPrice"><span
              class="origin_price mr-2"
              v-if="product.origin_price !== product.price"
            >市價:{{product.origin_price | currency}}
            </span>網路價：<span class="price">{{product.price | currency}}</span>
          </p>
          <select
            class="form-control mb-4"
            v-model="product.num"
          >
            <option
              :value="num"
              v-for="num in 10"
              :key="num"
            >選購 {{num}} {{product.unit}}</option>
          </select>
          <button
            class="btn btn-primary btn-block"
            @click="addToCart(product.id, product.num)"
          >加入購物車</button>
        </div>
        <div class="col-md-8">
          <img
            :src="`${product.imageUrl}`"
            :alt="`${product.title}`"
            class="img img-fluid mb-4"
          >
          <div class="jumbotron">
            {{product.discription}}
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
  import Alert from "../../components/AlertMessage";
  import Header from "../../components/Header";
  import Footer from "../../components/Footer";

  export default {
    data() {
      return {
        product: {},
        carts: []
      };
    },
    components: {
      Alert,
      Header,
      Footer
    },
    methods: {
      getProduct() {
        const vm = this;
        const productId = vm.$route.params.id;
        console.log(productId);
        const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${productId}`;
        vm.$http.get(api).then(response => {
          vm.product = response.data.product;
          //預設數量為1
          vm.product.num = 1;
        });
      },
      getCart() {
        const vm = this;
        const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
        vm.$http.get(api).then(response => {
          // console.log(response.data.data.carts);
          vm.carts = response.data.data.carts;
        });
      },
      addToCart(id, qty = 1) {
        const vm = this;
        const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
        //定義cartItem資料格式，屬性為api定義(product_id, qty)
        const cartItem = {
          product_id: id,
          qty: qty
        };
        //以定義之格式 post
        vm.$http.post(api, { data: cartItem }).then(response => {
          // console.log(response);
          vm.getCart();
        });
      }
    },
    created() {
      this.getProduct();
      this.getCart();
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../assets/all.scss";
  .productPrice {
    font-size: 20px;
    font-weight: bold;
    line-height: 16px;
  }
</style>