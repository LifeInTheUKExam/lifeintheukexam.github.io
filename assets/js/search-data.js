// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

ninja.data = [
    {
      title: 'Course',
      handler: () => { window.location.href = "/course/" }
    },
    {
      title: 'Timeline',
      handler: () => { window.location.href = "/timeline/" }
    },
    {
      section: 'Life in the UK',
      title: 'UK Values and Principles',
      handler: () => { window.location.href = "/chapters/uk-values-and-principles/" }
    },
    {
      section: 'Life in the UK',
      title: 'Life in the UK Test',
      handler: () => { window.location.href = "/chapters/life-in-the-uk-test/" }
    },
    {
      section: 'Life in the UK',
      title: 'Freedoms and Rights in the UK',
      handler: () => { window.location.href = "/chapters/uk-values-and-principles/" }
    },
    {
      section: 'Life in the UK',
      title: 'What is the UK?',
      handler: () => { window.location.href = "/chapters/what-is-the-uk/" }
    },
    {
      section: 'Early Peoples and the Making of the Kingdoms',
      title: 'Early Britain and the Romans',
      handler: () => { window.location.href = "/chapters/early-britain-and-the-romans/" }
    },
    {
      section: 'Early Peoples and the Making of the Kingdoms',
      title: 'Anglo-Saxons, Vikings, and Norman conquest',
      handler: () => { window.location.href = "/chapters/anglo-saxons-vikings-and-norman-conquest/" }
    },
    {
      section: 'Early Peoples and the Making of the Kingdoms',
      title: 'Medieval Britain',
      handler: () => { window.location.href = "/chapters/medieval-britain/" }
    },
    {
      section: 'Tudors, Stuarts, and the Rise of Parliament',
      title: 'The Tudors and the Stuarts - Religious Conflicts',
      handler: () => { window.location.href = "/chapters/the-tudors-and-the-stuarts-religious-conflicts/" }
    },
    {
      section: 'Tudors, Stuarts, and the Rise of Parliament',
      title: 'Exploration, Poetry and Drama',
      handler: () => { window.location.href = "/chapters/exploration-poetry-and-drama/" }
    },
    {
      section: 'Tudors, Stuarts, and the Rise of Parliament',
      title: 'The English Civil War and the Glorious Revolution',
      handler: () => { window.location.href = "/chapters/the-english-civil-war-and-the-glorious-revolution/" }
    },
    {
      section: 'Constitutional Britain, Empire, and the Industrial Age',
      title: 'Constitutional Monarchy and Early 18th Century Britain',
      handler: () => { window.location.href = "/chapters/constitutional-monarchy-and-early-18th-century-britain/" }
    },
    {
      section: 'Constitutional Britain, Empire, and the Industrial Age',
      title: 'The Enlightenment and Industrial Revolution',
      handler: () => { window.location.href = "/chapters/the-enlightenment-and-industrial-revolution/" }
    },
    {
      section: 'Constitutional Britain, Empire, and the Industrial Age',
      title: 'The American War of Independence and the Victorian Age',
      handler: () => { window.location.href = "/chapters/the-american-war-of-independence-and-the-victorian-age/" }
    },
    {
      section: 'Constitutional Britain, Empire, and the Industrial Age',
      title: 'Ireland and Britain in the 19th Century',
      handler: () => { window.location.href = "/chapters/ireland-and-britain-in-the-19th-century/" }
    },
    {
      section: 'Britain in the 20th Century',
      title: 'First World War and Inter-War Years',
      handler: () => { window.location.href = "/chapters/first-world-war-and-inter-war-years/" }
    },
    {
      section: 'Britain in the 20th Century',
      title: 'The Second World War',
      handler: () => { window.location.href = "/chapters/the-second-world-war/" }
    },
    {
      section: 'Britain in the 20th Century',
      title: 'Post WWII Britain',
      handler: () => { window.location.href = "/chapters/post-wwii-britain/" }
    },
    {
      section: 'Britain in the 20th Century',
      title: 'Social Changes in 1960s Britain',
      handler: () => { window.location.href = "/chapters/social-changes-in-1960s-britain/" }
    },
    {
      section: 'Britain in the 20th Century',
      title: 'UK from Margaret Thatcher to Brexit',
      handler: () => { window.location.href = "/chapters/uk-from-margaret-thatcher-to-brexit/" }
    },
    {
      section: 'A modern, thriving society',
      title: 'The UK Today',
      handler: () => { window.location.href = "/chapters/the-uk-today/" }
    },
    {
      section: 'A modern, thriving society',
      title: 'Religion and Festivals in the UK',
      handler: () => { window.location.href = "/chapters/religion-and-festivals-in-the-uk/" }
    },
    {
      section: 'A modern, thriving society',
      title: 'Sport in the UK',
      handler: () => { window.location.href = "/chapters/sport-in-the-uk/" }
    },
    {
      section: 'A modern, thriving society',
      title: 'Arts and Culture in the UK',
      handler: () => { window.location.href = "/chapters/arts-and-culture-in-the-uk/" }
    },
    {
      section: 'A modern, thriving society',
      title: 'Respecting the Law',
      handler: () => { window.location.href = "/chapters/respecting-the-law/" }
    },
    {
      section: 'A modern, thriving society',
      title: 'Architecture, Design, and Literature in the UK',
      handler: () => { window.location.href = "/chapters/architecture-design-and-literature-in-the-uk/" }
    },
    {
      section: 'A modern, thriving society',
      title: 'British Leisure',
      handler: () => { window.location.href = "/chapters/british-leisure/" }
    },
    {
      section: 'A modern, thriving society',
      title: 'UK Landmarks',
      handler: () => { window.location.href = "/chapters/uk-landmarks/" }
    },
    {
      section: 'The UK Government and the Law',
      title: 'British Democracy and the Monarchy',
      handler: () => { window.location.href = "/chapters/your-role-in-the-community/" }
    },
    {
      section: 'The UK Government and the Law',
      title: 'UK Parliament and Elections',
      handler: () => { window.location.href = "/chapters/uk-parliament-and-elections/" }
    },
    {
      section: 'The UK Government and the Law',
      title: 'The UK Government',
      handler: () => { window.location.href = "/chapters/the-uk-government/" }
    },
    {
      section: 'The UK Government and the Law',
      title: 'Devolved Governments and Media in the UK',
      handler: () => { window.location.href = "/chapters/devolved-governments-and-media-in-the-uk/" }
    },
    {
      section: 'The UK Government and the Law',
      title: 'Voting in the UK',
      handler: () => { window.location.href = "/chapters/voting-in-the-uk/" }
    },
    {
      section: 'The UK Government and the Law',
      title: 'The UK and International Organisations',
      handler: () => { window.location.href = "/chapters/the-uk-and-international-organisations/" }
    },
    {
      section: 'The UK Government and the Law',
      title: 'UK Laws',
      handler: () => { window.location.href = "/chapters/uk-laws/" }
    },
    {
      section: 'The UK Government and the Law',
      title: 'The Role of the Courts',
      handler: () => { window.location.href = "/chapters/the-role-of-the-courts/" }
    },
    {
      section: 'The UK Government and the Law',
      title: 'Fundamental Principles and Responsibilities in the UK',
      handler: () => { window.location.href = "/chapters/fundamental-principles-and-responsibilities-in-the-uk/" }
    },
    {
      section: 'The UK Government and the Law',
      title: 'Your Role in the Community',
      handler: () => { window.location.href = "/chapters/your-role-in-the-community/" }
    }
];