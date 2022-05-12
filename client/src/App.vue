<template>
<h1>Mosaicofy</h1>
  <router-view/>
</template>

<style lang="scss">
h1 {
  padding: 20px 0;
  font-size: 3rem;
}
button {
  border: none;
  padding: 6px;
  font-size: 1.2rem;
  background-color: #000000EE;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #000;
  }
}
</style>
