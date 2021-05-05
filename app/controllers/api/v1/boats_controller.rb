class Api::V1::BoatsController < ApplicationController
  
  def index
    render json: Boat.all
  end

  def show
  end

end