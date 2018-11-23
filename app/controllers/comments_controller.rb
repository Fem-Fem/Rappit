class CommentsController < ActionController::Base
  def new
    @comment = Comment.new
  end

  def create
    @comment = Comment.new(post_params)
    if @comment.save
    	redirect_to post_path(@comment)
    else
      @errors = @comment.errors
      erb :'/new'
    end
  end

  def show
    @comment = Comment.find(params[:id])
  end

  def edit
    @comment = Comment.find(params[:id])
  end

  def update
    @comment = Comment.find(params[:id])
    if @comment.update!(comment_params)
      #redirect to comment.post
    else
      @errors = @comment.errors
      erb :'/edit'
    end
  end

  def index
      @comments = Comment.all
  end

  private

  def comment_params
    params.require(:comment).permit(:content)
  end

end