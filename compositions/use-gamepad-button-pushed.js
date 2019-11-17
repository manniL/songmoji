import { onMounted, onUnmounted, reactive, toRefs } from '@vue/composition-api'

const BUTTON_NAMES = ['A', 'B', 'X', 'Y']

function buttonsPushed (gamepad) {
  if (!gamepad || !gamepad.buttons) {
    return {}
  }

  const buttonsPushed = gamepad.buttons
    .map((button, index) => ({ name: BUTTON_NAMES[index], button }))
    .filter(({ button }) => (typeof (button) === 'object' && button.pressed) || button === 1)

  return {
    index: gamepad.index,
    buttonsPushed
  }
}

export function useGamepadButtonPushed () {
  const state = reactive({
    gamepadsWithButtons: []
  })

  let start = false

  function updateGamepads (gamepads) {
    state.gamepadsWithButtons = gamepads.map(buttonsPushed)
  }

  function startGameLoop () {
    if (start) {
      return
    }
    gameLoop()
  }

  function stopGameLoop () {
    if (!start) {
      return
    }

    const areStillGamepadsConnected = Boolean(navigator.getGamepads().length)

    if (areStillGamepadsConnected) {
      return
    }

    window.cancelAnimationFrame(start)
    start = false
  }

  function gameLoop () {
    const gamepads = navigator.getGamepads()

    if (!gamepads) {
      return
    }

    updateGamepads(gamepads)

    start = window.requestAnimationFrame(gameLoop)
  }

  // Try to start if gamepads are available already
  startGameLoop()

  onMounted(() => {
    window.addEventListener('gamepadconnected', startGameLoop)
    window.addEventListener('gamepaddisconnected', stopGameLoop)
  })

  onUnmounted(() => {
    window.removeEventListener('gamepadconnected', startGameLoop)
    window.removeEventListener('gamepaddisconnected', stopGameLoop)
  })

  function isButtonAPushed (gamepad) {
    return gamepad.buttonsPushed && gamepad.buttonsPushed.find(button => button.name === 'A')
  }

  return { ...toRefs(state), isButtonAPushed }
}
