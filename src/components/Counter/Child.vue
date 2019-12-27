<template>
  <div>
    <hr>
    Child: {{ $store.state.count }}
    <br>
    <button>+</button>
    <button>-</button>
  </div>
</template>

<script>
export default {
  props: ["count"]
};
</script>