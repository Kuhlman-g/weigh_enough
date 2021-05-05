class Api::V1::BoatsController < ApplicationController
  
  def index
    render json: Boats.all
  end

  def show
  end

end