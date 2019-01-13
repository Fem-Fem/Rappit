class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :category, :user, :user_id
  has_many :comments
end
