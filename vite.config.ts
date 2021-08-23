import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

function buildPathAlias(aliasList: Record<string, string>) {
  const result: Record<string, string> = {}
  for (const alias in aliasList) {
    result[alias] = resolve(__dirname, aliasList[alias])
  }
  return result
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: buildPathAlias({
      "@": "src",
      "@components": "src/components",
      "@assets": "src/assets",
      "@plugins": "src/plugins",
      "@utils": "src/utils",
      "@views": "src/views",
      "@hooks": "src/hooks"
    })
  }
})
