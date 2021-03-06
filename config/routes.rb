Rails.application.routes.draw do
  namespace :api do
    resources :videos do
      resources :comments
    end
  end
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '*other', to: 'static#index'

end
