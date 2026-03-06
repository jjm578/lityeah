// Books data with all the required information
const booksData = [
    {
        id: 'frankenstein',
        title: 'Frankenstein',
        author: 'Mary Shelley',
        year: 1818,
        pages: 280,
        readingTime: '4-5 hours',
        dateAdded: '2026-03-04',
        hook: 'A scientist creates life, only to be horrified by what he has made—a tale of ambition, responsibility, and what it means to be human.',
        
        whyItMatters: 'Frankenstein is widely considered the first science fiction novel, pioneering a genre that explores the intersection of humanity and technology. Written by Mary Shelley at age 18, it asks profound questions about creation, responsibility, and the consequences of playing god—questions that resonate even more deeply in our age of genetic engineering and artificial intelligence.',
        
        themes: [
            'The dangers of unchecked ambition and scientific pursuit',
            'The consequences of abandoning one\'s creation',
            'Isolation and the human need for connection',
            'Nature versus nurture in forming identity',
            'Society\'s treatment of those who are different'
        ],
        
        authorBackground: 'Mary Shelley was the daughter of pioneering feminist Mary Wollstonecraft and political philosopher William Godwin. She conceived Frankenstein during the "Year Without a Summer" of 1816, while staying at Lord Byron\'s villa in Switzerland with Percy Shelley and others. The challenge was to write the best ghost story, but Mary created something far more enduring.',
        
        context: 'Written during the Romantic era and at the dawn of the Industrial Revolution, Frankenstein reflects anxieties about rapid scientific advancement and the hubris of man attempting to control nature. The novel was influenced by galvanism experiments (using electricity to animate dead tissue) and discussions about the nature of life itself.',
        
        reception: 'Initially published anonymously in 1818, critics gave mixed reviews, with some praising its originality while others condemned it as grotesque. Many assumed Percy Shelley was the author. Over time, the novel gained recognition as a masterpiece, though popular culture\'s focus on the monster often overshadows the novel\'s deeper philosophical questions.',
        
        culturalImpact: 'Frankenstein\'s monster has become one of literature\'s most iconic figures, inspiring countless adaptations in film, theater, and television. The name "Frankenstein" has entered common language as shorthand for dangerous scientific hubris. The novel\'s themes continue to inform debates about bioethics, AI, and the responsibilities of creators.',
        
        quote: '"Beware; for I am fearless, and therefore powerful." - The Creature',
        
        readingExperience: {
            tone: 'Gothic, philosophical, and deeply atmospheric',
            style: 'Epistolary (told through letters and first-person narratives)',
            difficulty: 'Moderate - The nested narrative structure and 19th-century prose require attention, but the story itself is gripping'
        },
        
        funFact: 'Mary Shelley wrote Frankenstein when she was just 18 years old, making her one of the youngest authors of a literary classic. The novel was conceived during a ghost story competition with Lord Byron and her husband Percy Shelley.',
        
        relatedWorks: [
            { title: 'The Strange Case of Dr. Jekyll and Mr. Hyde', author: 'Robert Louis Stevenson' },
            { title: 'Dracula', author: 'Bram Stoker' },
            { title: 'The Island of Doctor Moreau', author: 'H.G. Wells' }
        ]
    },
    {
        id: 'pride-and-prejudice',
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        year: 1813,
        pages: 432,
        readingTime: '6-7 hours',
        dateAdded: '2026-03-05',
        hook: 'A witty battle of first impressions and second chances, where Elizabeth Bennet and Mr. Darcy discover that love requires seeing past pride and prejudice.',
        
        whyItMatters: 'Pride and Prejudice revolutionized the novel by focusing on the inner lives of women and their pursuit of happiness in a society that gave them little agency. Austen\'s sharp social commentary and psychological depth created a template for romantic fiction while transcending the genre entirely. It remains one of the most beloved novels in English literature.',
        
        themes: [
            'The importance of marrying for love rather than money or social position',
            'First impressions can be deceiving',
            'The role of women in Regency England',
            'Class consciousness and social mobility',
            'Personal growth and self-awareness'
        ],
        
        authorBackground: 'Jane Austen (1775-1817) was the daughter of a country rector in Hampshire, England. She never married and lived a relatively quiet life, but her keen observations of social dynamics and human nature produced some of literature\'s most enduring works. She wrote six major novels, all exploring the lives of provincial middle-class women.',
        
        context: 'Set in rural England during the Regency era (early 1800s), the novel depicts a society where women\'s futures depended almost entirely on making good marriages. The entail system meant property passed to male heirs, leaving women vulnerable. Against this backdrop, Austen critiques social pretensions while celebrating intelligence and moral integrity.',
        
        reception: 'Published in 1813, Pride and Prejudice received positive reviews and moderate commercial success during Austen\'s lifetime. However, its reputation grew enormously after her death. Today it\'s considered one of the greatest novels in English literature, praised for its wit, characterization, and social insight.',
        
        culturalImpact: 'The novel has inspired countless adaptations, including the iconic 1995 BBC miniseries and 2005 film. "Enemies to lovers" has become a beloved romantic trope. The opening line—"It is a truth universally acknowledged..."—is one of the most famous in literature. Mr. Darcy remains the template for the romantic hero.',
        
        quote: '"You have bewitched me, body and soul, and I love, I love, I love you. I never wish to be parted from you from this day on." - Mr. Darcy (2005 film)',
        
        readingExperience: {
            tone: 'Witty, satirical, and romantic',
            style: 'Third-person narration with free indirect discourse that reveals characters\' thoughts',
            difficulty: 'Moderate - The language is formal and uses period vocabulary, but Austen\'s wit and engaging plot carry readers through'
        },
        
        funFact: 'Jane Austen originally titled the novel "First Impressions" and it was initially rejected by a publisher without even being read. She revised it years later and changed the title to Pride and Prejudice.',
        
        relatedWorks: [
            { title: 'Emma', author: 'Jane Austen' },
            { title: 'Jane Eyre', author: 'Charlotte Brontë' },
            { title: 'North and South', author: 'Elizabeth Gaskell' }
        ]
    },
    {
        id: 'alice-in-wonderland',
        title: "Alice's Adventures in Wonderland",
        author: 'Lewis Carroll',
        year: 1865,
        pages: 200,
        readingTime: '3-4 hours',
        dateAdded: '2026-03-06',
        hook: 'A curious girl falls down a rabbit hole into a nonsensical world where logic bends, animals talk, and nothing is quite what it seems.',
        
        whyItMatters: 'Alice\'s Adventures in Wonderland transformed children\'s literature by prioritizing imagination and play over moral instruction. Carroll\'s wordplay, logical puzzles, and absurdist humor created a new kind of fantasy that appeals to both children and adults. The novel\'s influence extends far beyond literature into mathematics, philosophy, psychology, and popular culture.',
        
        themes: [
            'The loss of childhood innocence and identity',
            'The absurdity of arbitrary rules and social conventions',
            'The challenge of making sense of a nonsensical world',
            'Curiosity and its consequences',
            'Growing up and changing size (both literal and metaphorical)'
        ],
        
        authorBackground: 'Lewis Carroll was the pen name of Charles Lutwidge Dodgson (1832-1898), a mathematics lecturer at Oxford University. He was also a pioneering photographer and logic puzzler. He created the story while rowing on the Thames with Alice Liddell and her sisters, weaving a tale at Alice\'s request.',
        
        context: 'Published in 1865 during the Victorian era, a time when children\'s books were typically moralistic, Alice broke conventions with its celebration of nonsense and imagination. Carroll\'s background in mathematics and logic influenced the book\'s wordplay and logical puzzles. The story reflects Victorian anxieties about identity, social class, and the rapid changes of the Industrial Revolution.',
        
        reception: 'Alice was an immediate success, praised for its originality and imaginative illustrations by John Tenniel. While some Victorian critics found it too nonsensical, children and many adults loved it. Over time, it has been interpreted through various lenses—Freudian psychology, political satire, drug allegory—though Carroll insisted it was simply a story for children.',
        
        culturalImpact: 'Alice has become one of the most quoted books in English literature. Characters like the Cheshire Cat, the Mad Hatter, and the Queen of Hearts are cultural icons. The phrase "down the rabbit hole" has entered common language. The story has inspired countless adaptations, reinterpretations, and references in art, music, film, and science.',
        
        quote: '"But I don\'t want to go among mad people," Alice remarked. "Oh, you can\'t help that," said the Cat: "we\'re all mad here."',
        
        readingExperience: {
            tone: 'Whimsical, absurd, and playful with darker undertones',
            style: 'Fast-paced episodic narrative filled with wordplay, poems, and logical puzzles',
            difficulty: 'Easy to read but rich with layers - children enjoy the adventure while adults appreciate the wordplay and satire'
        },
        
        funFact: 'Lewis Carroll filled the story with mathematical concepts and logic puzzles. Many character names and situations are elaborate puns or references to Victorian Oxford society. The "Mad Tea Party" satirizes the changing of time, while the Caucus Race mocks political committees.',
        
        relatedWorks: [
            { title: 'Through the Looking-Glass', author: 'Lewis Carroll' },
            { title: 'The Wizard of Oz', author: 'L. Frank Baum' },
            { title: 'Peter Pan', author: 'J.M. Barrie' }
        ]
    }
];

// Featured book index (will be updated daily in a real implementation)
const featuredBookIndex = 2; // Alice in Wonderland is today's featured book
