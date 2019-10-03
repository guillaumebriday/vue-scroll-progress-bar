<template>
  <div
    :class="containerClass"
    :style="{
      background: containerColor,
      zIndex: zIndex
    }"
    @click="onClick($event)"
  >
    <div
      :class="barClass"
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

    zIndex: {
      type: String,
      default: "50"
    },

    backgroundColor: {
      type: String,
      default: "linear-gradient(to right, #38C172, #51D88A)"
    },

    containerColor: {
      type: String,
      default: "transparent"
    },

    barClass: {
      type: Object,
      default: () => {}
    },

    containerClass: {
      type: Object,
      default: () => {
        return {
          'progress-bar-container--container': true
        }
      }
    },

    onClick: {
      type: Function,
      default: () => {}
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
