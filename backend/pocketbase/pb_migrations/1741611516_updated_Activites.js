/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2427533966")

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "date2222527961",
    "max": "",
    "min": "",
    "name": "Date_activite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2427533966")

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "date2222527961",
    "max": "",
    "min": "",
    "name": "Date_activites",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
})
