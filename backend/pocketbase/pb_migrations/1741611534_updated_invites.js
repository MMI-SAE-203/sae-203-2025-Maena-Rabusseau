/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2452428166")

  // update collection data
  unmarshal({
    "name": "Invites"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2452428166")

  // update collection data
  unmarshal({
    "name": "invites"
  }, collection)

  return app.save(collection)
})
