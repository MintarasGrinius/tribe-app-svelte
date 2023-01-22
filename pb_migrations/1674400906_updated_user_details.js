migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fcld4qkhzx17hfl")

  collection.listRule = ""
  collection.createRule = "user.id = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fcld4qkhzx17hfl")

  collection.listRule = null
  collection.createRule = null

  return dao.saveCollection(collection)
})
