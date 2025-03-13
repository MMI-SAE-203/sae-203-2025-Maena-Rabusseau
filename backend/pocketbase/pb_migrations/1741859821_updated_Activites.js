/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2427533966")

  // remove field
  collection.fields.removeById("date2222527961")

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "select3359536966",
    "maxSelect": 1,
    "name": "Date_activite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "27 juin",
      "28 juin",
      "29 juin"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2427533966")

  // add field
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

  // remove field
  collection.fields.removeById("select3359536966")

  return app.save(collection)
})
