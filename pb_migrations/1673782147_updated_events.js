migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xheua34s3quf6s7")

  collection.createRule = "owner.id = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xheua34s3quf6s7")

  collection.createRule = null

  return dao.saveCollection(collection)
})
