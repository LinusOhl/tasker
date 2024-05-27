import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { prettyJSON } from "hono/pretty-json";

const app = new Hono();
const port = 3000;
console.log(`Server is running on port ${port}`);
serve({
  fetch: app.fetch,
  port,
});

app.use(prettyJSON());
app.use(cors());
app.notFound((c) => c.json({ message: "Not found", ok: false }, 404));

// routes
