<template>
  <div>
    <Header />
    <div class="container">
      <div class="row">
        <div class="col-12 banner"></div>
        <div class="about">
          <p>關於我們</p>
        </div>
        <div class="col-12 introImg"></div>
        <div class="aboutText">
          <p>
            寵物店是從事買賣狗、貓、黃金鼠等各種寵物，及寵物日常食物、家居用具、設施的零售店。 在供應鏈中，寵物店的上游供應商是大量繁殖貓狗寵物的養殖場；而寵物店的顧客是喜愛寵物的消費者。也有一些是買寵物給子女作為禮物的家長，或是戀愛追求者買給朋友的禮物等。
          </p>
          <p>
            有些水族館是兼賣金魚、錦鯉的寵物店。而專賣寵物觀賞鳥、鸚鵡的寵物店，另外稱為雀仔店。 還有一些賣植物的也叫寵物店 例如 : 水植寵物店
          </p>
        </div>
      </div>
      <div class="cards">
        <div
          class="card"
          style="width: 18rem;"
        >
          <img
            src="https://picsum.photos/id/250/300/300"
            class="card-img-top"
            alt="..."
          >
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div
          class="card"
          style="width: 18rem;"
        >
          <img
            src="https://picsum.photos/id/251/300/300"
            class="card-img-top"
          >
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div
          class="card"
          style="width: 18rem;"
        >
          <img
            src="https://picsum.photos/id/252/300/300"
            class="card-img-top"
          >
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>

      </div>
    </div>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
  .banner {
    background: url("https://cdn.pixabay.com/photo/2017/07/16/07/50/imprint-2508603_960_720.jpg")
      no-repeat center;
    width: 100%;
    height: 300px;
    margin-bottom: 20px;
  }
  .about {
    font-size: 30px;
    font-weight: bold;
    margin: auto;
  }

  .aboutText {
    font-size: 16px;
    font-weight: bold;
    width: 80%;
    margin: auto;
    letter-spacing: 1px;
  }
  .cards {
    display: flex;
    margin: auto;
    justify-content: space-around;
  }
</style>

<script>
  import Header from "../../components/Header";
  import Footer from "../../components/Footer";

  export default {
    name: "About",
    data() {
      return {};
    },
    components: {
      Header,
      Footer
    }
  };
</script>