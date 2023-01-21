migrate((db) => {
  const collection = new Collection({
    "id": "8fgjn5mijo9y5bt",
    "created": "2023-01-21 13:56:02.011Z",
    "updated": "2023-01-21 13:56:02.011Z",
    "name": "feelings",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "u20dcfer",
        "name": "value",
        "type": "select",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "like",
            "dislike"
          ]
        }
      },
      {
        "system": false,
        "id": "xey03htp",
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
        "id": "2iw4gizu",
        "name": "event",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "xheua34s3quf6s7",
          "cascadeDelete": true
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "user.id = @request.auth.id",
    "updateRule": "user.id = @request.auth.id",
    "deleteRule": "user.id = @request.auth.id",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("8fgjn5mijo9y5bt");

  return dao.deleteCollection(collection);
})
