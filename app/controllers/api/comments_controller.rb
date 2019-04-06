

class Api::CommentsController < ApplicationController
  #before_action :set_user
  before_action :set_video
  #before_action :set_comment, only: [:show, :update, :destroy]
  
  def index
    comments = Comment.all
    video_comments=[]
    comments.each do |comment|
      if comment.video_id == params[:video_id].to_i
         video_comments << comment
      end
    end
    # binding.pry

    render json: video_comments 
  end

  def show
    render json: @comment
  end

  def create
    comment = Comment.new(comment_params)
    if comment.save
      render json: comment
    else
      render json: comment.errors, status: 422
    end
  end

  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: 422
    end
  end

  def destroy
    @comment.destroy
  end

  private
  def set_comment
    @comment = Comment.find(params[:id])
  end

  def comment_params
    params.require(:comment).permit(:body, :date, :user_id, :video_id)
  end

  def set_video 
    @video =  Video.find(params[:video_id])
  end


  def set_user
    @user = User.find(params[:user_id])
  end

end
