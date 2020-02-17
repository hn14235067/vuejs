<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <!-- Header -->
    <Header />
    <!-- Content -->
    <div class="container">
      <div class="row">
        <!-- categories -->
        <div class="col-3 categories mt-4">
          <ul
            class="list-group"
            v-for="(category, index) in categories"
            :key="index"
          >

            <li
              class="list-group-item d-flex justify-content-between align-items-center"
              @click="currentCategory = category"
            >
              {{ category }}
            </li>

          </ul>
        </div>
        <!-- cards -->
        <div
          class="col-3 col-sm-6 col-md-4 col-lg-3 card-group mt-4"
          v-for="item in filterData"
          :key="item.id"
        >
          <div class="card">
            <img
              class="card-img-top"
              :src="item.imageUrl"
              alt="Card image cap"
            >
            <div class="card-body">
              <h5 class="card-title"> {{ item.category }}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div class="row justify-content-center">
                <a
                  href="#"
                  class="btn btn-primary center"
                  @click="getProduct(item.id)"
                >查看更多</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- Footer -->
    <Footer />

  </div>
</template>

<script>
  import Alert from "../../components/AlertMessage";
  import Header from "../../components/Header";
  import Footer from "../../components/Footer";

  export default {
    name: "CusProducts",
    data() {
      return {
        products: [],
        count: 0,
        categories: ["全部商品"],
        currentCategory: "全部商品",
        currentPage: 0,
        carts: [],
        isLoading: false
      };
    },
    components: {
      Header,
      Footer,
      Alert
    },
    computed: {
      //以 category 作為分類資料的 filter
      filterData() {
        const vm = this;

        let items = [];
        if (vm.currentCategory !== "全部商品") {
          vm.products.forEach(item => {
            // console.log(item);
            if (item.category === vm.currentCategory) {
              items.push(item);
            }
          });
        } else {
          items = vm.products;
        }
        return items;
      }
    },
    methods: {
      getProducts() {
        const vm = this;
        const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products/all`;
        vm.$http.get(api).then(response => {
          vm.isLoading = false;
          vm.products = response.data.products;
          vm.getCategories();
        });
      },
      getCategories() {
        const vm = this;
        //取得所有的products類別 (不重複取)
        vm.products.forEach(item => {
          if (!vm.categories.includes(item.category)) {
            vm.categories.push(item.category);
          }
        });
      },
      getProduct(id) {
        const vm = this;
        vm.$router.push(`/product/${id}`);
      }
    },
    created() {
      this.getProducts();
    }
  };
</script>

<style>
  .card-group {
    display: flex;
  }
</style>