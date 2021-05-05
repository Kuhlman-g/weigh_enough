class Rower < ApplicationRecord
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :height, presence: true
  validates :weight, presence: true
end
