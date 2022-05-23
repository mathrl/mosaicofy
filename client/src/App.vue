<template>
  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;700&display=swap");

$black: #141414;

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "EB Garamond", serif;
  text-align: center;
}

body {
    color: $black;
}

h1 {
  padding: 20px 0;
  font-size: 3rem;
}
h3 {
  margin-bottom: 20px;
}

button {
  border: none;
  padding: 13px;
  font-size: 1.2rem;
  background-color: $black;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #000;
  }
}
</style>
