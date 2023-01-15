migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xheua34s3quf6s7")

  collection.viewRule = "@request.auth.id != \"\""
  collection.updateRule = "owner.id = @request.auth.id"
  collection.deleteRule = "owner.id = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xheua34s3quf6s7")

  collection.viewRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
