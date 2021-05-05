Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get "/boats", to: "homes#react"
  get "/rowers", to: "homes#react"

  resources :boats, only: [ :index, :show ]
  resources :rowers, only: [ :new, :create ]

  namespace :api do
    namespace :v1 do
      resources :rowers, only: [ :index, :show, :create ]
    end
  end


end
