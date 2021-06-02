class RowersController < ApplicationController

  def new
    @rower = Rower.new
  end

  def create
    @rower = Rower.new(rower_params)

    if @rower.save
      flash.now[:notice] = "Rower Added to Roster!"
      redirect_to "/rowers"
    else
      flash.now[:error] = "#{@rower.errors.full_messages.to_sentence}"
      render :new
    end
  end
  
  private

  def rower_params
    params.require(:rower).permit(:first_name, :last_name, :height, :weight, :side, :twok_pr, :sixk_pr, :notes)
  end

end
