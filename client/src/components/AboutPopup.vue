<template>
  <p id="about-link" class="link" @click="open = true">About</p>

  <div id="about" v-if="open">
    <div>
      <p>
        Made by
        <a
          href="https://www.linkedin.com/in/matheus-leite-87843216b/"
          target="_blank"
          >Matheus Leite</a
        >
        <br />

        <a class="donation" @click="donation = 'pix: 51999639004'">PIX</a>
        <a
          class="donation"
          href="https://www.paypal.com/donate/?hosted_button_id=V3MHLY7QKLS7U"
          target="_blank"
          >Paypal</a
        >
        <span>{{ donation }}</span
        ><br />
        I do not save any of your data.
      </p>
      <p id="paymentInfo"></p>
      <p>
        The source code to this project is available
        <a target="_blank" href="https://github.com/mathrl/mosaicofy">here</a>.
      </p>
      <button @click="open = false">X</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      donation: "",
    };
  },
};
</script>

<style scoped lang="scss">
p {
  margin-bottom: 15px;
  line-height: 1.5rem;
}

a.donation:not(:last-child) {
  margin-right: 8px;
}

p#about-link {
  font-size: 0.9rem;
  text-decoration: underline;
  cursor: pointer;
  margin-top: 5px;
}

div#about {
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);

  > div {
    margin: 0 auto;
    padding: 30px;
    background-color: white;
    max-width: 90%;
  }
}
</style>
