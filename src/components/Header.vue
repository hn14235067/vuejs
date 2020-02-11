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
                <tr>
                  <td class="align-middle text-center">
                    <a
                      href="#removeModal"
                      class="text-muted"
                      data-toggle="modal"
                      data-title="刪除 金牌西裝 1 件"
                    >
                      <i
                        class="fa fa-trash-o"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </td>
                  <td class="align-middle">金牌西裝</td>
                  <td class="align-middle">1 件</td>
                  <td class="align-middle text-right">$520</td>
                </tr>
                <tr>
                  <td class="align-middle text-center">
                    <a
                      href="#removeModal"
                      class="text-muted"
                      data-toggle="modal"
                      data-title="刪除 金牌女裝 1 件"
                    >
                      <i
                        class="fa fa-trash-o"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </td>
                  <td class="align-middle">金牌女裝</td>
                  <td class="align-middle">1 件</td>
                  <td class="align-middle text-right">$480</td>
                </tr>
              </tbody>
            </table>
            <a
              href="shoppingCart-checkout.html"
              class="btn btn-primary btn-block"
            >
              <i
                class="fa fa-cart-plus"
                aria-hidden="true"
              ></i> 結帳去
            </a>
          </div>
        </div>

      </div>
    </nav>

  </div>
</template>



<script>
  export default {
    name: "Header"
  };
</script>