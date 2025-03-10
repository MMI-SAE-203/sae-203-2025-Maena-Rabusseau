/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2427533966")

  // add field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "select753727511",
    "maxSelect": 1,
    "name": "Type",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Atelier",
      "Yoga",
      "Débat"
    ]
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3950563313",
    "max": 0,
    "min": 0,
    "name": "Description",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "select2405814887",
    "maxSelect": 1,
    "name": "Lieu",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Salle créative",
      "Grand Cinéma",
      "Espace enfant",
      "Salle détente"
    ]
  }))

  // add field
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
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2427533966")

  // remove field
  collection.fields.removeById("select753727511")

  // remove field
  collection.fields.removeById("text3950563313")

  // remove field
  collection.fields.removeById("select2405814887")

  // remove field
  collection.fields.removeById("date2222527961")

  return app.save(collection)
})
