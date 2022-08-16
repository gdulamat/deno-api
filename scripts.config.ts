
import { DenonConfig, env } from "./deps.ts";

const config: DenonConfig = {
  scripts: {
    start: {
      cmd: "deno run /src/app.ts",
      desc: "run my app.ts file",
      allow: [
        "net",
        "env",
      ],
      lock: "lock.json",
      env: env(),
    },
  },
};

export default config;