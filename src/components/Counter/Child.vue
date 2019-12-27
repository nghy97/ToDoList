<template>
  <div>
    <hr>
    Child: {{ count }}
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