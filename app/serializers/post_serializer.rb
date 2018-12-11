class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :category
  has_many :comments
end
