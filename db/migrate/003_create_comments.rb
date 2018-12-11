class CreateComments < ActiveRecord::Migration[4.2]
	def change
		create_table :comments do |t|
			t.string :content
			t.integer :user_id
			t.integer :post_id
		end
	end
end