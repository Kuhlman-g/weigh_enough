# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


rower1 = Rower.create(first_name: "Harry", last_name: "Porter", height: 4, weight: 185)
rower2 = Rower.create(first_name: "Falcon", last_name: "Punch", height: 2, weight: 350)
rower3 = Rower.create(first_name: "Paul", last_name: "Popescu", height: 7, weight: 220)

boat1 = Boat.create(seats: 8, name: "The Prots")
boat1 = Boat.create(seats: 8, name: "J-Kow")
boat1 = Boat.create(seats: 4, name: "Graves")


lineup1 = Lineup.create(name: "The best")
lineup1.rowers << rower1
lineup1.rowers << rower2
lineup1.rowers << rower3
