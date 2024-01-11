import fastify, { FastifyInstance } from "fastify";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import { members } from "./alphaData";
import sqlitePlugin from "fastify-sqlite-typed";

const server = fastify({
  // querystringParser: qs.parse,
}).withTypeProvider<TypeBoxTypeProvider>();

server.register(sqlitePlugin, { dbFilename: "db/levelUpdb.sql3" });

server.get("/db/test", async (req, res) => {
  try {
    const data = await server.db.all(`SELECT * FROM food LIMIT 3`);
    return data;
  } catch (e) {
    return e;
  }
});

server.get("/", async (request, reply) => {
  return "Hello Alpha! 👋";
});

server.get("/members", async (request, reply) => {
  //@ts-ignore
  console.log(request.query.sortBy);
  return members;
});

server.post("/members", async (request, reply) => {
  console.log(request.body);
  return members;
});

server.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Started server at ${address}`);
});
