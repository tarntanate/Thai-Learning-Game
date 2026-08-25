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
    id: `science-g2-${String(number).padStart(3, '0')}`,
    category,
    prompt,
    choices: [correct, wrong1, wrong2, wrong3],
    answer: 0,
    hint,
    explain,
  }
}

/**
 * Grade 2 Science (English Program), 50 questions.
 * Extends Grade 1 topics with life cycles, habitats, material changes, and simple investigations.
 */
export const scienceGrade2Questions: Question[] = [
  // Living things and habitats (1-14)
  q(1, 'livingthings', 'Which feature helps a duck swim?', 'Webbed feet', 'Sharp horns', 'Dry scales', 'Long claws for climbing', 'Its toes are joined by skin.', 'A duck uses its webbed feet like paddles in water.'),
  q(2, 'livingthings', 'What is the first stage in a butterfly\'s life cycle?', 'Egg', 'Adult butterfly', 'Pupa', 'Caterpillar', 'A butterfly lays this on a plant.', 'The butterfly life cycle begins with an egg.'),
  q(3, 'livingthings', 'A caterpillar changes into a butterfly inside a _____.', 'pupa', 'seed', 'nest', 'shellfish', 'This stage is also called a chrysalis.', 'During the pupa stage, the caterpillar changes into an adult butterfly.'),
  q(4, 'livingthings', 'Which is the correct frog life cycle?', 'Egg, tadpole, froglet, adult frog', 'Tadpole, egg, adult frog, froglet', 'Adult frog, froglet, egg, tadpole', 'Egg, adult frog, tadpole, froglet', 'A frog begins in an egg and hatches with a tail.', 'A frog develops from egg to tadpole, then froglet, and finally adult.'),
  q(5, 'livingthings', 'Why do green plants need sunlight?', 'To make food', 'To make plastic', 'To find a nest', 'To turn into animals', 'Leaves capture light for this process.', 'Plants use light energy to make their own food.'),
  q(6, 'livingthings', 'What is one job of a plant stem?', 'Carry water to the leaves', 'Make sounds', 'Catch fish', 'Chew food', 'It connects the roots and leaves.', 'The stem supports the plant and transports water to its leaves.'),
  q(7, 'livingthings', 'Why are flowers important to many plants?', 'They help the plant make seeds', 'They drink all the soil', 'They turn into roots', 'They block every insect', 'Seeds often develop after a flower is pollinated.', 'Flowers are reproductive structures that help many plants produce seeds.'),
  q(8, 'livingthings', 'Which animal is well suited to a desert habitat?', 'A camel', 'A penguin', 'A polar bear', 'A trout', 'It can cope with heat and little water.', 'Camels have features that help them survive in hot, dry deserts.'),
  q(9, 'livingthings', 'Which food chain is in the correct order?', 'Grass → rabbit → fox', 'Fox → grass → rabbit', 'Rabbit → fox → grass', 'Grass → fox → rabbit', 'Begin with a plant, then a plant-eater.', 'A rabbit eats grass, and a fox may eat the rabbit.'),
  q(10, 'livingthings', 'An omnivore eats _____.', 'both plants and animals', 'only rocks', 'only plants', 'only animals', 'Humans are an example.', 'Omnivores get food from both plant and animal sources.'),
  q(11, 'livingthings', 'What do fish use to take oxygen from water?', 'Gills', 'Lungs only', 'Feathers', 'Roots', 'These are found near the sides of a fish\'s head.', 'Gills allow fish to take dissolved oxygen from water.'),
  q(12, 'livingthings', 'Why might an animal migrate?', 'To find food or a suitable climate', 'To become a plant', 'To stop needing water', 'To change into a rock', 'Some animals travel when seasons change.', 'Animals may migrate to find food, breed, or reach a more suitable climate.'),
  q(13, 'livingthings', 'Which living thing is a producer?', 'A grass plant', 'A hawk', 'A rabbit', 'A mushroom', 'It makes its own food using sunlight.', 'Green plants are producers because they make their own food.'),
  q(14, 'livingthings', 'What may happen if a pond dries up?', 'Pond animals may lose their habitat', 'Fish will grow wings', 'Water plants will become rocks', 'Every animal will have more water', 'A habitat supplies living things with what they need.', 'If a pond dries up, organisms that depend on it lose water, shelter, and food.'),

  // Human body and health (15-20)
  q(15, 'bodyhealth', 'Which organ pumps blood around your body?', 'The heart', 'The stomach', 'The lungs', 'The skin', 'You can feel it beating in your chest.', 'The heart pumps blood through the body.'),
  q(16, 'bodyhealth', 'What is the main job of the lungs?', 'Help us breathe', 'Digest food', 'Pump blood', 'Move our bones', 'They take oxygen from the air.', 'The lungs exchange gases, bringing oxygen into the body.'),
  q(17, 'bodyhealth', 'Why do we need a balanced diet?', 'To get different nutrients', 'To eat only sweets', 'To avoid all water', 'To stop growing', 'No single food gives the body everything it needs.', 'A balanced diet provides a range of nutrients for health and growth.'),
  q(18, 'bodyhealth', 'Which activity strengthens muscles and the heart?', 'Regular exercise', 'Watching a screen all day', 'Skipping every meal', 'Sleeping all afternoon every day', 'Moving your body makes these parts work.', 'Regular exercise helps keep muscles, bones, and the heart healthy.'),
  q(19, 'bodyhealth', 'How can you help stop a cough from spreading germs?', 'Cover it with your elbow', 'Cough toward a friend', 'Touch everyone\'s food', 'Share a used tissue', 'Keep droplets away from your hands and other people.', 'Coughing into your elbow helps contain droplets and reduce germ spread.'),
  q(20, 'bodyhealth', 'Why should you brush your teeth?', 'To remove food and plaque', 'To make them softer', 'To change their number', 'To stop using your tongue', 'This helps prevent tooth decay.', 'Brushing removes plaque and food that can contribute to cavities.'),

  // Matter, forces, and energy (21-35)
  q(21, 'matterenergy', 'Which statement about liquids is true?', 'They take the shape of their container', 'They always keep one shape', 'They cannot be poured', 'They have no volume', 'Think about water in different cups.', 'A liquid keeps its volume but takes the shape of its container.'),
  q(22, 'matterenergy', 'Which statement about gases is true?', 'They spread out to fill a container', 'They keep a fixed shape', 'They cannot move', 'They are all visible', 'Air fills the space inside a balloon.', 'Gas particles spread out and fill their container.'),
  q(23, 'matterenergy', 'What change happens when liquid water becomes ice?', 'Freezing', 'Melting', 'Evaporating', 'Dissolving', 'The water loses heat and becomes solid.', 'Freezing changes a liquid into a solid.'),
  q(24, 'matterenergy', 'What happens to a wet puddle on a warm day?', 'Some water evaporates', 'The water becomes metal', 'The water freezes at once', 'The water turns into soil', 'Liquid water changes into water vapor.', 'Heat can cause liquid water to evaporate into the air.'),
  q(25, 'matterenergy', 'Which change can be reversed?', 'Melting and refreezing ice', 'Burning paper', 'Cooking an egg', 'Baking a cake', 'You can cool the liquid to get the original solid back.', 'Melted ice can freeze again, so the change is reversible.'),
  q(26, 'matterenergy', 'Which material is the best electrical insulator?', 'Rubber', 'Copper', 'Aluminum', 'Iron', 'It often covers electric wires for safety.', 'Rubber does not let electric current pass through easily.'),
  q(27, 'matterenergy', 'Why is metal used for a cooking pot?', 'It conducts heat well', 'It dissolves in water', 'It is always transparent', 'It cannot get warm', 'Heat must travel from the stove to the food.', 'Metal transfers heat efficiently, which helps cook food.'),
  q(28, 'matterenergy', 'Which surface creates the most friction?', 'Rough sandpaper', 'Smooth ice', 'Polished glass', 'A soapy tile', 'A rough surface resists sliding.', 'Rough sandpaper produces more friction than smooth surfaces.'),
  q(29, 'matterenergy', 'What does gravity do to a dropped ball?', 'Pulls it toward Earth', 'Pushes it into space', 'Turns it into gas', 'Makes it disappear', 'This force gives objects weight.', 'Gravity pulls objects toward Earth.'),
  q(30, 'matterenergy', 'Which force can slow a moving bicycle?', 'Friction from the brakes', 'Light from the Sun', 'Sound from the bell', 'A painted color', 'The brake pads rub against part of the wheel.', 'Friction from the brakes opposes motion and slows the bicycle.'),
  q(31, 'matterenergy', 'What happens when you push a swing harder?', 'It usually moves farther', 'It becomes smaller', 'It loses all mass', 'It turns into water', 'A larger force makes a bigger change in motion.', 'A stronger push usually makes the swing move faster or farther.'),
  q(32, 'matterenergy', 'Which object reflects light well?', 'A mirror', 'Black cloth', 'Cardboard', 'A sponge', 'You use it to see your reflection.', 'A mirror has a smooth surface that reflects light well.'),
  q(33, 'matterenergy', 'How can you make a sound louder on a drum?', 'Hit the drum harder', 'Cover your ears', 'Turn off the light', 'Put the drum farther away and do not hit it', 'A stronger hit makes bigger vibrations.', 'Hitting harder makes the drum skin vibrate with greater amplitude, producing a louder sound.'),
  q(34, 'matterenergy', 'Which simple circuit will light a bulb?', 'A closed circuit with a battery', 'A bulb with no power source', 'An open circuit with a gap', 'A battery connected only to plastic', 'Electricity needs a complete path.', 'A bulb lights when a battery drives current through a complete, closed circuit.'),
  q(35, 'matterenergy', 'Which source of energy is renewable?', 'Sunlight', 'Coal', 'Oil', 'Natural gas', 'Earth receives more of it each day.', 'Sunlight is naturally replenished and is a renewable energy source.'),

  // Earth and space (36-45)
  q(36, 'earthspace', 'Why do we have day and night?', 'Earth rotates', 'The Sun turns off', 'The Moon covers Earth every night', 'Clouds move the whole planet', 'Earth spins once in about 24 hours.', 'As Earth rotates, each area turns toward and then away from the Sun.'),
  q(37, 'earthspace', 'Earth travels around the _____.', 'Sun', 'Moon', 'North Star', 'clouds', 'Our planet follows an orbit around our nearest star.', 'Earth revolves around the Sun.'),
  q(38, 'earthspace', 'The Moon appears bright because it _____.', 'reflects sunlight', 'makes all its own light', 'is made of fire', 'collects lightning', 'It acts a little like a large mirror.', 'The Moon does not make visible light; we see sunlight reflected from it.'),
  q(39, 'earthspace', 'Which instrument measures rainfall?', 'A rain gauge', 'A thermometer', 'A wind vane', 'A ruler', 'It collects and measures rainwater.', 'A rain gauge measures how much rain has fallen.'),
  q(40, 'earthspace', 'What does a wind vane show?', 'Wind direction', 'Air temperature', 'Rainfall amount', 'Time of day', 'It points according to where the wind comes from.', 'A wind vane is used to show wind direction.'),
  q(41, 'earthspace', 'Clouds form when water vapor cools and _____.', 'condenses into tiny droplets', 'turns into rocks', 'burns into smoke', 'becomes soil', 'Cooling changes gas into tiny liquid drops.', 'Water vapor condenses into tiny water droplets or ice crystals that form clouds.'),
  q(42, 'earthspace', 'Which is an example of erosion?', 'A river slowly carrying soil away', 'A seed growing into a plant', 'Water freezing in a tray', 'A lamp making light', 'Wind and water can move rock and soil.', 'Erosion is the movement of weathered rock or soil by water, wind, ice, or gravity.'),
  q(43, 'earthspace', 'Which soil usually holds the most water?', 'Clay soil', 'Sandy soil', 'Gravel', 'Dry pebbles', 'Its particles are very small and fit closely together.', 'Clay has small particles and generally retains more water than sandy soil.'),
  q(44, 'earthspace', 'Which action reduces waste?', 'Reuse a container', 'Throw away every bottle after one use', 'Use extra packaging', 'Leave litter outdoors', 'Use an item again instead of replacing it.', 'Reusing items reduces the amount of waste produced.'),
  q(45, 'earthspace', 'Why is clean air important?', 'Living things need it for healthy breathing', 'It makes plastic grow', 'It stops all weather', 'It changes night into day', 'Humans and many animals take oxygen from it.', 'Clean air supports healthy breathing and supplies oxygen needed by living things.'),

  // Science skills (46-50)
  q(46, 'inquiry', 'What is a prediction?', 'A statement about what you think will happen', 'A measurement already recorded', 'A safety tool', 'A type of animal', 'You make it before testing.', 'A prediction describes an expected result based on what you know.'),
  q(47, 'inquiry', 'In a fair test, what should you change?', 'Only one variable at a time', 'Everything at once', 'The results after the test', 'Nothing you can observe', 'Keep other conditions the same.', 'Changing one variable helps show whether it caused the result.'),
  q(48, 'inquiry', 'Which tool measures the mass of an object?', 'A balance', 'A thermometer', 'A stopwatch', 'A rain gauge', 'It compares how heavy objects are.', 'A balance is used to measure or compare mass.'),
  q(49, 'inquiry', 'Why do scientists record results?', 'To remember and compare evidence', 'To make the test less safe', 'To hide what happened', 'To change every answer', 'Written data can be checked later.', 'Recording results creates evidence that can be reviewed and compared.'),
  q(50, 'inquiry', 'Before starting an experiment, what should you do first?', 'Read the instructions and safety rules', 'Taste every material', 'Mix everything quickly', 'Ignore the teacher', 'Know the safe steps before handling equipment.', 'Reading instructions and safety rules helps prevent accidents and gives reliable results.'),
]
