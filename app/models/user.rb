class User < ActiveRecord::Base
	has_many :posts
	has_many :comments
	validates :username, :password, presence: true
  	validates :username, uniqueness: true
  end