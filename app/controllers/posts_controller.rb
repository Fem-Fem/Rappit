class PostsController < ActionController::Base
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
  	user_path(@user)
  end

  def show
    @user = User.find(params[:id])
  end

  def index
      @users = User.all
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end