# API Routes

## GET

#### Read All Difficulties - /api/difficulty
##### response (200):
```
[
    {
        "_id": "55f7bd721324a70800db44f3",
        "label": "Normal",
        "isDefault": true,
        "__v": 0,
        "settings": [
            {
                "label": "health",
                "value": "103",
                "_id": "55f7bd721324a70800db44f4"
            }
        ]
    },
    {
        "_id": "55f7bd721324a70800db44f0",
        "label": "Easy",
        "isDefault": false,
        "__v": 2,
        "settings": [
            {
                "label": "health",
                "value": 150,
                "_id": "55f7bd721324a70800db44f2"
            },
            {
                "label": "enemies",
                "value": 20,
                "_id": "55f7bd721324a70800db44f1"
            }
        ]
    },
    {
        "_id": "55f7bd771324a70800db44f9",
        "label": "Ultra",
        "isDefault": false,
        "__v": 0,
        "settings": []
    }
]
```

#### Read Difficulty - /api/difficulty/:difficulty

##### parameters:
 * difficulty - The label of the difficulty group.

##### response (200):
```
{
    "_id": "55f7bd721324a70800db44f0",
    "label": "Easy",
    "isDefault": false,
    "__v": 2,
    "settings": [
        {
            "label": "health",
            "value": 150,
            "_id": "55f7bd721324a70800db44f2"
        },
        {
            "label": "enemies",
            "value": 20,
            "_id": "55f7bd721324a70800db44f1"
        }
    ]
}
```

#### Read Setting - /api/difficulty/:difficulty/setting/:label

##### parameters:
 * difficulty - The label of the difficulty group.
 * label - The setting label.

##### response (200):
```
{
    "label": "health",
    "value": 150,
    "_id": "55f7bd721324a70800db44f2"
}
```

## POST

#### Create Difficulty - /api/difficulty/:difficulty

##### parameters:
 * difficulty - The label of the difficulty group.

##### body:
```
{
  isDefault: Boolean,
  settings: [{
    label: String, value: String|Number|Boolean|Null
  }]
}
```
##### response (200):
```
{
    "__v": 0,
    "label": "Easier",
    "isDefault": false,
    "_id": "55f7c28a1324a70800db44fa",
    "settings": []
}
```

#### Create Setting - /api/difficulty/:difficulty/setting/:label/value/:value/type/:type

##### parameters:
 * difficulty - The label of the difficulty group.
 * label - The setting label.
 * value - The setting value.
 * type - The setting data type (Number, String, Boolean or Null)

##### body:
```
Empty
```
##### response (201):
```
{
    "_id": "55f7c28a1324a70800db44fa",
    "label": "Easier",
    "isDefault": false,
    "__v": 1,
    "settings": [
        {
            "label": "bacon",
            "value": "true",
            "_id": "55f7c2da1324a70800db44fb"
        }
    ]
}
```

#### Reset Database - /api/reset-database

Note: This is for testing purposes only, should never have this in prod

##### body:
```
Empty
```
##### response (200):
```
Empty
```

## PUT

#### Update Difficulty - /api/difficulty/:difficulty

##### parameters:
 * difficulty - The label of the difficulty group.

##### body:
```
{
  isDefault: Boolean,
  settings: [{
    label: String, value: String|Number|Boolean|Null
  }]
}
```
##### response (200):
```
{
    "_id": "55f7c28a1324a70800db44fa",
    "label": "Easier",
    "isDefault": false,
    "__v": 1,
    "settings": [
        {
            "label": "bacon",
            "value": "true",
            "_id": "55f7c2da1324a70800db44fb"
        }
    ]
}
```

#### Update Setting - /api/difficulty/:difficulty/setting/:settingLabel/value/:value/label/:label/type/:type

##### parameters:
 * difficulty - The label of the difficulty group.
 * settingLabel - The current label of the setting to be modified
 * label - The setting label.
 * value - The setting value.
 * type - The setting data type (Number, String, Boolean or Null)

##### body:
```
Empty
```
##### response (200):
```
{
    "_id": "55f7c28a1324a70800db44fa",
    "label": "Easier",
    "isDefault": false,
    "__v": 1,
    "settings": [
        {
            "label": "bacon",
            "value": "false",
            "_id": "55f7c2da1324a70800db44fb"
        }
    ]
}
```

## DELETE

#### Delete Difficulty - /api/difficulty/:difficulty

##### parameters:
 * difficulty - The label of the difficulty group.

##### response (204):
```
No Content
```

#### Delete setting - /api/difficulty/:difficulty/setting/:label

##### parameters:
 * difficulty - The label of the difficulty group.
 * label - The setting label.

##### response (204):
```
No Content
```
