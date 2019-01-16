class UsersController < ActionController::Base

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
  	if @user.valid?
      @user.save
      render json: @user
    else
      render json: {error: 'Invalid Option Given!'}
    end
  end

  def login
    @user = User.find_by(username: params[:user][:username])
    if @user && @user.authenticate(params[:user][:password])
      session[:username] = params[:username]
      render json: @user
    else
      render json: {error: 'Invalid Option Given!'}
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end