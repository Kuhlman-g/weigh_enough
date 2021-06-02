class RowerSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :side, :status

  has_many :lineups, each_serializer: LineupSerializer
end