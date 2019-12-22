<template>
  <div>
    <h1 class="text-center mt-8 text-5xl">
      SongMoji
    </h1>
    <h2 v-if="!state.hasStarted" class="text-center text-2xl mt-2">
      Music and Emojis - what a combination
    </h2>
    <div v-if="!state.hasStarted" class="my-16 text-xl">
      <p>
        You compete <strong>in teams</strong> against each other. Every team has exactly <strong>one controller</strong>, which is the team's own "buzzer".
      </p>
      <p>
        <strong>The goal of the game</strong> is to guess the <strong>title</strong> of the correct song by interpreting the Emojis shown on the screen.
      </p>
      <br>
      <p>
        The team who pushes the <strong>buzzer button (X or A) first</strong>, is allowed to answer the question in the next
        <strong>five seconds</strong>.<br><br>
        Is the answer <strong class="bg-green-500">correct</strong>, the team receives points based on the difficulty of the song (Hard=5, Medium=2, Easy=1).<br>
        If the answer is <strong class="bg-red-500">wrong</strong> though, the team receives a minus point.
      </p>
      <br>
      <p>
        Only the first answer of the team will be accepted. Just the title of a song is required, not the interpret.
      </p>
      <br>
      <p>
        There are various difficulties and categories, which are totally random though.
      </p>
    </div>
    <div v-if="!state.hasStarted" class="mt-8 flex justify-center items-center">
      <button @click="startQuiz" class="bg-green-700 py-2 px-16 text-white">
        Start SongMoji
      </button>
    </div>
    <QuizComponent v-if="state.hasStarted" />
  </div>
</template>

<script>
import { createComponent, reactive } from '@vue/composition-api'
import Quiz from '~/components/Quiz.vue'

export default createComponent({
  components: {
    QuizComponent: Quiz
  },
  setup () {
    const state = reactive({
      hasStarted: false
    })

    function startQuiz () {
      state.hasStarted = true
    }

    return {
      state,
      startQuiz
    }
  }
})
</script>
