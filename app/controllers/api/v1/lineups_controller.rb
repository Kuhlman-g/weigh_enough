class Api::V1::LineupsController < ApplicationController
  
  def index
    render json: Lineup.all
  end

  def show
    binding.pry
    show_lineup = Lineup.find(params["id"])
    render json: selected_Lineup, serializer: LineupSerializer
  end

  def create
    count = Lineup.count
    lineup = Lineup.create(name: count)
    binding.pry
    lineup.boat_id = params["shell"]
    binding.pry
    if lineup.save
      params["lineUp"].each do |rower|
        rower1 = Rower.find(rower["id"])
        lineup.rowers << rower1
        this_assignment = Assignment.where(lineup_id: lineup.id, rower_id: rower["id"])
        binding.pry
        this_assignment[0].rower_position = rower["seatId"]
        this_assignment[0].save
      end
    end
  end

end