class UserSerializer < ActiveModel::Serializer
  attributes :username, :password, :id
  has_many :posts
end
