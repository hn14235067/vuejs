<template>
  <div>
    <Header />

    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleCaptions"
          data-slide-to="0"
          class="active"
        ></li>
        <li
          data-target="#carouselExampleCaptions"
          data-slide-to="1"
        ></li>
        <li
          data-target="#carouselExampleCaptions"
          data-slide-to="2"
        ></li>
      </ol>
      <div class="carousel-inner mb-4">
        <div class="carousel-item active">
          <img
            src="https://picsum.photos/id/237/1200/300"
            class="d-block w-100"
          >
          <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://picsum.photos/id/238/1200/300"
            class="d-block w-100"
          >
          <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://picsum.photos/id/239/1200/300"
            class="d-block w-100"
          >
          <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="prev"
      >
        <span
          class="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="next"
      >
        <span
          class="carousel-control-next-icon"
          aria-hidden="true"
        ></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <div class="container main-contant mb-1">
      <div class="row">
        <div class="col-md-3">
          <!-- 左側選單 (List group) -->
          <div class="list-group sticky-top">
            <a
              class="list-group-item list-group-item-action active"
              data-toggle="list"
              href="#list-gold"
            >
              <i
                class="fa fa-suitcase"
                aria-hidden="true"
              ></i> 金牌專賣店</a>
            <a
              class="list-group-item list-group-item-action"
              data-toggle="list"
              href="#list-gift"
            >
              <i
                class="fa fa-gift"
                aria-hidden="true"
              ></i> 禮品區</a>
            <a
              href="#"
              class="list-group-item list-group-item-action disabled"
            >
              <i
                class="fa fa-film"
                aria-hidden="true"
              ></i> 影音商品</a>
            <a
              href="#"
              class="list-group-item list-group-item-action disabled"
            >
              <i
                class="fa fa-paw"
                aria-hidden="true"
              ></i> 寵物專用</a>
            <a
              href="#"
              class="list-group-item list-group-item-action disabled"
            >
              <i
                class="fa fa-tree"
                aria-hidden="true"
              ></i> 居家環境</a>
          </div>
        </div>
        <div class="col-md-9">
          <div class="d-flex mb-4">
            <!-- Search bar -->
            <form class="form-inline my-3 my-lg-0">
              <div class="input-group">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                >
                <div class="input-group-append">
                  <button
                    class="btn btn-outline-warning"
                    type="submit"
                  >
                    <i
                      class="fa fa-search"
                      aria-hidden="true"
                    ></i> Search</button>
                </div>
              </div>
            </form>
          </div>
          <!-- 主要商品列表 (Card) -->
          <div class="tab-content">
            <div
              class="tab-pane active"
              id="list-gold"
            >
              <div class="row">
                <!-- 金牌 -->
                <div class="col-md-4 mb-4">
                  <div class="card border-0 box-shadow text-center h-100">
                    <img
                      class="card-img-top"
                      src="https://images.unsplash.com/photo-1494281258937-45f28753affd?w=1350"
                      alt="Card image cap"
                    >
                    <div class="card-body">
                      <h4 class="card-title">金牌西裝</h4>
                      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content
                        is a little bit longer.</p>

                    </div>
                    <div class="card-footer border-top-0 bg-white">
                      <div class="btn-group btn-group-sm">
                        <a
                          href="shoppingCart-product.html"
                          class="btn btn-outline-secondary"
                        >
                          SM
                        </a>
                        <a
                          href="shoppingCart-product.html"
                          class="btn btn-outline-secondary"
                        >
                          M
                        </a>
                        <a
                          href="shoppingCart-product.html"
                          class="btn btn-outline-secondary disabled"
                        >
                          L
                        </a>
                        <a
                          href="shoppingCart-product.html"
                          class="btn btn-outline-secondary"
                        >
                          XL
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 mb-4">
                  <div class="card border-0 box-shadow text-center h-100">
                    <img
                      class="card-img-top"
                      src="https://images.unsplash.com/photo-1481399124169-87493351c8a1?w=1349"
                      alt="Card image cap"
                    >
                    <div class="card-body">
                      <h4 class="card-title">金牌女裝</h4>
                      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content
                        is a little bit longer.</p>
                    </div>
                    <div class="card-footer border-top-0 bg-white">
                      <div class="btn-group btn-group-sm">
                        <a
                          href="#"
                          class="btn btn-outline-secondary"
                        >
                          SM
                        </a>
                        <a
                          href="#"
                          class="btn btn-outline-secondary"
                        >
                          M
                        </a>
                        <a
                          href="#"
                          class="btn btn-outline-secondary"
                        >
                          L
                        </a>
                        <a
                          href="#"
                          class="btn btn-outline-secondary"
                        >
                          XL
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 mb-4">
                  <div class="card border-0 box-shadow text-center h-100">
                    <img
                      class="card-img-top"
                      src="https://images.unsplash.com/photo-1486250944723-86bca2b15b06?w=1351"
                      alt="Card image cap"
                    >
                    <div class="card-body">
                      <h4 class="card-title">特工眼鏡</h4>
                      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content
                        is a little bit longer.</p>
                    </div>
                    <div class="card-footer border-top-0 bg-white">
                      <a
                        href="#"
                        class="btn btn-outline-secondary btn-block btn-sm"
                      >
                        <i
                          class="fa fa-cart-plus"
                          aria-hidden="true"
                        ></i> 搶購去
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 mb-4">
                  <div class="card border-0 box-shadow text-center h-100">
                    <img
                      class="card-img-top"
                      src="https://images.unsplash.com/photo-1497339100210-9e87df79c218?w=1350"
                      alt="Card image cap"
                    >
                    <div class="card-body">
                      <h4 class="card-title">特工西裝</h4>
                      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content
                        is a little bit longer.</p>
                    </div>
                    <div class="card-footer border-top-0 bg-white">
                      <a
                        href="#"
                        class="btn btn-outline-secondary btn-block btn-sm"
                      >
                        <i
                          class="fa fa-cart-plus"
                          aria-hidden="true"
                        ></i> 搶購去
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 mb-4">
                  <div class="card border-0 box-shadow text-center h-100">
                    <img
                      class="card-img-top"
                      src="https://images.unsplash.com/photo-1485373650022-3ed53f62b8f3?w=634"
                      alt="Card image cap"
                    >
                    <div class="card-body">
                      <h4 class="card-title">變聲領帶</h4>
                      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content
                        is a little bit longer.</p>
                    </div>
                    <div class="card-footer border-top-0 bg-white">
                      <a
                        href="#"
                        class="btn btn-outline-secondary btn-block btn-sm disabled"
                      >
                        缺貨中
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <!-- pagination -->
              <nav
                aria-label="Page navigation"
                class="my-5"
              >
                <ul class="pagination justify-content-center">
                  <li class="page-item disabled">
                    <a
                      class="page-link"
                      href="#"
                      tabindex="-1"
                    >Previous</a>
                  </li>
                  <li class="page-item">
                    <a
                      class="page-link"
                      href="#"
                    >1</a>
                  </li>
                  <li class="page-item">
                    <a
                      class="page-link"
                      href="#"
                    >2</a>
                  </li>
                  <li class="page-item">
                    <a
                      class="page-link"
                      href="#"
                    >3</a>
                  </li>
                  <li class="page-item">
                    <a
                      class="page-link"
                      href="#"
                    >Next</a>
                  </li>
                </ul>
              </nav>
            </div>

            <div
              class="tab-pane"
              id="list-gift"
            >
              <div class="row align-items-stretch">
                <!-- 禮品 -->
                <div class="col-md-4 mb-4">
                  <div class="card border-0 box-shadow text-center h-100">
                    <img
                      class="card-img-top"
                      src="https://images.unsplash.com/photo-1482173074468-5b323335debe?w=1350"
                      alt="Card image cap"
                    >
                    <div class="card-body">
                      <h4 class="card-title">超精緻禮物</h4>
                      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content
                        is a little bit longer.</p>
                    </div>
                    <div class="card-footer border-top-0 bg-white">
                      <a
                        href="#"
                        class="btn btn-outline-secondary btn-block btn-sm"
                      >
                        <i
                          class="fa fa-cart-plus"
                          aria-hidden="true"
                        ></i> 搶購去
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- tab-content end -->

        </div>

      </div>
    </div>
    <div
      class="modal fade"
      id="removeModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        class="modal-dialog"
        role="document"
      >
        <div class="modal-content">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title">刪除商品</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>是否確認刪除商品</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >否</button>
            <button
              type="button"
              class="btn btn-outline-danger px-5"
            >是</button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style>
</style>

<script>
  import Header from "../../components/Header";
  import Footer from "../../components/Footer";
  import CusProducts from "../frontEnd/CusProducts";

  export default {
    components: {
      Header,
      Footer,
      CusProducts
    },
    data() {
      return {
        productId: ""
      };
    }
  };
</script>