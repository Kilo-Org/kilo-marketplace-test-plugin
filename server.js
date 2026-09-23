import { appendFile } from "node:fs/promises"

export default {
  id: "kilo-marketplace-test-plugin",
  async server() {
    await appendFile(new URL("./loaded.log", import.meta.url), `${new Date().toISOString()}\n`)
    return {}
  },
}
