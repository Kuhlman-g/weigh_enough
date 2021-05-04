class Api::V1::RowersController < ApplicationController
  
  def index
    render json: Rower.all
  end

  def show
  end

end