migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xheua34s3quf6s7")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "udxswyis",
    "name": "owner",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xheua34s3quf6s7")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
