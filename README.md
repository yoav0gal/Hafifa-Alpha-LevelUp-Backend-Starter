# LevelUp backend

A basic Fastify starter project for the LevelUp project

## Includs

A Sqlite nutrition DB, connected via the a plugin.

**use exmple**

```TS
server.get("/db/test", async (req, res) => {
  try {
    const data = await server.db.all(`SELECT * FROM food LIMIT 3`);
    return data;
  } catch (e) {
    return e;
  }
});


```

REFRENCES:

[sqlLite API](https://github.com/TryGhost/node-sqlite3/wiki/API) - Basicly this api but with promise support.
READMORE - here https://github.com/kriasoft/node-sqlite

[View Db](https://sqliteonline.com/)
