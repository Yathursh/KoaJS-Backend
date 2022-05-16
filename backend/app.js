import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "@koa/cors";


import customerRouter from "./router/customerRouter.js";
import cartRouter from "./router/cartRouter.js";
import itemRouter from "./router/itemRouter.js";
import promoRouter from "./router/promoRouter.js";

const app = new Koa();
app.use(bodyParser());
app.use(cors());
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.statusCode || err.status || 400;
    ctx.body = {
      message: err.message,
    };
  }
});

app.use(customerRouter.routes()).use(customerRouter.allowedMethods());
app.use(cartRouter.routes()).use(cartRouter.allowedMethods());
app.use(itemRouter.routes()).use(itemRouter.allowedMethods());
app.use(promoRouter.routes()).use(promoRouter.allowedMethods());

app.use((ctx) => {
  ctx.set("Content-Type", "text/html");
  ctx.body = `<h3>Not Found</h3>`;
  ctx.status = 404;
});

app.listen(3000, () => {
  console.log("Server is running...");
});