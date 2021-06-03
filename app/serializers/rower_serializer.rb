class RowerSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :side, :status, :height, :weight

  has_many :lineups, each_serializer: LineupSerializer
end