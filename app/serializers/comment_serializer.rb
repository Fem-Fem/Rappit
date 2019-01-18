class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :user_id
  belongs_to :user, serializer: UserSerializer
  belongs_to :post
end
