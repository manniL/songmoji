<template>
  <div>
    <h1 class="text-center mt-8 text-5xl">
      SongMoji
    </h1>
    <h2 v-if="!state.hasStarted" class="text-center text-2xl mt-2">
      Musik und Hieroglyphen - was für eine Kombination
    </h2>
    <div v-if="!state.hasStarted" class="my-16 text-xl">
      <p>
        Ihr tretet <strong>in Teams</strong> gegeneinander an. Jedes Team hat genau <strong>einen Controller</strong>, der als Buzzer dient.
      </p>
      <p>
        <strong>Ziel des Spiels</strong> ist es, den <strong>Titel</strong> des gesuchten Songs anhand der gezeigten
        Emojis zu erraten.
      </p>
      <br>
      <p>
        Das Team, das als erstes den <strong>unteren rechten Knopf (X oder A) drückt</strong>, muss innerhalb von
        <strong>fünf Sekunden</strong> eine Antwort geben.<br><br>
        Ist diese Antwort <strong class="bg-green-500">richtig</strong>, gibt es Punkte für das Team abhängig vom Schwierigkeitsgrad (Hard=5, Medium=2, Easy=1).<br>
        Ist die Antwort <strong class="bg-red-500">falsch</strong>, gibt es einen Minuspunkt und das Team was als nächstes gebuzzert hat, darf eine Antwort gegeben, jedoch ohne Strafe bei falscher Antwort.
      </p>
      <br>
      <p>
        Nur die erste Antwort des Teams wird akzeptiert. Der Titel des Songs reicht als Antwort aus.
      </p>
      <br>
      <p>
        Natürlich gibt es verschiedene Schwierigkeitsgrade und auch Kategorien bei den Songs. Die Reihenfolge ist jedoch zufällig.
      </p>
    </div>
    <div v-if="!state.hasStarted" class="mt-8 flex justify-center items-center">
      <button @click="startQuiz" class="bg-green-700 py-2 px-16 text-white ">
        Songmoji starten
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
