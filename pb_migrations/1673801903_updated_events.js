migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xheua34s3quf6s7")

  collection.listRule = "@request.auth.id != \"\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xheua34s3quf6s7")

  collection.listRule = null

  return dao.saveCollection(collection)
})
