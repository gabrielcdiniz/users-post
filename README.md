# Users Post Project

## Models | Schemas | Entities | Tables

### User

- _id:          `MongoDB ObjectId`
- name:         `string`
- age:          `number`
- password:      `string`
- email:         `string`           `unique`
- nickname:      `string`           `unique`
- active:       `boolean`
- createdAt?:   `datetime`          `default(now())`

### Post

- _id:          `MongoDB ObjectId`
- title:        `string`
- description   `string`
- content       `string`
- private?:     `boolean`
- userId:       `MongoDB ObjectId`  `relation(User)`
- createdAt?:   `datetime`          `default(now())`
