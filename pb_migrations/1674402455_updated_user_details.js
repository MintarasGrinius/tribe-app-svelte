migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fcld4qkhzx17hfl")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vn0aoaw8",
    "name": "phone_number",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 999999999999
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fcld4qkhzx17hfl")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
