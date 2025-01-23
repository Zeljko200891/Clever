<template>
    <div class="pagination">
    <span
        v-for="(dot, index) in totalPages" :key="index" :class="['dot', { active: index === (numberOfModal - 1) }]">
    </span>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      totalPages: {
        type: Number,
        required: true,
      },
      numberOfModal: {
        type: Number,
        required: true,
      },
    },
    emits: ['update:numberOfModal'],
  };
  </script>
  