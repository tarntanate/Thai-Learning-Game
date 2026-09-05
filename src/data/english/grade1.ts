import type { Question, QuestionCategory } from '@/game/types'

function q(
  number: number,
  category: QuestionCategory,
  prompt: string,
  correct: string,
  wrong1: string,
  wrong2: string,
  wrong3: string,
  hint: string,
  explain: string,
): Question {
  return {
    id: `english-g1-${String(number).padStart(3, '0')}`,
    category,
    prompt,
    choices: [correct, wrong1, wrong2, wrong3],
    answer: 0,
    hint,
    explain,
  }
}

/** Grade 1 English: 50 original exercises for International / English Program learners. */
export const englishGrade1Questions: Question[] = [
  // Phonics and spelling (1–10)
  q(1, 'phonics', 'Which word begins with the same sound as "sun"?', 'sock', 'moon', 'fish', 'tap', 'Say the first sound in "sun" slowly.', 'Sun and sock both begin with the /s/ sound.'),
  q(2, 'phonics', 'Which word ends with the same sound as "cat"?', 'hat', 'ham', 'hen', 'hop', 'Listen to the last sound in "cat".', 'Cat and hat both end with the /t/ sound.'),
  q(3, 'phonics', 'Which word rhymes with "bed"?', 'red', 'bag', 'big', 'bus', 'Rhyming words have the same ending sound.', 'Bed and red rhyme because they share the ending sound /ed/.'),
  q(4, 'phonics', 'Which letter completes the word for an animal that says "meow": c_t?', 'a', 'e', 'i', 'u', 'Say the word for this animal and listen to the middle sound.', 'The word is cat. It is spelled c-a-t.'),
  q(5, 'phonics', 'Which word has the short vowel sound in "pig"?', 'sit', 'sun', 'cake', 'pen', 'Listen to the middle sound in "pig".', 'Pig and sit have the same short i sound.'),
  q(6, 'phonics', 'Which word starts with "sh"?', 'ship', 'chip', 'thin', 'spin', 'Look for the two letters that make the quiet "sh" sound.', 'Ship begins with sh. These two letters work together to make one sound.'),
  q(7, 'phonics', 'Which word starts with the same two sounds as "stop"?', 'star', 'shop', 'top', 'spot', 'Listen for /s/ followed by /t/.', 'Stop and star both begin with the consonant blend st.'),
  q(8, 'phonics', 'Which word has a long a sound, like the letter name A?', 'cake', 'cat', 'cap', 'can', 'A final silent e can make the earlier vowel say its name.', 'Cake has a long a sound. The final e is silent.'),
  q(9, 'phonics', 'Which word has two syllables?', 'rabbit', 'dog', 'fish', 'sun', 'Clap once for each beat you hear in a word.', 'Rabbit has two syllables: rab-bit. The other words each have one.'),
  q(10, 'phonics', 'Which word is spelled correctly?', 'fish', 'fihs', 'fsih', 'fhis', 'The word starts with f and ends with sh.', 'Fish is spelled f-i-s-h.'),

  // Vocabulary (11–20)
  q(11, 'vocabulary', 'Which word means the opposite of "big"?', 'small', 'tall', 'long', 'wide', 'Think of a tiny toy beside a huge toy.', 'Small is the opposite of big.'),
  q(12, 'vocabulary', 'Which word means the same as "happy"?', 'glad', 'sad', 'angry', 'tired', 'Think about how you feel when something nice happens.', 'Glad and happy both describe feeling pleased.'),
  q(13, 'vocabulary', 'Which word names a fruit?', 'apple', 'carrot', 'bread', 'rice', 'It can grow on a tree and have a red or green skin.', 'An apple is a fruit.'),
  q(14, 'vocabulary', 'Which word names something you wear on your feet?', 'shoes', 'gloves', 'hats', 'shirts', 'Think about what you put on before walking outside.', 'Shoes are worn on your feet.'),
  q(15, 'vocabulary', 'Which word means "a place where you can borrow books"?', 'library', 'kitchen', 'playground', 'bathroom', 'You can choose a book there and return it later.', 'A library is a place where people can read and borrow books.'),
  q(16, 'vocabulary', 'Complete the sentence: "I use a _____ to draw a line."', 'pencil', 'pillow', 'plate', 'sock', 'Choose something you can write with.', 'A pencil is a tool for writing and drawing.'),
  q(17, 'vocabulary', 'Which word belongs with "dog, cat, rabbit"?', 'horse', 'table', 'pencil', 'jacket', 'Think about what all three words name.', 'Dog, cat, rabbit, and horse are all animals.'),
  q(18, 'vocabulary', 'Which word means the opposite of "open" in "Open the door"?', 'close', 'carry', 'paint', 'find', 'Think about what you do when you finish going through a door.', 'Close is the opposite of open.'),
  q(19, 'vocabulary', '"The ice feels cold." Which word tells how the ice feels?', 'cold', 'ice', 'the', 'feels', 'Look for the word that describes the temperature.', 'Cold describes how the ice feels.'),
  q(20, 'vocabulary', '"Please whisper. The baby is sleeping." What does "whisper" mean?', 'Speak very quietly', 'Shout loudly', 'Run quickly', 'Clap your hands', 'Think about a voice that will not wake the baby.', 'To whisper means to speak very quietly.'),

  // Grammar (21–30)
  q(21, 'grammar', 'Which word is a noun in "The dog runs"?', 'dog', 'runs', 'the', 'quickly', 'A noun can name an animal.', 'Dog is a noun because it names an animal.'),
  q(22, 'grammar', 'Which word is the action word in "Birds fly"?', 'fly', 'birds', 'blue', 'nest', 'Ask what the birds do.', 'Fly is a verb. It tells what the birds do.'),
  q(23, 'grammar', 'Complete the sentence: "I see _____ apple."', 'an', 'a', 'am', 'is', 'Use an before a word that begins with a vowel sound.', 'We say an apple because apple begins with a vowel sound.'),
  q(24, 'grammar', 'Complete the sentence: "There are two _____."', 'cats', 'cat', 'a cat', 'cat is', 'Two means more than one.', 'We add s to cat to make the plural cats.'),
  q(25, 'grammar', 'Complete the sentence: "I _____ happy."', 'am', 'is', 'are', 'be', 'Choose the form of be that goes with I.', 'We use am with I: I am happy.'),
  q(26, 'grammar', 'Complete the sentence: "The children _____ in the classroom."', 'are', 'is', 'am', 'be', 'Children means more than one child.', 'We use are with the plural noun children.'),
  q(27, 'grammar', '"Ben is my brother. _____ likes football." Which word fits?', 'He', 'She', 'It', 'We', 'Choose the pronoun that can replace Ben, one boy.', 'He replaces Ben so we do not need to repeat his name.'),
  q(28, 'grammar', 'Complete the sentence: "The ball is _____ the box. You must open the box to get it."', 'in', 'on', 'under', 'beside', 'The ball is inside something.', 'In tells us that the ball is inside the box.'),
  q(29, 'grammar', 'Which word describes the kite in "I have a red kite"?', 'red', 'have', 'I', 'a', 'Look for the word that tells its color.', 'Red is an adjective describing the kite.'),
  q(30, 'grammar', 'Complete the sentence: "She _____ a book every day."', 'reads', 'read', 'reading', 'to read', 'With she, a present-tense action word often ends in s.', 'We use reads with she to describe something she does regularly.'),

  // Sentences and punctuation (31–40)
  q(31, 'writing', 'Which sentence starts with a capital letter?', 'The dog is wet.', 'the dog is wet.', 'the Dog is wet.', 'the dog is Wet.', 'Look at the first letter of each sentence.', 'A sentence begins with a capital letter: The dog is wet.'),
  q(32, 'writing', 'Which name is written correctly?', 'Mia', 'mia', 'mIa', 'miA', 'A person\'s name begins with a capital letter.', 'Mia is a name, so its first letter must be a capital M.'),
  q(33, 'writing', 'Which mark completes this question: "Where is my bag_"?', '?', '.', ',', ':', 'The sentence asks for an answer.', 'A question ends with a question mark.'),
  q(34, 'writing', 'Choose the statement with the correct ending mark.', 'I have a pet dog.', 'I have a pet dog,', 'I have a pet dog?', 'I have a pet dog:', 'A statement tells us something and can end with a full stop.', 'I have a pet dog. is a statement ending with a full stop (period).'),
  q(35, 'writing', 'Put these words in order: "can / I / swim".', 'I can swim.', 'Can swim I.', 'Swim I can.', 'I swim can.', 'Start with who does the action, then use can.', 'I can swim. puts the words in the usual sentence order.'),
  q(36, 'writing', 'Which group of words is a complete sentence?', 'The cat sleeps.', 'The small cat', 'Under the bed', 'A soft pillow', 'A complete sentence tells who or what and what happens.', 'The cat sleeps. tells us about the cat and what it does.'),
  q(37, 'writing', 'Which sentence uses capital I correctly?', 'My friend and I play.', 'My friend and i play.', 'my friend and i play.', 'My Friend and i play.', 'The word I is always a capital letter.', 'We always write the pronoun I as a capital letter.'),
  q(38, 'writing', 'Which sentence has spaces between all its words?', 'We like to read.', 'Welike to read.', 'We liketo read.', 'We like toread.', 'Each word needs its own space on both sides, except at the ends.', 'We like to read. separates all four words with spaces.'),
  q(39, 'writing', 'Choose the word that joins these ideas: "I like apples _____ bananas."', 'and', 'under', 'is', 'she', 'Use a joining word to add one thing to another.', 'And joins apples and bananas in the sentence.'),
  q(40, 'writing', 'Which sentence asks a question?', 'Can you help me?', 'I can help you.', 'My bag is blue.', 'We play outside.', 'Look for words that ask someone for an answer.', 'Can you help me? asks a question and ends with a question mark.'),

  // Reading: each passage stays with its question when the deck is shuffled (41–50)
  q(41, 'reading', 'Read: "Mia has a red bag. Her book is in the bag." What color is Mia\'s bag?', 'Red', 'Blue', 'Green', 'Yellow', 'Look for the word that describes the bag.', 'The first sentence says Mia has a red bag.'),
  q(42, 'reading', 'Read: "Tom feeds his cat before school. The cat eats from a small bowl." Who feeds the cat?', 'Tom', 'His teacher', 'His sister', 'His friend', 'Look for the name beside the action feeds.', 'The passage says Tom feeds his cat.'),
  q(43, 'reading', 'Read: "A frog sits on a log by the pond." Where does the frog sit?', 'On a log', 'Under a bed', 'In a tree', 'On a roof', 'Find the words after sits.', 'The passage tells us that the frog sits on a log.'),
  q(44, 'reading', 'Read: "First, Lily puts soil in a pot. Next, she plants a seed. Then, she waters it." What does Lily do first?', 'Puts soil in a pot', 'Waters the seed', 'Picks a flower', 'Plants a seed', 'The word First points to the beginning.', 'Lily puts soil in a pot before planting and watering the seed.'),
  q(45, 'reading', 'Read: "It is raining. Sam opens his umbrella to stay dry." Why does Sam open his umbrella?', 'To stay dry', 'To carry his lunch', 'To find his pencil', 'To feed a bird', 'Look for the words that tell why he uses the umbrella.', 'Sam opens his umbrella to keep the rain off him and stay dry.'),
  q(46, 'reading', 'Read: "Zoe cannot find her teddy. She looks under the bed and finds it there." Where was the teddy?', 'Under the bed', 'In the kitchen', 'On a bus', 'By the gate', 'The word there points back to the place Zoe looks.', 'Zoe finds her teddy under the bed.'),
  q(47, 'reading', 'Read: "Max smiles and claps when his friend arrives." How does Max probably feel?', 'Happy', 'Angry', 'Afraid', 'Lonely', 'Think about what smiling and clapping usually show.', 'His smile and clapping suggest that Max is happy to see his friend.'),
  q(48, 'reading', 'Read: "We take a ball to the park. We kick it to each other." What does "it" mean here?', 'The ball', 'The park', 'A tree', 'A shoe', 'Look for the thing the children can kick.', 'It refers to the ball that the children take to the park.'),
  q(49, 'reading', 'Read: "A little duck looks for its mother. It finds her by the pond." Which title fits best?', 'The Duck Finds Its Mother', 'A Trip to the Moon', 'Making a Sandwich', 'The Lost Pencil', 'Choose a title about the main character and what happens.', 'The story is about a duck finding its mother.'),
  q(50, 'reading', 'Read: "Ella packs a sandwich and an apple for lunch. At noon, she opens her lunch box." What will Ella most likely do next?', 'Eat her lunch', 'Go to bed', 'Brush her teeth for bed', 'Put on her pajamas', 'Think about why someone opens a lunch box at noon.', 'Ella has packed food and opened her lunch box, so she will most likely eat lunch next.'),
]
