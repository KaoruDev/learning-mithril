50.times do
  u = User.create(username: Faker::Internet.user_name)
  puts "Created user: #{u.username}"
end
