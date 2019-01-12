class UsersController < ActionController::Base
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
  	if @user.valid?
      @user.save
    else
      render json: {error: 'Invalid Option Given!'}
  end

  def login
    @user = User.find_by(username: params[:username])
    if @user && @user.authenticate(params[:password])
      session[:username] = params[:username]
    else
      render json: {error: 'Invalid Option Given!'}
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end