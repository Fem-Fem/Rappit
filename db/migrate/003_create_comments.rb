class CreateComments < ActiveRecord::Migration[4.2]
	def change
		create_table :comments do |t|
			t.string :content
			t.string :category
			t.integer :user_id
			t.integer :post_id
			t.integer :upvotes
			t.integer :downvotes
		end
	end
end