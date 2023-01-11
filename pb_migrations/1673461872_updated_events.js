migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xheua34s3quf6s7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xwtuveu6",
    "name": "photo",
    "type": "file",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/jpg",
        "image/jpeg",
        "image/png",
        "image/svg+xml",
        "image/gif"
      ],
      "thumbs": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "377bw2pz",
    "name": "type",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 3,
      "max": 20,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ij2fhhw9",
    "name": "theme",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 1,
      "max": 20,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xheua34s3quf6s7")

  // remove
  collection.schema.removeField("xwtuveu6")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
