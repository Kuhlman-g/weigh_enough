class LineupSerializer < ActiveModel::Serializer
  attributes :id, :name

  belongs_to :boat
  has_many :rowers, each_serializer: RowerSerializer
end