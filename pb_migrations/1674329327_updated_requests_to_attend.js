migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ftw6afvr2dbraf0")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qmpjdile",
    "name": "approved",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ftw6afvr2dbraf0")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qmpjdile",
    "name": "approved",
    "type": "bool",
    "required": true,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
