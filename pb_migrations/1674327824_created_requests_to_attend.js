migrate((db) => {
  const collection = new Collection({
    "id": "ftw6afvr2dbraf0",
    "created": "2023-01-21 19:03:44.847Z",
    "updated": "2023-01-21 19:03:44.847Z",
    "name": "requests_to_attend",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "yye6ojze",
        "name": "user",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": true
        }
      },
      {
        "system": false,
        "id": "ycrhojrs",
        "name": "event",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "xheua34s3quf6s7",
          "cascadeDelete": true
        }
      },
      {
        "system": false,
        "id": "qmpjdile",
        "name": "approved",
        "type": "bool",
        "required": true,
        "unique": false,
        "options": {}
      }
    ],
    "listRule": "@request.auth.id != \"\"",
    "viewRule": "@request.auth.id != \"\"",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ftw6afvr2dbraf0");

  return dao.deleteCollection(collection);
})
