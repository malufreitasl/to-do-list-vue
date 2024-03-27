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
        <title>arrow-up-bold-box-outline</title>
            <path 
            :fill="isHovered ? hoverColor : fillColor"
            d="M19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21M12,7L7,12H10V16H14V12H17L12,7Z"  />
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
        width: 20,
        height: 20,
      };
    },
  };
  </script>
  