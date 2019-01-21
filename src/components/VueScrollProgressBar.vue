<template>
  <div
    class="progress-bar-container--container"
    :style="{ background: containerColor }"
  >
    <div
      :style="{
        width: `${width}%`,
        height: height,
        background: backgroundColor
      }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "VueScrollProgressBar",

  props: {
    height: {
      type: String,
      default: ".5rem"
    },

    backgroundColor: {
      type: String,
      default: "linear-gradient(to right, #38C172, #51D88A)"
    },

    containerColor: {
      type: String,
      default: "transparent"
    }
  },

  data() {
    return {
      width: 0
    }
  },

  methods: {
    handleScroll() {
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      this.width = (window.scrollY / height) * 100
      const eventWidth = Math.ceil(this.width)

      if (eventWidth === 0) {
        this.$emit("begin")
      }

      if (eventWidth === 100) {
        this.$emit("complete")
      }
    }
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll)
    window.dispatchEvent(new Event("scroll"))
  },

  destroyed() {
    window.removeEventListener("scroll", this.handleScroll)
  }
}
</script>

<style scoped>
.progress-bar-container--container {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
}
</style>
