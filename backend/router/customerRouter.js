import Router from "@koa/router";
import { save, get, getAll, update, deletePost } from "../api/customerApi.js";

const customerRouter = new Router({
  prefix: "/customers",
});

//POST Method
customerRouter.post("/", (ctx) => {
  const data = ctx.request.body;
  ctx.body = save(data);
  ctx.set("Content-Type", "application/json");
  ctx.status = 201;
});

//Get All Datas
customerRouter.get("/", (ctx) => {
  ctx.body = getAll();
  ctx.set("Content-Type", "application/json");
  ctx.status = 200;
});

//Get Data by ID
customerRouter.get("/:id", (ctx) => {
  const id = ctx.params.id;
  ctx.body = get(id);
  ctx.set("Content-Type", "application/json");
  ctx.status = 200;
});

//Update Data by ID
customerRouter.put("/:id", (ctx) => {
  const id = ctx.params.id;
  ctx.body = update(id, ctx.request.body);
  ctx.set("Content-Type", "application/json");
  ctx.status = 200;
});

//Delete Data by ID
customerRouter.del("/:id", (ctx) => {
  const id = ctx.params.id;
  deletePost(id);
  ctx.status = 204;
});
export default customerRouter;
