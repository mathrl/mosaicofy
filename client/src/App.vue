<template>
  <router-view/>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: monospace;
  text-align: center;
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
  background-color: #141414;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #000;
  }
}
</style>
