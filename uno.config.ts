import presetIcons from '@unocss/preset-icons'
import presetUno from '@unocss/preset-uno'
import { defineConfig } from 'unocss'
import presetAttributify from '@unocss/preset-attributify'

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetAttributify({ /* preset options */ }),
    presetIcons(),
    presetUno(),
    // ...
  ],
})