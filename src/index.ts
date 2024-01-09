import fastify, { FastifyInstance } from "fastify";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import { members } from "./alphaData";

const server = fastify({
  // querystringParser: qs.parse,
}).withTypeProvider<TypeBoxTypeProvider>();

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
