# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Todo.destroy_all

Todo.create(body: 'first', title: 'the first one')
Todo.create(body: 'second', title: 'the second one')
Todo.create(body: 'third', title: 'the third one')
Todo.create(body: 'fifth', title: 'the fifth one')
Todo.create(body: 'six', title: 'the six one', done: true)
Todo.create(body: 'seventh', title: 'the seventh one')
