class RowerSerializer < ActiveModel::Serializer
  attributes :first_name, :last_name, :side, :status

  has_many :lineups, each_serializer: LineupSerializer
end