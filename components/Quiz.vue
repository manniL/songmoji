<template>
  <div class="container text-center flex flex-col justify-center">
    <GlobalEvents
      @keyup.shift.s="showSongName"
    />
    <div class="text-sm text-gray-800">
      Song {{ songCount - songState.shuffledSongList.length }} / {{ songCount }}
    </div>

    <Twemojify
      v-if="songState.currentSong"
      :emojis="songState.currentSong.emojis"
      class="mt-16 h-32 flex justify-center flex-wrap -mx-32"
    />

    <template v-if="songState.isSongNameDisplayed">
      <span class="mt-16 text-4xl underline">{{ songState.currentSong.name }}</span>
      <span class="text-2xl mt-4">Difficulty: <span class="italic">{{ difficultyToWord(songState.currentSong.difficulty) }}</span></span>
      <span class="text-2xl">Categories: <span class="italic">{{ songState.currentSong.categories.map(categoryToWord).join(', ') }}</span></span>
    </template>
    <div class="flex flex-col mt-16">
      <span :class="i === 0 ? 'text-green-700' : ''" v-for="(team, i) in teamState.teamsPushed">
        Team {{ team.number }} pushed after {{ team.date }} seconds
      </span>
    </div>
    <div class="mt-32">
      <button
        @click="pullSong"
        v-if="!songState.isListExhausted"
        class="border bg-blue-800 text-white hover:bg-blue-700 px-3 py-2"
      >
        Nächster Song
      </button>
    </div>
  </div>
</template>

<script>
import { computed, createComponent, reactive, watch } from '@vue/composition-api'
import { shuffle } from 'lodash-es'
import GlobalEvents from 'vue-global-events'
import { songList, difficultyNumberToWord, categoryNumberToWord } from '~/assets/song-list.js'
import { useGamepadButtonPushed } from '~/compositions/use-gamepad-button-pushed'
import Twemojify from '~/components/Twemojify'

import catMeow from '~/assets/audio/cat-meow.mp3'
import dogBark from '~/assets/audio/dog-bark.mp3'
import dogToy from '~/assets/audio/dog-toy.mp3'
import kids from '~/assets/audio/kids.mp3'

const sounds = [catMeow, dogBark, dogToy, kids]

export default createComponent({
  components: {
    GlobalEvents,
    Twemojify
  },
  setup () {
    const songCount = songList.length
    const songState = reactive({
      shuffledSongList: shuffle(songList),
      currentSong: null,
      startTime: Date.now(),
      isSongNameDisplayed: false,
      isListExhausted: computed(() => songState.shuffledSongList.length === 0)
    })

    const teamState = reactive({
      teamsPushed: []
    })

    function pullSong () {
      if (!songState.shuffledSongList.length) {
        return
      }
      songState.isSongNameDisplayed = false
      teamState.teamsPushed = []

      songState.currentSong = songState.shuffledSongList.pop()
      songState.startTime = Date.now()
    }

    function showSongName () {
      songState.isSongNameDisplayed = true
    }

    function difficultyToWord (n) {
      return difficultyNumberToWord(n)
    }

    function categoryToWord (n) {
      return categoryNumberToWord(n)
    }

    const { gamepadsWithButtons, isButtonAPushed } = useGamepadButtonPushed()

    watch(gamepadsWithButtons, (newValue) => {
      newValue.forEach((gamepad) => {
        if (!isButtonAPushed(gamepad)) {
          return
        }
        const numberFromPushedTeam = gamepad.index + 1

        if (teamState.teamsPushed.every(team => team.number !== numberFromPushedTeam)) {
          new Audio(sounds[gamepad.index]).play()
          teamState.teamsPushed.push({
            number: numberFromPushedTeam,
            date: Number((Date.now() - songState.startTime) / 1000).toFixed(4)
          })
        }
      })
    })

    pullSong()

    return {
      songState,
      teamState,
      songCount,
      showSongName,
      pullSong,
      difficultyToWord,
      categoryToWord
    }
  }
})
</script>
