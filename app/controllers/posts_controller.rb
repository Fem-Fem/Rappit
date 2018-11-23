class PostsController < ActionController::Base
  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    if @post.save
    	post_path(@post)
    else
      @errors = @post.errors
      erb :'/new'
    end
  end

  def show
    @user = Post.find(params[:id])
  end

  def index
      @posts = Post.all
  end

  private

  def post_params
    params.require(:user).permit(:title, :content)
  end

end