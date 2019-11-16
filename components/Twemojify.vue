<script>
import twemoji from 'twemoji'

export default {
  props: {
    emojis: {
      type: String,
      required: true
    }
  },
  render (h) {
    const twemojiHTML = twemoji.parse(this.emojis, {
      folder: 'svg',
      ext: '.svg'
    })

    return h('div', {
      domProps: {
        innerHTML: twemojiHTML
      }
    })
  }
}
</script>

<style>
 .emoji {
   @apply w-32 h-32;
 }
</style>
