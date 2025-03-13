/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2452428166")

  // add field
  collection.fields.addAt(7, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2452428166",
    "hidden": false,
    "id": "relation1090729795",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "Activite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2452428166")

  // remove field
  collection.fields.removeById("relation1090729795")

  return app.save(collection)
})
