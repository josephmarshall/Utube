User.create(email: "test@test.com", password: "password")


Video.create(title: "A sweet video 1", description: "https://www.youtube.com/embed/FcnhekTNHPg", user_id: 1)
Video.create(title: "A sweet video 2", description: "https://www.youtube.com/embed/AxM9FYSs8V4", user_id: 1)
Video.create(title: "A sweet video 3", description: "https://www.youtube.com/embed/5iV_hB08Uns", user_id: 1)
Video.create(title: "A sweet video 4", description: "https://www.youtube.com/embed/t0_JMBPOdLw", user_id: 1)
Video.create(title: "A sweet video 5", description: "https://www.youtube.com/embed/xIqza5kdmdQ", user_id: 1)

puts "seeded"