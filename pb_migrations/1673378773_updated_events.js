migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xheua34s3quf6s7")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fcv0p2ym",
    "name": "title",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 3,
      "max": 50,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xheua34s3quf6s7")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
