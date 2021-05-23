class Lineup < ApplicationRecord
  has_many :assignments
  has_many :rowers, through: :assignments

  belongs_to :boat
end