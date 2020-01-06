<template>
  <div>
    <GlobalEvents
      @keyup.u="addPoints(0,1)"
      @keyup.i="addPoints(1,1)"
      @keyup.o="addPoints(2,1)"
      @keyup.p="addPoints(3,1)"
      @keyup.j="addPoints(0,-1)"
      @keyup.k="addPoints(1,-1)"
      @keyup.l="addPoints(2,-1)"
      @keyup.ö="addPoints(3,-1)"
    />
    <ol v-if="gamepadsWithButtons.length" class="flex justify-around">
      <li v-for="(gamepad) in gamepadsWithButtons" v-if="gamepad !== null" :class="[teamClass[gamepad.index], isButtonAPushed(gamepad) ? 'bg-green-500' : '' ]">
        <span>Team {{ gamepad.index + 1 }}</span>
        -
        <span>{{ state.teamPoints[gamepad.index] }} Point{{ state.teamPoints[gamepad.index] === 1 ? '' : 's' }}</span>
      </li>
      <li v-else>
        Disconnected
      </li>
    </ol>
    <div v-else>
      No gamepads detected yet
    </div>
  </div>
</template>

<script>
import GlobalEvents from 'vue-global-events'
import { reactive, watch } from '@vue/composition-api'
import { useGamepadButtonPushed } from '~/compositions/use-gamepad-button-pushed'

export default {
  components: {
    GlobalEvents
  },
  setup () {
    const teamClass = [
      'text-purple-700',
      'text-orange-700',
      'text-teal-700',
      'text-blue-700'
    ]

    const state = reactive({
      teamPoints: []
    })

    const { gamepadsWithButtons, isButtonAPushed } = useGamepadButtonPushed()

    watch(gamepadsWithButtons, (newPads) => {
      if (!newPads) {
        return
      }

      if (state.teamPoints.length >= newPads.length) {
        return
      }

      state.teamPoints = state.teamPoints.concat(Array.from({ length: newPads.length - state.teamPoints.length }, () => 0))
    })

    function addPoints (teamIndex, pointsToAdd) {
      state.teamPoints[teamIndex] = state.teamPoints[teamIndex] + pointsToAdd
    }

    return {
      addPoints,
      state,
      gamepadsWithButtons, // TODO: RESET
      teamClass,
      isButtonAPushed
    }
  }
}
</script>
