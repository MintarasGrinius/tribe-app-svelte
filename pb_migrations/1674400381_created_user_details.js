migrate((db) => {
  const collection = new Collection({
    "id": "fcld4qkhzx17hfl",
    "created": "2023-01-22 15:13:01.334Z",
    "updated": "2023-01-22 15:13:01.334Z",
    "name": "user_details",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vn0aoaw8",
        "name": "phone_number",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": 6,
          "max": 12
        }
      },
      {
        "system": false,
        "id": "ujqwsp6p",
        "name": "date_of_birth",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "tmccphuf",
        "name": "instagram",
        "type": "url",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "b2gpsiki",
        "name": "facebook",
        "type": "url",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "xksbagbd",
        "name": "description",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "pdasx8d7",
        "name": "user",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false
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
  const collection = dao.findCollectionByNameOrId("fcld4qkhzx17hfl");

  return dao.deleteCollection(collection);
})
