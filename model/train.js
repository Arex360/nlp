const { NlpManager } = require('node-nlp');
const manager = new NlpManager({ languages: ['en'] });
const roles = {
    ArtistLook:'artist.look',
    ArtistRole: 'artist.role',
    DeveloperRole: 'developer.role',
    DeveloperLook:'developer.look',
    DesignerRole: 'designer.role',
    DesignerLook:'designer.look',
    ArtistLookDeveloperRole: 'artist.look|developer.role',
    ArtistLookDesignerRole: 'artist.look|designer.role',
    DeveloperLookArtistRole: 'developer.look|artist.role',
    DeveloperLookDesignerRole: 'developer.look|designer.role',
    DesignerLookDeveloperRole: 'designer.look|developer.role',
    DesignerLookArtistRole: 'developer.look|artist.role'
}
// Add training data for each collection
manager.addDocument('en', 'I am a developer', roles.DeveloperRole);
manager.addDocument('en', 'I am an artist', roles.ArtistRole);
manager.addDocument('en', 'I am a designer', roles.DesignerRole);
manager.addDocument('en','looking for developer', roles.DeveloperLook)
manager.addDocument('en','need a developer','developer.look')
manager.addDocument('en', 'Looking for an artist', 'artist.look');
manager.addDocument('en', 'I need an artist', 'artist.look');
manager.addDocument('en', 'Need a developer', 'developer.look');
manager.addDocument('en', 'Require a designer', 'designer.look');
manager.addDocument('en', 'Can you recommend a developer?', 'developer.look');
manager.addDocument('en', 'Who is a good artist?', 'artist.look');
manager.addDocument('en', 'Any good designers available?', 'designer.look');
manager.addDocument('en','I am professional developer', 'developer.look')
manager.addDocument('en', 'I work as a developer', 'developer.role');
manager.addDocument('en', 'My job is to develop software', 'developer.role');
manager.addDocument('en', 'I create websites as a designer', 'designer.role');
manager.addDocument('en', 'I am a painter and an artist', 'artist.role');
manager.addDocument('en', 'I am looking for a front-end developer', 'developer.look');
manager.addDocument('en', 'I need an artist for a new project', 'artist.look');
manager.addDocument('en', 'Looking for a UI/UX designer', 'designer.look');
manager.addDocument('en', 'Do you know any good software developers?', 'developer.look');
manager.addDocument('en','I am a good developer and now I need an artist','artist.look')
manager.addDocument('en', 'I work as a developer', 'developer.role');
manager.addDocument('en', 'My job is to develop software', 'developer.role');
manager.addDocument('en', 'I create websites as a designer', 'designer.role');
manager.addDocument('en', 'I am a painter and an artist', 'artist.role');
manager.addDocument('en', 'I am looking for a front-end developer', 'developer.look');
manager.addDocument('en', 'I need an artist for a new project', 'artist.look');
manager.addDocument('en', 'Looking for a UI/UX designer', 'designer.look');
manager.addDocument('en', 'Do you know any good software developers?', 'developer.look');
manager.addDocument('en', 'Who is the best artist you know?', 'artist.look');
manager.addDocument('en', 'Any talented designers available?', 'designer.look');
manager.addDocument('en', 'I have experience as a developer', 'developer.look');

// Developer
manager.addDocument('en', 'I am a software developer', roles.DeveloperRole);
manager.addDocument('en', 'I write code for a living', roles.DeveloperRole);
manager.addDocument('en', 'I specialize in backend development', roles.DeveloperRole);
manager.addDocument('en', 'I am an iOS developer', roles.DeveloperRole);
manager.addDocument('en', 'I have experience with React Native', roles.DeveloperRole);
manager.addDocument('en', 'I am proficient in Python', roles.DeveloperRole);
manager.addDocument('en', 'I am a full-stack developer', roles.DeveloperRole);
manager.addDocument('en', 'I work with Node.js', roles.DeveloperRole);

// Artist
manager.addDocument('en', 'I paint for a living', roles.ArtistRole);
manager.addDocument('en', 'I create illustrations', roles.ArtistRole);
manager.addDocument('en', 'I specialize in watercolor', roles.ArtistRole);
manager.addDocument('en', 'I am a digital artist', roles.ArtistRole);
manager.addDocument('en', 'I have experience with 3D modeling', roles.ArtistRole);
manager.addDocument('en', 'I am proficient in Adobe Photoshop', roles.ArtistRole);
manager.addDocument('en', 'I am a freelance artist', roles.ArtistRole);
manager.addDocument('en', 'I work with Procreate', roles.ArtistRole);

// Designer
manager.addDocument('en', 'I design for a living', roles.DesignerRole);
manager.addDocument('en', 'I create user interfaces', roles.DesignerRole);
manager.addDocument('en', 'I specialize in web design', roles.DesignerRole);
manager.addDocument('en', 'I am a UI/UX designer', roles.DesignerRole);
manager.addDocument('en', 'I have experience with branding', roles.DesignerRole);
manager.addDocument('en', 'I am proficient in Sketch', roles.DesignerRole);
manager.addDocument('en', 'I am a graphic designer', roles.DesignerRole);
manager.addDocument('en', 'I work with Figma', roles.DesignerRole);

//new dataet

manager.addDocument('en', 'I am a professional artist', roles.ArtistRole);
manager.addDocument('en', 'I am a software engineer', roles.DeveloperRole);
manager.addDocument('en', 'I design user interfaces', roles.DesignerRole);
manager.addDocument('en', 'I want to hire an artist', roles.ArtistLook);
manager.addDocument('en', 'I need a developer for my project', roles.DeveloperLook);
manager.addDocument('en', 'Looking for a designer for my website', roles.DesignerLook);
manager.addDocument('en', 'I am an artist and also a developer', roles.ArtistRole+'|'+roles.DeveloperRole);
manager.addDocument('en', 'I am an artist and also need a developer', roles.ArtistRole+'|'+roles.DeveloperLook);
manager.addDocument('en', 'I am a designer and an artist', roles.DesignerRole+'|'+roles.ArtistRole);
manager.addDocument('en', 'I want to hire an artist who is also a developer', roles.ArtistLook+'|'+roles.DeveloperRole);
manager.addDocument('en', 'I need a developer who is also an artist', roles.DeveloperLook+'|'+roles.ArtistRole);
manager.addDocument('en', 'Looking for a designer who is also a developer', roles.DesignerLook+'|'+roles.DeveloperRole);
manager.addDocument('en', 'I am a front-end developer', roles.DeveloperRole);
manager.addDocument('en', 'I specialize in graphic design', roles.DesignerRole);
manager.addDocument('en', 'I am an artist who can also develop software', roles.ArtistRole+'|'+roles.DeveloperRole);
manager.addDocument('en', 'I need a designer for my mobile app', roles.DesignerLook);
manager.addDocument('en', 'I am a full-stack developer', roles.DeveloperRole);
manager.addDocument('en', 'I am an artist who can design user interfaces', roles.ArtistRole+'|'+roles.DesignerRole);
manager.addDocument('en', 'I am looking for a developer with experience in machine learning', roles.DeveloperLook);
manager.addDocument('en', 'I am a UX designer', roles.DesignerRole);
manager.addDocument('en', 'I am an artist who can code', roles.ArtistRole+'|'+roles.DeveloperRole);
manager.addDocument('en', 'I want to hire a designer who knows HTML and CSS', roles.DesignerLook);
manager.addDocument('en', 'I am a back-end developer', roles.DeveloperRole);
manager.addDocument('en', 'I specialize in web design', roles.DesignerRole);
manager.addDocument('en', 'I am a developer who can also design user interfaces', roles.DeveloperRole+'|'+roles.DesignerRole);
manager.addDocument('en', 'I need an artist who can work on 3D modelling', roles.ArtistLook);
manager.addDocument('en', 'I am a game developer', roles.DeveloperRole);
manager.addDocument('en', 'I am an artist who can create illustrations', roles.ArtistRole);
manager.addDocument('en', 'I am looking for a UI designer', roles.DesignerLook);
manager.addDocument('en', 'I am a developer who can work on iOS apps', roles.DeveloperRole);
manager.addDocument('en', 'I am an artist who can create animations', roles.ArtistRole);
manager.addDocument('en', 'I am looking for a UX designer for my website', roles.DesignerLook);
manager.addDocument('en', 'I am a developer who can work on Android apps', roles.DeveloperRole);
manager.addDocument('en', 'I am a graphic designer who can also code', roles.DesignerRole+'|'+roles.DeveloperRole);
manager.addDocument('en','Hi there, I am developer, can make games logic and do all scripting stuff, I am looking for a artist',roles.ArtistLookDeveloperRole)
manager.addDocument('en','Hi there, I am good artist and I need a developer',roles.DeveloperLookArtistRole)
manager.addDocument('en','Hi there, I am good artist and I look a developer',roles.DeveloperLookArtistRole)
manager.addDocument('en','Hi, I am developer and looking for the designer',roles.DesignerLookDeveloperRole)
manager.addDocument('en','is there any game developer who can join me',roles.DeveloperLook)
manager.addDocument("en","I am game developer, but I am looking for a game designer, is there any designer?",roles.DesignerLookDeveloperRole)
manager.addDocument("en","I am looking for the developers , who can code and make the base mechanics",roles.DeveloperLook)
manager.addDocument("en","is there any developer?",roles.DeveloperLook)
manager.addDocument("en","I am the artist, if someone need a artist, let me know",roles.ArtistRole)
manager.addDocument("en","is there any artist? I am looking for one",roles.ArtistLook)
manager.addDocument("en","I am looking for an artist, anyone can join me?",roles.ArtistLook)
manager.addDocument("en","I am looking for artists",roles.ArtistLook)
manager.addDocument("en","Hey I am game designer, if someone looking for game designer, I am here",roles.DesignerRole)
manager.addDocument("en","hey there, I am Game designer, i am looking for fellow game designer",roles.DesignerRole)
manager.addDocument("en","!Hey they, I am looking for game designer",roles.DesignerLook)

//Mixed 

// Train the model
async function train(){
   await  manager.train();
   manager.save()

// Process user input and categorize it
const input = 'Hi there, I am good artist , can make 2D/3D art and I am looking for a developer';
manager.process('en', input).then((result) => {
    console.log(result)
  const collections = result.classifications.filter((c) => c.value > 0.2).map((c) => c.label);
  console.log(collections)
  // Add the user to the appropriate collection
  collections.forEach((collection) => {
    manager.add('en', { name: 'Muhammad Owais' }, collection);
  });

  // Return the collections that were not matched
  const unmatchedCollections = ['developer', 'artist', 'designer'].filter((c) => !collections.includes(c));
  console.log(`User added to collections: ${collections.join(', ')}`);
  console.log(`User looking for collections: ${unmatchedCollections.join(', ')}`);
});

}
train()