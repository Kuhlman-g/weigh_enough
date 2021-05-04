Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  resources :boats, only: [ :index, :show ]
  resources :rowers, only: [ :index, :show, :create ]

  namespace :api do
    namespace :v1 do
      resources :rowers, only: [ :index, :show, :create ]
    end
  end


end
