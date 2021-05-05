class RowersController < ApplicationController

  def new
    @rower = Rower.new
  end

end