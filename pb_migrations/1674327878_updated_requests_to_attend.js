migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ftw6afvr2dbraf0")

  collection.createRule = "@request.auth.id = user.id"
  collection.updateRule = "@request.auth.id = event.owner.id"
  collection.deleteRule = "@request.auth.id = user.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ftw6afvr2dbraf0")

  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
