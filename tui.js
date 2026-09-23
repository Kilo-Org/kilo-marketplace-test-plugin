import { appendFile } from "node:fs/promises"

export default {
  id: "kilo-marketplace-test-plugin",
  async tui() {
    await appendFile(new URL("./tui-loaded.log", import.meta.url), `${new Date().toISOString()}\n`)
  },
}
