class Api::V1::WeatherController < ApplicationController

  def index
    user = current_user
    zip = user.zip_code
    url = "http://api.openweathermap.org/data/2.5/weather?q=#{zip}&appid=#{ENV["API_KEY"]}"
    api_response = Faraday.get(url)
    today_weather = JSON.parse(api_response.body)
    render json: today_weather
  end

end