<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container" ref="target">
        <div class="modal-header">
          <slot name="header"></slot>
        </div>
        <div class="modal-body" :class="{ 'custom-body-style': customStyle }">
          <slot name="content"></slot>
        </div>
        <div class="modal-footer">
          <slot name="footer">
            <div class="button-wrapper">
              <p class="skip content-paragraph" @click.stop="$emit('modal-close')">Spring over</p>
              <button @click.stop="$emit('next')" class="button-icon">Kom i gang<img src="../assets/imgs/arrow-next.svg"></button>
            </div>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    customStyle: {
      type: Boolean,
      default: false,
    },
  },
};
</script>