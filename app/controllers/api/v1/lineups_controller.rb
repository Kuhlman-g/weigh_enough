class Api::V1::LineupsController < ApplicationController
  
  def index
  end

  def show
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