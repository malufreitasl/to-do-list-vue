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
        <title>check-bold</title>
            <path 
            :fill="isHovered ? hoverColor : fillColor"
            d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" /> />
        </svg>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isHovered: false,
        fillColor: '#002C4F',
        hoverColor: '#3A4046', 
        width: 10,
        height: 10,
      };
    },
  };
  </script>
  