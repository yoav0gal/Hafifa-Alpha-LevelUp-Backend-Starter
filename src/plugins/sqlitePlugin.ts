import fp from "fastify-plugin";
import sqlite, { open } from "sqlite";
import sqlite3, { Database } from "sqlite3";

// Define options for your plugin
interface SQLiteOptions {
  file: string;
}

// Extend FastifyInstance with your database
declare module "fastify" {
  interface FastifyInstance {
    db: sqlite.Database;
  }
}

// Plugin to add SQLite support
const sqlitePlugin = fp<SQLiteOptions>(async (server, options) => {
  const db = await open({
    filename: options.file,
    mode: sqlite3.OPEN_READWRITE,
    driver: Database,
  });

  server.decorate("db", db);

  server.addHook("onClose", async (fastifyInstance) => {
    await fastifyInstance.db.close();
  });
});

export default sqlitePlugin;
