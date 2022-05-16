import Router from "@koa/router";
import {save, get, getAll, update, deletePost} from "../api/promotion.js";

const promoRouter = new Router({
  prefix: "/promo",
});

promoRouter.post("/", (ctx) => {
  const data = ctx.request.body;
  ctx.body = save(data);
  ctx.set("Content-Type", "application/json");
  ctx.status = 201;
});


promoRouter.get("/", (ctx) => {
  ctx.body = getAll();
  ctx.set("Content-Type", "application/json");
  ctx.status = 200;
});

promoRouter.get("/:id", (ctx) => {
  const id = ctx.params.id;
  ctx.body = get(id);
  ctx.set("Content-Type", "application/json");
  ctx.status = 200;
});

promoRouter.put("/:id", (ctx) => {
  const id = ctx.params.id;
  ctx.body = update(id, ctx.request.body);
  ctx.set("Content-Type", "application/json");
  ctx.status = 200;
});

promoRouter.del("/:id", (ctx) => {
  const id = ctx.params.id;
  deletePost(id);
  ctx.status = 204;
});
export default promoRouter;
