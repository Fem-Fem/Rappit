class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :user, :user_id
  belongs_to :post
end
