migrate((db) => {
  const collection = new Collection({
    "id": "xheua34s3quf6s7",
    "created": "2023-01-09 16:45:34.011Z",
    "updated": "2023-01-09 16:45:34.011Z",
    "name": "events",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fcv0p2ym",
        "name": "field",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 3,
          "max": 50,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "miq1pdzz",
        "name": "description",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 20,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "c3a4aqzp",
        "name": "location",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "cycps7nk",
        "name": "date",
        "type": "date",
        "required": true,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "377bw2pz",
        "name": "type",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 3,
          "max": 20,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ij2fhhw9",
        "name": "theme",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": 20,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "udxswyis",
        "name": "user",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": true
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
  const collection = dao.findCollectionByNameOrId("xheua34s3quf6s7");

  return dao.deleteCollection(collection);
})
