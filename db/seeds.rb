# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
femi = User.create(username: "femi", password: "password")
clara = User.create(username: "clara", password: "password")
aj = User.create(username: "aj", password: "password")
funmi = User.create(username: "funmi", password: "password")

# shouldn't be able to give more than one upvote
# i guess i can create an array that stores the ones that someone has commented on?
# if u upvote you shouldn't be able to downvote

post1 = Post.create(title: "Kanye", content: "is so cool", user_id: 1, upvotes: 1, downvotes: 0)
post2 = Post.create(title: "Grafitti", content: "Has a rich history", user_id: 2, upvotes: 3, downvotes: 0)


comment1 = Comment.create(content: "I concur!", post_id: 1, user_id: 3, upvotes: 1, downvotes: 0)
comment2 = Comment.create(content: "IDK, I really like Kendrick Lamar", post_id: 1, user_id: 2, upvotes: 1, downvotes: 0)
comment3 = Comment.create(content: "Just like the romans!", post_id: 2, user_id: 4, upvotes: 3, downvotes: 0)
