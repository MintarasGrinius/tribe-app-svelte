migrate((db) => {
  const collection = new Collection({
    "id": "ksqhzvmtnfks7me",
    "created": "2023-01-10 18:40:22.646Z",
    "updated": "2023-01-10 18:40:22.646Z",
    "name": "test",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "cyxpgulg",
        "name": "field",
        "type": "file",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": []
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ksqhzvmtnfks7me");

  return dao.deleteCollection(collection);
})
