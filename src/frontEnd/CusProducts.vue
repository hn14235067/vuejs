<template>
  <div>
    <!-- Header -->
    <Header />
    <!-- Content -->
    <div class="container">
      <div class="row">
        <div class="col-3 categories mt-4">
          <ul
            class="list-group"
            v-for="(category, index) in categories"
            :key="index"
          >

            <li
              class="list-group-item d-flex justify-content-between align-items-center"
              @click="getProducts"
            >
              {{ category }}
              <span class="badge badge-primary badge-pill"></span>
            </li>

          </ul>
        </div>
        <!-- cards -->
        <div
          class="col-3 card-group mt-4"
          v-for="item in products"
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
              <a
                href="#"
                class="btn btn-primary"
              >Go somewhere</a>
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
        currentCategory: "",
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
    // computed: {
    //   filterData() {
    //     const vm = this;
    //     // step1. 先過濾出要的資料
    //     let items = [];
    //     vm.currentPage = 0;
    //     if (vm.currentCategory !== "") {
    //       items = vm.products.filter((item, i) => {
    //         console.log(item);
    //         return item.category === vm.currentCategory;
    //       });
    //     } else {
    //       items = vm.products;
    //     }
    //     // step2. 依照過濾出的資料做分頁
    //     // 分頁要點1: 總共有幾頁
    //     // 分頁要點2: 每頁的內容
    //     // 分頁要點3: 組成二維陣列 [[1...],[2...],[3...]]
    //     console.log(vm.currentCategory);
    //     const newProducts = [];
    //     items.forEach((item, i) => {
    //       if (i % 9 === 0) {
    //         newProducts.push([]);
    //       }
    //       const page = parseInt(i / 9);
    //       newProducts[page].push(item);
    //     });
    //     console.log("newProducts", newProducts);
    //     return newProducts;
    //   }
    // },
    methods: {
      getProducts() {
        const vm = this;
        let api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products/all`;
        vm.$http.get(api).then(response => {
          vm.products = response.data.products;
          vm.getCategories();
        });
      },
      getCategories() {
        const vm = this;
        // console.log(vm.products);
        vm.products.forEach(item => {
          if (!vm.categories.includes(item.category)) {
            console.log(vm.categories.indexOf(item.category));
            vm.categories.push(item.category);
          }
        });
        console.log(vm.categories);
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