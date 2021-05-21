class Lineup < ApplicationRecord
  has_many :assignments
  has_many :rowers, through: :assignments
  has_one :boat
end