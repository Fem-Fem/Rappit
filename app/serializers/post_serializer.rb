class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :category, :user_id
  belongs_to :user, serializer: UserSerializer
  has_many :comments
end
