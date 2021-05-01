Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get '/boats', to: 'homes#index'

  resources :boats, only: [ :index, :show ]

end
