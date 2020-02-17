<template>
  <div>
    <!-- headers -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark border">
      <div
        class="col-12 collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/home">
              <h4
                class="nav-link"
                href="#"
              >Home</h4>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cus_products">
              <h4
                class="nav-link"
                href="#"
              >Products</h4>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/news">
              <h4
                class="nav-link"
                href="#"
              >News</h4>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about">
              <h4
                class="nav-link"
                href="#"
              >About</h4>
            </router-link>
          </li>
        </ul>
        <!-- 購物車內的數量 (Button 內包含 icon, 數量 badge) -->
        <div class="dropdown ml-auto">
          <button
            class="btn btn-sm btn-cart btn-light"
            data-toggle="dropdown"
            data-flip="false"
            @click="getCarts"
          >
            <i
              class="fa fa-shopping-cart text-dark fa-2x"
              aria-hidden="true"
            ></i>
            <span class="badge badge-pill badge-danger"></span>
          </button>
          <div
            class="dropdown-menu dropdown-menu-right p-3"
            style="min-width: 300px"
            data-offset="400"
          >
            <h6>已選擇商品</h6>
            <table class="table table-sm">
              <tbody>
                <tr
                  v-for="item in cartItems"
                  :key="item.id"
                >
                  <td class="align-middle">
                    <i
                      class="btn far fa-trash-alt"
                      @click="deleteCartItem(item.id)"
                    ></i>
                  </td>
                  <td class="align-middle"> {{ item.product.title }}</td>
                  <td class="align-middle">{{ item.qty }}</td>
                  <td class="align-middle text-right">{{ item.product.price * item.qty  }}</td>
                </tr>
              </tbody>
            </table>
            <router-link to="/checkout">
              <a class="btn btn-primary btn-block text-white">
                <i
                  class="fa fa-cart-plus"
                  aria-hidden="true"
                ></i> 結帳去
              </a>
            </router-link>
          </div>
        </div>

      </div>
    </nav>

  </div>
</template>



<script>
  export default {
    name: "Header",
    data() {
      return {
        cartItems: []
      };
    },
    methods: {
      getCarts() {
        const vm = this;
        const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
        vm.$http.get(api).then(response => {
          vm.cartItems = response.data.data.carts;
          console.log(response.data.data.carts);
        });
      },
      deleteCartItem(id) {
        const vm = this;
        const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${id}`;
        vm.$http.delete(api).then(response => {
          if (response.data.success) {
            vm.getCarts();
          } else {
            console.log("刪除失敗");
          }
        });
      }
    }
  };
</script>