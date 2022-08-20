import { Router } from '/deps.ts';

const usersEndpoints = new Router()
  .get("/", (ctx) => {
    ctx.response.body = `All users`;
  })
  .get("/:id", (ctx) => {
    ctx.response.body =
      `User ID: ${ctx.params.id}`;
  })
  .post("/", (ctx) => {
    ctx.response.body = `Create user resource`;
  })
  .patch("/:id", (ctx) => {
    ctx.response.body = `Update user resource`;
  })

const usersRouter = new Router()
  .use("/users", usersEndpoints.routes(), usersEndpoints.allowedMethods())

export default usersRouter