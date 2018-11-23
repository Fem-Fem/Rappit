class Post < ActiveRecord::Base
	has_many :comments
	belongs_to :user
	validates :title, :content, presence: true

	# def order_by_rating
	# 	Post.order(rating: asc_or_desc)
	# 	asc_or_desc
	# end

	# def order_by_newness(asc_or_desc)
	# 	Post.order(date: ?)
	# 	asc_or_desc
	# end

	# def order_by_category
	# 	Post.where(c)
	# end
end