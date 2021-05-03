Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  resources :boats, only: [ :index, :show ]
  resources :rowers, only: [ :index, :show ]


end
