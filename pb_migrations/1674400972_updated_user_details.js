migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fcld4qkhzx17hfl")

  collection.listRule = "@request.auth.id != \"\""
  collection.viewRule = "@request.auth.id != \"\""
  collection.updateRule = "user.id = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fcld4qkhzx17hfl")

  collection.listRule = null
  collection.viewRule = null
  collection.updateRule = null

  return dao.saveCollection(collection)
})
