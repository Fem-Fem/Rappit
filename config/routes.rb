Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
	resources :posts, only: [:index, :show, :create, :edit, :update, :delete, :new] do
    	resources :comments, only: [:index, :show, :create, :edit, :update, :delete, :new]
	end
	# login?
	
end
