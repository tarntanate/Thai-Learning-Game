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
    id: `english-g2-${String(number).padStart(3, '0')}`,
    category,
    prompt,
    choices: [correct, wrong1, wrong2, wrong3],
    answer: 0,
    hint,
    explain,
  }
}

/** Grade 2 English: 50 original exercises building on Grade 1 language and reading skills. */
export const englishGrade2Questions: Question[] = [
  // Phonics and spelling (1–10)
  q(1, 'phonics', 'Which word has the same vowel sound as "rain"?', 'train', 'ran', 'ten', 'thin', 'Listen for the long a sound.', 'Rain and train both use ai to spell the long a sound.'),
  q(2, 'phonics', 'Which word has the same vowel sound as "tree"?', 'beach', 'bread', 'bed', 'bird', 'Different letter pairs can make the long e sound.', 'The ee in tree and the ea in beach both make a long e sound.'),
  q(3, 'phonics', 'Which word begins with a silent letter?', 'knee', 'kite', 'king', 'keep', 'Say each word and listen for the first written letter.', 'The k in knee is silent. The first sound we hear is /n/.'),
  q(4, 'phonics', 'Which word ends with the same sound as "sing"?', 'ring', 'run', 'sit', 'rug', 'Listen for the ng sound at the end.', 'Sing and ring both end with the ng sound.'),
  q(5, 'phonics', 'Which word has three syllables?', 'banana', 'basket', 'frog', 'sunset', 'Clap the beats as you say each word.', 'Banana has three syllables: ba-na-na.'),
  q(6, 'phonics', 'Which word has the same vowel sound as "moon"?', 'spoon', 'book', 'good', 'foot', 'The letters oo do not always make the same sound.', 'Moon and spoon share the long oo sound. Book, good, and foot have a different vowel sound.'),
  q(7, 'phonics', 'Add -ing to "hop". Which spelling is correct?', 'hopping', 'hoping', 'hoppping', 'hoppng', 'Double the final consonant in hop before adding -ing.', 'Hop becomes hopping. Doubling p keeps the short vowel pattern; hoping comes from hope.'),
  q(8, 'phonics', 'Which word has the same ending sound as "light"?', 'night', 'late', 'little', 'list', 'Look for a word that rhymes with light.', 'Light and night rhyme. Both use igh for the long i sound before t.'),
  q(9, 'phonics', 'Which word has the same first sound as "phone"?', 'fish', 'pan', 'van', 'shop', 'The letters ph work together to make one sound.', 'The ph in phone makes the /f/ sound, like the f in fish.'),
  q(10, 'phonics', 'Which set of words is in alphabetical order?', 'apple, bread, carrot, milk', 'bread, apple, carrot, milk', 'apple, carrot, bread, milk', 'milk, carrot, bread, apple', 'Compare the first letters using the alphabet.', 'A comes before B, then C, then M, so apple, bread, carrot, milk is in alphabetical order.'),

  // Vocabulary and word meaning (11–20)
  q(11, 'vocabulary', '"The enormous elephant walked past us." What does "enormous" mean?', 'Very big', 'Very tiny', 'Very quiet', 'Very hungry', 'Think about a word that describes size.', 'Enormous means very big.'),
  q(12, 'vocabulary', 'Which word means the opposite of "arrive"?', 'leave', 'enter', 'reach', 'come', 'Arrive means to get to a place.', 'Leave means to go away from a place, the opposite of arrive.'),
  q(13, 'vocabulary', '"The glass is fragile, so carry it carefully." What does "fragile" mean?', 'Easy to break', 'Hard to lift', 'Full of water', 'Very dirty', 'Why would someone need to be careful with glass?', 'Fragile means easily broken or damaged.'),
  q(14, 'vocabulary', 'What does "unhappy" mean?', 'Not happy', 'Happy again', 'Very happy', 'Happy before', 'The prefix un- can mean not.', 'Adding un- to happy makes unhappy, meaning not happy.'),
  q(15, 'vocabulary', 'What does "reread" mean?', 'Read again', 'Stop reading', 'Read quietly', 'Write a story', 'The prefix re- can mean again.', 'Reread means to read something again.'),
  q(16, 'vocabulary', 'What does "careless" mean in "A careless mistake"?', 'Made without enough care', 'Made with great care', 'Made very slowly', 'Made on purpose every time', 'The ending -less can mean without.', 'Careless means not taking enough care or paying enough attention.'),
  q(17, 'vocabulary', 'Which compound word means "a brush used to clean teeth"?', 'toothbrush', 'hairbrush', 'paintbrush', 'toothache', 'Join the word for what you clean to the word for the tool.', 'Tooth and brush join to make toothbrush.'),
  q(18, 'vocabulary', 'Choose the correct word: "I can _____ the birds singing."', 'hear', 'here', 'hair', 'hare', 'Choose the word about using your ears.', 'Hear means to notice sound. Here means in this place.'),
  q(19, 'vocabulary', '"The duck has a flat bill." What does "bill" mean in this sentence?', 'A bird\'s beak', 'A request for payment', 'A paper note of money', 'A person\'s name', 'Use the word duck to choose the right meaning.', 'Here, bill means the beak of a bird such as a duck.'),
  q(20, 'vocabulary', 'Which word best completes the sentence: "The mouse _____ quietly past the sleeping cat"?', 'crept', 'shouted', 'crashed', 'roared', 'Choose an action that describes slow, quiet movement.', 'Crept means moved slowly and quietly, which fits the sleeping cat.'),

  // Grammar (21–30)
  q(21, 'grammar', 'Complete the sentence: "Yesterday, we _____ to the park."', 'went', 'go', 'goes', 'going', 'Yesterday tells us the action happened in the past.', 'Went is the past tense of go.'),
  q(22, 'grammar', 'Complete the sentence: "Last night, Ava _____ a picture."', 'painted', 'paint', 'paints', 'painting', 'For many verbs, add -ed to show a finished action in the past.', 'Painted is the past tense of paint and matches last night.'),
  q(23, 'grammar', 'Complete the sentence: "Look! The children _____ in the pool right now."', 'are swimming', 'is swimming', 'swims', 'was swimming', 'Use are with children and an -ing verb for an action happening now.', 'The children are swimming describes a plural subject doing something right now.'),
  q(24, 'grammar', 'Which sentence tells about the future?', 'We will visit Grandma tomorrow.', 'We visited Grandma yesterday.', 'We visit Grandma every Sunday.', 'We are visiting Grandma now.', 'Look for will and a word meaning a later day.', 'Will visit and tomorrow show that the visit is in the future.'),
  q(25, 'grammar', 'Complete the sentence: "One child is reading. Three _____ are drawing."', 'children', 'childs', 'childes', 'child', 'Some plural nouns change instead of adding s.', 'The plural of child is children.'),
  q(26, 'grammar', 'Complete the sentence: "This is Leo\'s bag. It belongs to _____."', 'him', 'he', 'his', 'they', 'After belongs to, use an object pronoun for Leo.', 'Him is the object pronoun that replaces Leo after to.'),
  q(27, 'grammar', 'Which sentence shows that one girl owns the hat?', 'This is the girl\'s hat.', 'This is the girls hat.', 'This is the girls\' hat.', 'This is the girl hat.', 'For one owner, add apostrophe s to the singular noun.', 'Girl\'s means belonging to one girl. Girls\' would mean belonging to more than one girl.'),
  q(28, 'grammar', 'Complete the sentence: "A giraffe is _____ than a goat."', 'taller', 'tallest', 'tall', 'more taller', 'When comparing two things, many short adjectives take -er.', 'Taller compares the height of a giraffe and a goat.'),
  q(29, 'grammar', 'Complete the sentence: "I wore a coat _____ it was cold."', 'because', 'or', 'but', 'until', 'Choose the joining word that introduces a reason.', 'Because explains the reason for wearing a coat: it was cold.'),
  q(30, 'grammar', '"The rabbit hopped quickly." Which word tells how the rabbit hopped?', 'quickly', 'rabbit', 'the', 'hopped', 'Look for the word that describes the action.', 'Quickly is an adverb. It tells how the rabbit hopped.'),

  // Sentences and punctuation (31–40)
  q(31, 'writing', 'Which sentence uses capital letters correctly?', 'On Monday, Sara went to school.', 'On monday, Sara went to school.', 'On Monday, sara went to school.', 'on Monday, Sara went to school.', 'Capitalize the first word, the day, and the person\'s name.', 'On begins the sentence; Monday is a day name; Sara is a person\'s name. All begin with capitals.'),
  q(32, 'writing', 'Which sentence uses commas correctly in a list?', 'I packed a book, a pen and a ruler.', 'I packed, a book a pen and a ruler.', 'I packed a book a, pen and a ruler.', 'I packed a book a pen and, a ruler.', 'A comma separates items in a list.', 'The comma separates a book from the next item. A comma before and is also possible, but is not required here.'),
  q(33, 'writing', 'Which contraction means "do not"?', 'don\'t', 'doesn\'t', 'didn\'t', 'can\'t', 'An apostrophe takes the place of the missing letter.', 'Don\'t is the short form of do not. The apostrophe replaces the o in not.'),
  q(34, 'writing', 'Which ending mark best shows strong excitement: "What an amazing goal_"?', '!', '?', ',', ':', 'Choose the mark that can show a strong feeling.', 'An exclamation mark shows strong excitement: What an amazing goal!'),
  q(35, 'writing', 'Put the words in the usual order: "every morning / feeds / Maya / her rabbit".', 'Maya feeds her rabbit every morning.', 'Maya her rabbit feeds every morning.', 'Feeds Maya every morning her rabbit.', 'Her rabbit every morning Maya feeds.', 'Start with who, then the action, then what she feeds.', 'Maya feeds her rabbit every morning. follows the usual subject, verb, object order.'),
  q(36, 'writing', 'Which is a complete sentence?', 'The little bird built a nest.', 'The little bird in the tree', 'Under a leafy branch', 'A nest made of sticks', 'Look for a subject and a verb that tell a complete idea.', 'The little bird built a nest. tells who did something and what happened.'),
  q(37, 'writing', 'Choose the best way to join: "I wanted to play outside. It was raining."', 'I wanted to play outside, but it was raining.', 'I wanted to play outside because it was raining.', 'I wanted to play outside or it was raining.', 'I wanted to play outside it was raining.', 'Use a joining word that shows a contrast between a wish and a problem.', 'But connects the wish to play outside with the rain that makes it difficult.'),
  q(38, 'writing', 'Which sentence gives a command?', 'Please close the gate.', 'Is the gate open?', 'The gate is green.', 'I saw a gate.', 'A command tells someone to do something.', 'Please close the gate. politely tells someone what to do.'),
  q(39, 'writing', 'Which sentence has correct subject–verb agreement?', 'My friends play after school.', 'My friends plays after school.', 'My friend play after school.', 'My friends is playing after school.', 'The plural subject friends needs a matching verb.', 'We use play with the plural subject my friends.'),
  q(40, 'writing', 'Read: "First, wash the apple. Next, cut it into slices. _____, eat the slices." Which word completes the instructions?', 'Finally', 'Yesterday', 'Before', 'Never', 'The missing word introduces the last step.', 'Finally marks the last step in the instructions.'),

  // Reading: independent passages for detail, inference, sequence, and text purpose (41–50)
  q(41, 'reading', 'Read: "At the library, Noah chose a book about whales. He wanted to learn how they live in the ocean. He took the book home to read." Why did Noah choose the book?', 'To learn about whales', 'To learn to bake bread', 'To find a map of his town', 'To read about trains', 'Look for the sentence explaining what Noah wanted to learn.', 'Noah chose the book because he wanted to learn how whales live in the ocean.'),
  q(42, 'reading', 'Read: "Bees visit flowers to collect food. As they move, they carry pollen from flower to flower. This helps many plants make seeds." What is the passage mainly about?', 'How bees help plants', 'How to build a birdhouse', 'Why fish swim together', 'When trees lose their leaves', 'Choose the idea that connects all three sentences.', 'The passage describes bees visiting flowers and carrying pollen, which helps plants make seeds.'),
  q(43, 'reading', 'Read: "First, Ravi mixed flour and water. Next, he kneaded the dough. Then, an adult put it in the oven. Finally, they let the bread cool." What happened just before the bread went into the oven?', 'Ravi kneaded the dough', 'They let the bread cool', 'They ate the bread', 'Ravi washed the plate', 'Find the step immediately before Then.', 'Ravi kneaded the dough after mixing it and just before an adult put it in the oven.'),
  q(44, 'reading', 'Read: "Dark clouds filled the sky. Ella heard thunder and saw the first raindrops. She took the dry washing off the line and carried it indoors." Why did Ella most likely bring the washing inside?', 'To stop it from getting wet', 'To help it catch the wind', 'To put it in the rain', 'To make room for a kite', 'Use the weather clues and think about keeping dry clothes dry.', 'The rain was starting, so Ella probably brought the washing inside to keep it dry.'),
  q(45, 'reading', 'Read: "Omar lent Ben a pencil because Ben had forgotten his. After the lesson, Ben returned it and said thank you." What does "it" refer to?', 'The pencil', 'The lesson', 'A school bag', 'A book', 'Find the object that Omar lent and Ben could return.', 'It refers to the pencil Omar lent Ben.'),
  q(46, 'reading', 'Read: "Lena could not reach a book on a high shelf. She asked the librarian for help. The librarian took the book down for her." How was Lena\'s problem solved?', 'The librarian got the book for her', 'Lena bought a new shelf', 'The book fell into her bag', 'Lena went home without a book', 'Look for the action that helped Lena get the book.', 'Lena asked for help, and the librarian took the book down from the high shelf.'),
  q(47, 'reading', 'Read: "Our class planted beans in cups. We put the cups near a sunny window and watered the soil. After a week, small green shoots appeared." Which title fits best?', 'Growing Beans in Our Classroom', 'A Rainy Day at the Beach', 'How to Make Paper Cups', 'The Missing School Bus', 'Choose a title that covers the main activity and result.', 'The passage is about planting beans, caring for them, and watching them grow in class.'),
  q(48, 'reading', 'Read this notice: "Art Club meets on Tuesday at 3 p.m. in Room 4. Bring a pencil and an old shirt." What is the main purpose of the notice?', 'To tell students when and where to attend Art Club', 'To tell a story about a lost shirt', 'To explain how pencils are made', 'To describe a famous painting', 'A notice often gives useful details about an event.', 'The notice gives the meeting day, time, place, and things to bring to Art Club.'),
  q(49, 'reading', 'Read: "Nina likes drawing animals. Her brother likes drawing cars. Both use colored pencils, and both enjoy sharing their pictures." How are Nina and her brother alike?', 'They both enjoy sharing their pictures', 'They both draw only animals', 'They both draw only cars', 'They both use only black pens', 'Look for the word both, which introduces something they share.', 'The passage says both children enjoy sharing their pictures.'),
  q(50, 'reading', 'Read: "The class was about to start a quiet reading lesson. A loud bell rang. Their teacher said, \'It is our fire drill. Walk with me to our meeting place.\' The children lined up at the door." What will the children most likely do next?', 'Walk with the teacher to the meeting place', 'Start painting at their desks', 'Run back to collect all their toys', 'Begin eating lunch in the classroom', 'Use the teacher\'s instruction and the children lining up as clues.', 'The teacher has explained the drill, and the children are ready to follow the instruction to walk to the meeting place.'),
]
