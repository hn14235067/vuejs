<template>
  <div>
    <Header />
    <div class="container">

      <div class="col-12 banner"></div>
      <div class="newsText">最新消息</div>
      <div class="list-group">
        <button
          type="button"
          class="list-group-item list-group-item-action "
        >
          Cras justo odio
        </button>
        <button
          type="button"
          class="list-group-item list-group-item-action"
        >Dapibus ac facilisis in</button>
        <button
          type="button"
          class="list-group-item list-group-item-action"
        >Morbi leo risus</button>
        <button
          type="button"
          class="list-group-item list-group-item-action"
        >Porta ac consectetur ac</button>
        <button
          type="button"
          class="list-group-item list-group-item-action"
          disabled
        >Vestibulum at eros</button>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
  import Header from "../../components/Header";
  import Footer from "../../components/Footer";

  export default {
    name: "News",
    data() {
      return {};
    },
    components: {
      Header,
      Footer
    }
  };
</script>

<style lang="scss" scoped>
  .banner {
    background: url("https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80")
      no-repeat center;
    width: 100%;
    height: 300px;
    margin-bottom: 20px;
  }
  .newsText {
    font-size: 20px;
    margin-bottom: 20px;
  }
  .list-group {
    font-size: 18px;
  }
</style>