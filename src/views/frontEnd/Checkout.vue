<template>
  <div>
    <Header />
    <div class="container">
      <div class="row">
        <div class="col-md-10 offset-md-1">
          <div class="row">
            <div class="col-md-4 mb-2 mb-md-4">
              <div class="step active">資料填寫</div>
            </div>
            <div class="col-md-4 mb-2 mb-md-4">
              <div class="step">確認訂單</div>
            </div>
            <div class="col-md-4 mb-2 mb-md-4">
              <div class="step">完成</div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <div class="row mb-4">
            <div class="col-12">
              <div id="accordion">
                <div class="card">
                  <button
                    class="card-header btn btn-link d-flex justify-content-between"
                    id="headingOne"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <h5 class="mb-0">購物車清單</h5>
                    <div class="totalPrice">{{ finalTotal |currency }}</div>
                  </button>
                  <div
                    id="collapseOne"
                    class="collapse"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                  >
                    <div class="card-body p-0">
                      <table class="table mb-0">
                        <thead>
                          <tr>
                            <th width="20%"></th>
                            <th class="text-left">產品名稱</th>
                            <th class="text-center">單位</th>
                            <th class="text-right">價格</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            v-for="item in cartItems"
                            :key="item.id"
                          >
                            <td>
                              <img
                                :src="`${item.product.imageUrl}`"
                                :alt="`${ item.product.title }`"
                                class="img img-fluid cartImg"
                              />
                            </td>
                            <td class="text-left">
                              {{ item.product.title }}
                              <div
                                class="text-success"
                                v-if="item.coupon"
                              >
                                已套用優惠券
                              </div>
                            </td>
                            <td class="text-center">{{ item.qty }}/{{ item.product.unit }}</td>
                            <td class="text-right">{{ item.final_total }}</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <td
                              colspan="3"
                              class="text-right"
                            >合計：</td>
                            <td class="text-right">{{ finalTotal|currency }}</td>
                          </tr>
                          <tr v-if="cart.final_total !== cart.total">
                            <td
                              colspan="3"
                              class="text-right text-success"
                            >折扣價</td>
                            <td class="text-right text-success">{{ finalTotal|currency }}</td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                </div>
                <div class="input-group mt-4">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="輸入優惠代碼"
                    v-model="coupon_code"
                  />
                  <div class="input-group-append">
                    <button
                      class="btn btn-outline-secondary"
                      type="button"
                    >輸入優惠碼</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row mb-4">
            <div class="col-12">
              <form @submit.prevent="createOrder">
                <div class="form-group">
                  <label for="email">Email</label>
                  <input
                    class="form-control"
                    name="email"
                    id="email"
                    v-model="form.user.email"
                    v-validate="'required|email'"
                    placeholder="請輸入 Email"
                  />
                  <span
                    class="text-danger"
                    v-if="errors.has('email')"
                  >{{ errors.first('email') }}</span>
                </div>
                <div class="form-group">
                  <label for="userName">收件人姓名</label>
                  <input
                    class="form-control"
                    :class="{'is-invalid' : errors.has('name')}"
                    name="name"
                    id="userName"
                    v-model="form.user.name"
                    v-validate="'required'"
                    placeholder="請輸入姓名"
                  />
                  <span
                    class="text-danger"
                    v-if="errors.has('name')"
                  >姓名必須輸入</span>
                </div>
                <div class="form-group">
                  <label for="userTel">收件人電話</label>
                  <input
                    class="form-control"
                    :class="{'is-invalid' : errors.has('tel')}"
                    name="tel"
                    id="userTel"
                    v-model="form.user.tel"
                    v-validate="'required'"
                    placeholder="請輸入電話"
                  />
                  <span
                    class="text-danger"
                    v-if="errors.has('tel')"
                  >電話必須輸入</span>
                </div>
                <div class="form-group">
                  <label for="userAdd">收件人地址</label>
                  <input
                    class="form-control"
                    :class="{'is-invalid' : errors.has('address')}"
                    name="address"
                    id="userAdd"
                    v-model="form.user.address"
                    v-validate="'required'"
                    placeholder="請輸入地址"
                  />
                  <span
                    class="text-danger"
                    v-if="errors.has('address')"
                  >地址欄位不得留空</span>
                </div>
                <div class="form-group">
                  <label for="comment">留言</label>
                  <textarea
                    class="form-control"
                    id="comment"
                    v-model="form.message"
                    rows="10"
                  ></textarea>
                </div>

                <div class="text-right">
                  <router-link
                    to="/cus_products"
                    class="btn btn-secondary mr-4"
                  >繼續購物</router-link>
                  <button
                    type="submit"
                    class="btn btn-primary"
                  >送出訂單</button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Content -->
    <Footer />
  </div>
</template>

<script>
  import Header from "../../components/Header";
  import Footer from "../../components/Footer";

  export default {
    data() {
      return {
        cartItems: [],
        cart: {},
        finalTotal: 0,
        coupon_code: "",
        form: {
          user: {
            name: "",
            email: "",
            tel: "",
            address: ""
          },
          message: ""
        }
      };
    },
    components: {
      Header,
      Footer
    },
    methods: {
      getCart() {
        const vm = this;
        const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
        vm.$http.get(api).then(response => {
          vm.cartItems = response.data.data.carts;
          console.log(response.data.data.carts);
          vm.cartItems.forEach(item => {
            console.log(item);
            vm.finalTotal = vm.finalTotal + item.final_total;
          });
          console.log(vm.finalTotal);
        });
      },
      createOrder() {
        const vm = this;
        const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`;
        const order = vm.form;
        vm.isLoading = true;
        vm.$validator.validate().then(result => {
          if (result) {
            vm.$http.post(api, { data: order }).then(response => {
              console.log("訂單已建立", response);
              if (response.data.success) {
                vm.$router.push(`/checkout/${response.data.orderId}`);
              }
              vm.isLoading = false;
            });
          } else {
            console.log("欄位不完整");
          }
        });
      }
    },
    created() {
      this.getCart();
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../assets/all.scss";

  .step {
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    margin-top: 20px;
    color: $primary;
    border: 1px solid $primary;
    border-radius: 20px;
    &.active {
      background-color: $primary;
      color: white;
    }
  }

  .btn-below {
    margin-left: auto;
  }
</style>