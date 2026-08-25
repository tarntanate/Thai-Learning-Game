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
    id: `science-g1-${String(number).padStart(3, '0')}`,
    category,
    prompt,
    choices: [correct, wrong1, wrong2, wrong3],
    answer: 0,
    hint,
    explain,
  }
}

/**
 * Grade 1 Science (English Program), 50 questions.
 * Uses short, concrete language suitable for early primary learners.
 */
export const scienceGrade1Questions: Question[] = [
  // Living things (1-15)
  q(1, 'livingthings', 'Which one is a living thing?', 'A dog', 'A rock', 'A chair', 'A spoon', 'Living things need food and can grow.', 'A dog is living because it grows, needs food, and responds to its surroundings.'),
  q(2, 'livingthings', 'What does a plant need to grow?', 'Water', 'Plastic', 'A toy', 'A television', 'Plants take this in through their roots.', 'Plants need water to live and grow.'),
  q(3, 'livingthings', 'Which part of a plant usually grows under the soil?', 'Roots', 'Flowers', 'Leaves', 'Fruit', 'This part holds the plant in place.', 'Roots usually grow under the soil and take in water.'),
  q(4, 'livingthings', 'Which part of a plant takes in sunlight?', 'Leaves', 'Roots', 'Seeds', 'Soil', 'This part is often flat and green.', 'Leaves capture sunlight to help the plant make food.'),
  q(5, 'livingthings', 'A baby cat is called a _____.', 'kitten', 'puppy', 'calf', 'chick', 'It is the young form of a cat.', 'A baby cat is called a kitten.'),
  q(6, 'livingthings', 'Which animal has feathers?', 'A bird', 'A fish', 'A frog', 'A snail', 'Feathers help many of these animals fly and stay warm.', 'Birds are the only living animals with feathers.'),
  q(7, 'livingthings', 'Which body covering does a fish have?', 'Scales', 'Feathers', 'Fur', 'Wool', 'These overlap and protect a fish\'s body.', 'Most fish have scales covering and protecting their bodies.'),
  q(8, 'livingthings', 'Where does a frog usually live?', 'Near water and on land', 'Only in a desert', 'Inside a nest in a tree', 'Under sea ice', 'A frog can move in water and on land.', 'Frogs are amphibians and commonly live both near water and on land.'),
  q(9, 'livingthings', 'Which animal is a herbivore?', 'A rabbit', 'A lion', 'A shark', 'An eagle', 'A herbivore eats plants.', 'Rabbits eat grasses and other plants, so they are herbivores.'),
  q(10, 'livingthings', 'What do all animals need to drink?', 'Water', 'Oil', 'Paint', 'Glue', 'It keeps living bodies working.', 'All animals need water to survive.'),
  q(11, 'livingthings', 'Why do birds build nests?', 'To keep eggs and young safe', 'To grow flowers', 'To store rainbows', 'To make rocks', 'Think about where baby birds begin life.', 'Many birds use nests to protect their eggs and young.'),
  q(12, 'livingthings', 'Which animal moves by slithering?', 'A snake', 'A horse', 'A butterfly', 'A rabbit', 'This animal has no legs.', 'A snake moves by bending and pushing its body along the ground.'),
  q(13, 'livingthings', 'What can a seed grow into?', 'A new plant', 'A stone', 'A cloud', 'A metal spoon', 'Plant life can begin inside it.', 'With suitable water, air, and warmth, a seed can grow into a plant.'),
  q(14, 'livingthings', 'Which is nonliving?', 'A pencil', 'A tree', 'An ant', 'A mushroom', 'It does not grow or need food.', 'A pencil is an object and is not alive.'),
  q(15, 'livingthings', 'Which habitat is best for a polar bear?', 'A cold, icy place', 'A hot rainforest', 'A warm pond', 'A dry classroom', 'Its thick fur and fat help it stay warm.', 'Polar bears are adapted to cold Arctic habitats.'),

  // Human body and health (16-23)
  q(16, 'bodyhealth', 'Which sense do you use with your eyes?', 'Sight', 'Hearing', 'Taste', 'Smell', 'Eyes help you see.', 'We use our eyes for the sense of sight.'),
  q(17, 'bodyhealth', 'Which body part helps you hear?', 'Ears', 'Eyes', 'Nose', 'Tongue', 'Sound enters through this pair of body parts.', 'Our ears detect sounds.'),
  q(18, 'bodyhealth', 'Which body part helps you smell a flower?', 'Nose', 'Knee', 'Hand', 'Foot', 'Air carrying the scent enters here.', 'We use our nose for the sense of smell.'),
  q(19, 'bodyhealth', 'Which sense tells you that ice is cold?', 'Touch', 'Taste', 'Sight', 'Hearing', 'Your skin detects temperature.', 'The sense of touch lets us feel temperature.'),
  q(20, 'bodyhealth', 'What should you do before eating?', 'Wash your hands', 'Touch the floor', 'Hide your food', 'Run with scissors', 'This helps remove germs.', 'Washing hands with soap and water helps stop germs from spreading.'),
  q(21, 'bodyhealth', 'Which food is a healthy snack?', 'An apple', 'A bag of candy', 'A bowl of sugar', 'A fizzy drink', 'Choose a fresh fruit.', 'An apple provides nutrients and is a healthy snack choice.'),
  q(22, 'bodyhealth', 'Why does your body need sleep?', 'To rest and grow', 'To stop breathing', 'To forget how to walk', 'To become dirty', 'Your body repairs itself while you rest.', 'Sleep helps the body and brain rest, recover, and grow.'),
  q(23, 'bodyhealth', 'What happens to your breathing when you run?', 'It gets faster', 'It stops', 'It gets much colder', 'It disappears', 'Working muscles need more oxygen.', 'Breathing becomes faster during exercise to bring in more oxygen.'),

  // Matter, forces, and energy (24-35)
  q(24, 'matterenergy', 'Which object is solid?', 'A wooden block', 'Milk', 'Air', 'Steam', 'It keeps its own shape.', 'A wooden block is a solid and keeps its shape.'),
  q(25, 'matterenergy', 'Which one is a liquid?', 'Water', 'A book', 'A balloon full of air', 'A rock', 'It can be poured and takes the shape of its container.', 'Water is a liquid.'),
  q(26, 'matterenergy', 'What happens to an ice cube in a warm room?', 'It melts', 'It grows', 'It becomes wood', 'It freezes more', 'Warmth changes solid ice into liquid water.', 'Ice melts into liquid water when it gains heat.'),
  q(27, 'matterenergy', 'Which material is transparent?', 'Clear glass', 'Cardboard', 'Wood', 'Stone', 'You can see clearly through it.', 'Clear glass lets most light pass through, so it is transparent.'),
  q(28, 'matterenergy', 'Which material is best for a raincoat?', 'Waterproof plastic', 'Paper tissue', 'Cotton wool', 'Dry leaves', 'It should stop water from passing through.', 'Waterproof plastic keeps rain from soaking through.'),
  q(29, 'matterenergy', 'Which object will a magnet attract?', 'An iron nail', 'A wooden stick', 'A rubber band', 'A paper cup', 'Magnets attract certain metals, including iron.', 'An iron nail is attracted to a magnet.'),
  q(30, 'matterenergy', 'A push or a pull is called a _____.', 'force', 'shadow', 'sound', 'color', 'It can make an object move or stop.', 'A force is a push or a pull.'),
  q(31, 'matterenergy', 'What can make a toy car move away from you?', 'A push', 'A shadow', 'A smell', 'A color', 'Your hand can apply this force forward.', 'Pushing the toy car can make it move away.'),
  q(32, 'matterenergy', 'Which object is a source of light?', 'The Sun', 'The Moon', 'A mirror', 'A book', 'It makes its own light.', 'The Sun produces its own light.'),
  q(33, 'matterenergy', 'When is a shadow made?', 'When an object blocks light', 'When water freezes', 'When a bell rings', 'When sugar dissolves', 'Light cannot pass through an opaque object.', 'A shadow forms where an object blocks light.'),
  q(34, 'matterenergy', 'Which action makes sound?', 'Striking a drum', 'Looking at a picture', 'Holding a pillow still', 'Watching a cloud', 'The drum skin vibrates.', 'Striking a drum makes it vibrate and produce sound.'),
  q(35, 'matterenergy', 'Which material feels soft?', 'Cotton wool', 'A brick', 'A metal spoon', 'A glass jar', 'It is often used to make things fluffy.', 'Cotton wool is soft to the touch.'),

  // Earth and space (36-45)
  q(36, 'earthspace', 'What gives Earth light during the day?', 'The Sun', 'The Moon', 'A cloud', 'A mountain', 'It is the star closest to Earth.', 'The Sun lights our daytime sky.'),
  q(37, 'earthspace', 'What can you often see in the sky at night?', 'The Moon', 'A rainbow every night', 'The ocean', 'Tree roots', 'It appears to change shape over a month.', 'The Moon is often visible in the night sky.'),
  q(38, 'earthspace', 'Which weather has water falling from clouds?', 'Rainy', 'Sunny', 'Windy', 'Dry', 'You may need an umbrella.', 'Rainy weather occurs when drops of water fall from clouds.'),
  q(39, 'earthspace', 'Which tool measures temperature?', 'A thermometer', 'A ruler', 'A clock', 'A balance', 'It tells how hot or cold something is.', 'A thermometer measures temperature.'),
  q(40, 'earthspace', 'What moves leaves and flags outside?', 'Wind', 'A shadow', 'Soil', 'Moonlight', 'It is moving air.', 'Wind is moving air and can move light objects.'),
  q(41, 'earthspace', 'Which is a natural material from Earth?', 'Rock', 'Plastic', 'Glass bottle', 'Toy brick', 'It can be found in the ground.', 'Rock occurs naturally on Earth.'),
  q(42, 'earthspace', 'Where is most of Earth\'s water found?', 'In oceans', 'In cups', 'In swimming pools', 'In clouds', 'These huge bodies of salty water cover much of Earth.', 'Most of Earth\'s water is salt water in the oceans.'),
  q(43, 'earthspace', 'What should you wear on a very sunny day?', 'A hat', 'A wool scarf over your face', 'Wet socks', 'Ice skates', 'It can shade your head and face.', 'A hat helps protect you from strong sunlight.'),
  q(44, 'earthspace', 'Which season is usually the coldest?', 'Winter', 'Summer', 'Spring', 'Autumn', 'People often wear warmer clothes then.', 'Winter is generally the coldest season in places with four seasons.'),
  q(45, 'earthspace', 'Which action helps save water?', 'Turn off the tap while brushing', 'Leave the tap running', 'Pour clean water away', 'Take extra-long showers', 'Use water only when you need it.', 'Turning off the tap prevents clean water from being wasted.'),

  // Science skills (46-50)
  q(46, 'inquiry', 'Which sense can help you describe the color of a leaf?', 'Sight', 'Hearing', 'Taste', 'Smell', 'You observe color with your eyes.', 'Sight is used to observe color.'),
  q(47, 'inquiry', 'Which tool is best for measuring the length of a pencil?', 'A ruler', 'A thermometer', 'A cup', 'A clock', 'It has marks in centimeters.', 'A ruler measures length.'),
  q(48, 'inquiry', 'To compare two rocks fairly, what should you do?', 'Observe both in the same way', 'Look at only one rock', 'Hide both rocks', 'Change one rock first', 'Use the same test for each rock.', 'A fair comparison uses the same observations or tests for both objects.'),
  q(49, 'inquiry', 'What is an observation?', 'Information noticed with senses or tools', 'A story you know is pretend', 'A random answer', 'A rule for a game', 'Scientists look, listen, measure, and record.', 'An observation is information gathered using senses or measuring tools.'),
  q(50, 'inquiry', 'What should you do if you spill water during an experiment?', 'Tell an adult and clean it safely', 'Run away and leave it', 'Cover it with a book', 'Splash more water', 'Wet floors can be slippery.', 'Reporting and safely cleaning a spill helps prevent accidents.'),
]
