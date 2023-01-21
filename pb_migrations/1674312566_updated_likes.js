migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("touzbt8d05yv06x")

  collection.listRule = ""
  collection.viewRule = ""
  collection.createRule = "user.id = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("touzbt8d05yv06x")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null

  return dao.saveCollection(collection)
})
