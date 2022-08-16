# Deno based rest API
## Setup
1. Install Denon (https://github.com/denosaurs/denon)
`deno install -qAf --unstable https://deno.land/x/denon/denon.ts`
2. Install dependencies
`deno cache --reload --lock=lock.json deps.ts`
3. Run application
`denon start`

## Add dependencies
1. Add dependency import to `deps.ts`
2. Write lock file
`deno cache --lock=lock.json --lock-write deps.ts`