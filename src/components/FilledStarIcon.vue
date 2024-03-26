<template>
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        :width="width"
        :height="height"
        @mouseover="isHovered = true"
        @mouseleave="isHovered = false"
      >
      <title>star-outline</title>
        <path
            :fill="isHovered ? hoverColor : fillColor" 
            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
      </svg>

    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isHovered: false,
        fillColor: '#f08a1d',
        hoverColor: '#a96217', 
        width: 20,
        height: 20,
      };
    },
  };
  </script>