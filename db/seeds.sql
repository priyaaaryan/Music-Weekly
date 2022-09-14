INSERT INTO comments
  (id, comment_text, user_id, post_id)
VALUES
    (default,"I'm trying this technique atm:

ten minutes automatic writing. 

think about an important, emotional, major event in your life. clear the decks, turn all your devices off, spend ten minutes automatic writing about that event. 

think, and write about everything you experienced from a view of: 
sight 
hearing 
smell 
taste 
touch 
physical feelings 
feelings around you

relax, let your brain wander!

at the end of the 10 minutes, 90% will probably be throw away (or maybe not who knows), but take a song title from it, a meaning for a song. use the writing as a catalyst, whether instrumental or with lyrics. if lyrics, the automatic writing is material to work from.", 2),
    (default,"Hey everyone! 
    Just thought I'd put a reminder out that the first song is due tomorrow. Remember that it doesnt have to be a masterpiece, were just trying to get something musical done for the week! Even 30 seconds is great, dont stress about it being a completed song. On a separate note: would we like next weeks prompt to be posted today? Did the prompt work for people? If I don't hear back from anyone, I'll just post it at the end of the day. We've got this!!", 4),
    (default,"Hello again! I hope your music is all going amazingly, I'm excited to see how this week goes after listening to everyone's music last week!  Remember, it doesn't have to be spectacular - just finishing something once a week is enough to improve your music in the long run. I've posted next week's prompt, it's there whenever everyone's ready!", 4,);

INSERT INTO posts
  (id, title, content_txt,  user_id)
VALUES
    (default,'Song #25. Tiny Violin', 'Prompt: Masquerade. Challenge: write the saddest melody you can.', 4),
    (default,'Song #24. Family Heirloom', 'Prompt: Family Heirloom. Challenge: use a 12-tone row.', 4),
    (default,'Song #23. Tiny People', 'Prompt: Miniature Dollhouse. Challenge: recreate a spoken phrase, either in pitches or rhythm or both!  Use the prompt and the challenge, one or the other, or neither!', 4),
    (default,'Song #22. Fancy Pants', 'Prompt: Fancy Pants - Think swanky, classy, fancy! Challenge: write in an irregular meter - a meter that combines two or more meters. Some examples are 5/4 or 7/8! Usually, these are broken down into a sum of two meters. 7/8 for example would be broken into 3+2+2/8 to get the feeling of it.', 4),
    (default,'Song #21. Stolen Inspiration', 'Prompt: Identity Crisis - Maybe a melody that doesnt quite fit the theme, or a cat that thinks its a dog. Walking into the wrong conference. Or simply not knowing who you are. Whatever speaks to you! Challenge: take an existing melody, keep the rhythm but change the pitches.
    Use any song you want!', 4),
    (default,'Song #20. Abnormal', 'Prompt: Not Normal - Maybe this makes you think of an oddball in your life, or a place thats not quite right. Maybe an image thats been altered or a performance that has deviated from the norm. Maybe you think of something that caught you off guard because it didnt conclude how you assumed. Whatever works for you! Challenge: write using only three parts. Maybe all the same instrument, maybe all different!', 4),
    (default,'Song #19. Hello Darkness My Old Friend', 'Prompt: Darkness - Try writing something dark and eerie, or sad and quiet. Or big and dangerous and evil. Whatever you get from the prompt works! Challenge: modulate from minor to major and then back again somewhere in your song.', 4),
    (default,'Song #18. A Puzzling Matter', 'Prompt: The Puzzle -  Challenge: your melody can only have three pitches', 4),
    (default,'Song #17. The Missing Note', 'Prompt: Missed connections -  Maybe you think of friends you lost touch with, or a connecting flight you just missed. Maybe you think of a broken bridge, or a sound system thats missing a couple wires. Maybe you think of broken telephone - a message being lost in translation.Use the prompt and the challenge, one or the other, or neither! Challenge: Write a melody using a blues scale! Any blues scale! ', 4),
    (default,'Song #16. Do The Worm', 'Prompt: The bug Catcher - Maybe you think of a kid with a net, or a entomologist, or a bug that eats bugs - whatever comes to mind! Challenge: Modulate to a different key somewhere in your song.', 4);

INSERT INTO users
  (id, username, password, email, bio, image)
VALUES
  (default,'Tara', 'Evans', '$2b$10$fbl7Ya0aQ23aeJJ2FN4GeOJ/Xp4XyA6zbEmmdCb2RUjUpINGHOfq.', 'tarajevans@hotmail.com', 'This is my all about me so I can talk all about myself!', 'Hello.jpg'),
  (default,'Prerana', 'Shukla', '$2b$10$fbl7Ya0aQ23aeJJ2FN4GeOJ/Xp4XyA6zbEmmdCb2RUjUpINGHOfq.', 'prerana@hotmail.com', 'This is my all about me so I can talk all about myself!', 'profile-picture.jpg'),
  (default,'Priya', 'Bakshi', '$2b$10$fbl7Ya0aQ23aeJJ2FN4GeOJ/Xp4XyA6zbEmmdCb2RUjUpINGHOfq.', 'priya@hotmail.com', 'This is my all about me so I can talk all about myself!', 'pri image.png'),
  (default,'Hailey', 'Ghaznavi', '$2b$10$fbl7Ya0aQ23aeJJ2FN4GeOJ/Xp4XyA6zbEmmdCb2RUjUpINGHOfq.', 'heycmaia@gmail.com', 'This is my all about me so I can talk all about myself!', 'Hailey.jpg'),
  (default,'Joe', 'Fisher', '$2b$10$fbl7Ya0aQ23aeJJ2FN4GeOJ/Xp4XyA6zbEmmdCb2RUjUpINGHOfq.', 'josephfish1973@gmail.com', 'This is my all about me so I can talk all about myself!', 'joe.png');