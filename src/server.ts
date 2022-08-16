import { Application } from '/deps.ts';

const app = new Application();

app.use((ctx) => {
  ctx.response.body = 'Hello World!';
});
try {
  const port = Number(Deno.env.get('PORT') || 3000);
  if (!isNaN(port)) {
    await app.listen({ port });
    console.log(`App listen at port: ${port}`);
  } else {
    console.error(`Invalid env variable for port: ${port}`);
  }
} catch (e) {
  console.error(e);
}
