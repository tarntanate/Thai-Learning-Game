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
    id: `science-g3-${String(number).padStart(3, '0')}`,
    category,
    prompt,
    choices: [correct, wrong1, wrong2, wrong3],
    answer: 0,
    hint,
    explain,
  }
}

/**
 * Grade 3 Science (English Program), 50 questions.
 * Covers life processes, ecosystems, the human body, matter, forces,
 * energy, Earth, space, and scientific investigation.
 */
export const scienceGrade3Questions: Question[] = [
  // Living things and ecosystems (1-14)
  q(1, 'livingthings', 'Which characteristic is shared by all living things?', 'They grow and reproduce', 'They all walk', 'They all have flowers', 'They all live on land', 'Think about plants as well as animals.', 'All living things grow and can reproduce, although they do so in different ways.'),
  q(2, 'livingthings', 'What is the main function of roots?', 'To absorb water and minerals', 'To make seeds fly', 'To catch sunlight', 'To produce sound', 'This plant part is usually below the ground.', 'Roots anchor a plant and absorb water and minerals from the soil.'),
  q(3, 'livingthings', 'Which gas do plants take in to make food?', 'Carbon dioxide', 'Oxygen only', 'Helium', 'Hydrogen', 'Animals breathe this gas out.', 'Plants take in carbon dioxide during photosynthesis.'),
  q(4, 'livingthings', 'What is pollination?', 'The transfer of pollen between flower parts', 'The growth of roots into soil', 'The loss of all leaves', 'The breaking of a seed coat by hand', 'Bees can help this process.', 'Pollination transfers pollen to the female part of a flower so seeds can develop.'),
  q(5, 'livingthings', 'Which adaptation helps a cactus survive in a desert?', 'A thick stem that stores water', 'Large, thin leaves', 'Webbed feet', 'A layer of feathers', 'Rain is rare in its habitat.', 'A cactus stores water in its thick stem and has features that reduce water loss.'),
  q(6, 'livingthings', 'Why do some seeds have wings or fluffy hairs?', 'To be carried by wind', 'To sink in soil quickly', 'To attract large predators', 'To make their own rain', 'These features help with seed dispersal.', 'Wings and hairs help wind carry seeds away from the parent plant.'),
  q(7, 'livingthings', 'What is a habitat?', 'The place where an organism lives', 'A stage in a life cycle', 'A type of force', 'A weather instrument', 'It provides food, water, and shelter.', 'A habitat is the environment where an organism lives and meets its needs.'),
  q(8, 'livingthings', 'In the food chain grass → grasshopper → frog, what is the consumer that eats the producer?', 'The grasshopper', 'The grass', 'The frog', 'The Sun', 'The producer is the grass.', 'The grasshopper is the primary consumer because it eats the grass.'),
  q(9, 'livingthings', 'What is the role of a decomposer?', 'To break down dead organisms', 'To produce sunlight', 'To stop plants growing', 'To hunt every herbivore', 'Fungi and many bacteria do this job.', 'Decomposers break down dead material and return nutrients to the environment.'),
  q(10, 'livingthings', 'Which animal is a vertebrate?', 'A lizard', 'An earthworm', 'A jellyfish', 'A spider', 'A vertebrate has a backbone.', 'A lizard has a backbone, so it is a vertebrate.'),
  q(11, 'livingthings', 'Which group of animals has six legs as adults?', 'Insects', 'Mammals', 'Birds', 'Fish', 'Ants and butterflies belong to this group.', 'Adult insects have three body sections and six legs.'),
  q(12, 'livingthings', 'Which feature is typical of mammals?', 'They feed milk to their young', 'They all lay eggs', 'They all have feathers', 'They breathe with gills', 'Cats, whales, and humans share this feature.', 'Female mammals produce milk to feed their young.'),
  q(13, 'livingthings', 'What might happen if all the insects disappeared from a habitat?', 'Many food chains would be disrupted', 'Every plant would grow better', 'Birds would need no food', 'The habitat would gain more insects', 'Many animals eat insects, and many plants need them.', 'Removing insects would affect predators, pollination, and many connected food chains.'),
  q(14, 'livingthings', 'Why is biodiversity important?', 'Different organisms help ecosystems stay healthy', 'Only one species can use a habitat', 'It prevents all environmental change', 'It means every organism is identical', 'A healthy ecosystem has many kinds of life.', 'Biodiversity supports food webs and helps ecosystems continue functioning when conditions change.'),

  // Human body and health (15-20)
  q(15, 'bodyhealth', 'What is the main job of the skeleton?', 'To support and protect the body', 'To digest all food', 'To pump blood', 'To make the body breathe', 'Bones give the body shape.', 'The skeleton supports the body, protects organs, and works with muscles for movement.'),
  q(16, 'bodyhealth', 'How do muscles move bones?', 'They contract and pull on bones', 'They push air into bones', 'They turn bones into liquid', 'They make bones disappear', 'Muscles become shorter when working.', 'Muscles contract and pull on bones across joints to create movement.'),
  q(17, 'bodyhealth', 'Where does digestion begin?', 'In the mouth', 'In the lungs', 'In the heart', 'In the skin', 'Teeth and saliva start breaking food down.', 'Digestion begins in the mouth through chewing and the action of saliva.'),
  q(18, 'bodyhealth', 'What does blood carry to body cells?', 'Oxygen and nutrients', 'Only water vapor', 'Bones and muscles', 'Light and sound', 'Cells need these materials to release energy and grow.', 'Blood delivers oxygen and nutrients to cells and carries wastes away.'),
  q(19, 'bodyhealth', 'Which nutrient helps build and repair muscles?', 'Protein', 'Fiber only', 'Water only', 'Sugar only', 'Foods such as eggs, beans, fish, and tofu provide it.', 'Protein supplies materials the body uses for growth and tissue repair.'),
  q(20, 'bodyhealth', 'Why does your pulse become faster during exercise?', 'Muscles need more oxygen', 'The heart stops pumping', 'The lungs need less air', 'The bones become colder', 'The heart must send blood around the body faster.', 'During exercise, the heart beats faster to deliver more oxygen to working muscles.'),

  // Matter, forces, and energy (21-35)
  q(21, 'matterenergy', 'What is matter?', 'Anything that has mass and takes up space', 'Only things that are alive', 'Energy that has no mass', 'Only solids that can be seen', 'Solids, liquids, and gases are examples.', 'Matter has mass and occupies space.'),
  q(22, 'matterenergy', 'What happens to particles when a solid melts?', 'They gain energy and move more freely', 'They stop moving completely', 'They lose all mass', 'They become living cells', 'The solid changes into a liquid.', 'Heating gives particles energy so they can move past one another as a liquid.'),
  q(23, 'matterenergy', 'Which process changes a gas into a liquid?', 'Condensation', 'Evaporation', 'Melting', 'Freezing', 'Water droplets can form on a cold glass.', 'Condensation occurs when a gas cools and becomes a liquid.'),
  q(24, 'matterenergy', 'Why does sugar seem to disappear when stirred into water?', 'It dissolves and forms a solution', 'It changes into air', 'It loses all its mass', 'It becomes invisible ice', 'The sugar particles spread through the water.', 'Dissolved sugar remains in the solution even though individual grains cannot be seen.'),
  q(25, 'matterenergy', 'How can you separate sand from water?', 'Use a filter', 'Use a magnet', 'Freeze only the sand', 'Add more sand', 'Water can pass through small holes, but sand cannot.', 'Filtration separates an insoluble solid such as sand from a liquid.'),
  q(26, 'matterenergy', 'Which mixture can be separated with a magnet?', 'Iron filings and sand', 'Sugar and water', 'Salt and water', 'Oil and water', 'Only one material in the mixture is magnetic.', 'A magnet attracts the iron filings but not the sand.'),
  q(27, 'matterenergy', 'Which change forms a new substance?', 'Burning wood', 'Melting ice', 'Cutting paper', 'Dissolving sugar', 'Ash and gases form during this change.', 'Burning is a chemical change that produces new substances.'),
  q(28, 'matterenergy', 'What force makes it harder to slide a box across a rough floor?', 'Friction', 'Gravity alone', 'Magnetism', 'Buoyancy', 'This force acts between touching surfaces.', 'Friction opposes motion between surfaces that touch.'),
  q(29, 'matterenergy', 'Which change would make a toy car travel farther?', 'Push it with greater force', 'Add more friction to its wheels', 'Place a wall in front of it', 'Use a rougher surface', 'A stronger starting force can increase its speed.', 'A greater push can give the car more speed and make it travel farther.'),
  q(30, 'matterenergy', 'What happens when the north poles of two magnets face each other?', 'They repel', 'They attract', 'They melt', 'They lose all magnetism at once', 'Like poles push apart.', 'Two matching magnetic poles repel each other.'),
  q(31, 'matterenergy', 'Which material is attracted to a magnet?', 'Steel', 'Plastic', 'Glass', 'Wood', 'It contains mostly iron.', 'Steel usually contains iron and is attracted to magnets.'),
  q(32, 'matterenergy', 'How does light usually travel?', 'In straight lines', 'Only in circles', 'Only through solids', 'Without any direction', 'A narrow beam makes a straight path.', 'In a uniform material, light travels in straight lines.'),
  q(33, 'matterenergy', 'Why does a straw look bent in a glass of water?', 'Light changes direction between air and water', 'The straw melts in water', 'Water cuts the straw', 'The glass becomes magnetic', 'This bending of light is called refraction.', 'Refraction changes the apparent position of the part of the straw under water.'),
  q(34, 'matterenergy', 'Which material absorbs sound best?', 'Thick fabric', 'A metal sheet', 'A glass window', 'A concrete wall with no covering', 'Soft materials reduce echoes.', 'Soft, porous materials such as thick fabric absorb sound vibrations well.'),
  q(35, 'matterenergy', 'In a simple circuit, what is the purpose of a switch?', 'To open or close the circuit', 'To create the battery', 'To make wires magnetic forever', 'To measure temperature', 'It controls whether current has a complete path.', 'A switch controls current by opening or closing the electrical circuit.'),

  // Earth and space (36-45)
  q(36, 'earthspace', 'What is the water cycle?', 'The continuous movement of water on Earth', 'The path of Earth around the Sun', 'The daily change from light to dark', 'The growth stages of a plant', 'It includes evaporation, condensation, and precipitation.', 'The water cycle continually moves water among Earth\'s surface and atmosphere.'),
  q(37, 'earthspace', 'What provides the energy for most evaporation in the water cycle?', 'The Sun', 'The Moon', 'Soil', 'Wind vanes', 'Its heat warms surface water.', 'Energy from the Sun causes much of Earth\'s surface water to evaporate.'),
  q(38, 'earthspace', 'Which type of cloud is commonly linked with thunderstorms?', 'Cumulonimbus', 'Cirrus', 'Stratus', 'Fog only', 'It grows tall and can produce lightning.', 'Cumulonimbus clouds are tall storm clouds that can bring heavy rain, thunder, and lightning.'),
  q(39, 'earthspace', 'What is weathering?', 'The breaking down of rock in place', 'The movement of Earth around the Sun', 'The formation of a food chain', 'The freezing of all ocean water', 'Water, wind, roots, and temperature can slowly affect rocks.', 'Weathering breaks rock into smaller pieces without moving it to a new location.'),
  q(40, 'earthspace', 'How is sedimentary rock often formed?', 'Layers of sediment are pressed and cemented together', 'Liquid metal freezes in a mold', 'Sunlight changes water into rock', 'Plants make it directly from food', 'Its name comes from sediment.', 'Sedimentary rock forms when deposited sediments become compacted and cemented.'),
  q(41, 'earthspace', 'Which resource is nonrenewable?', 'Coal', 'Wind', 'Sunlight', 'Flowing water', 'It takes millions of years to form.', 'Coal forms far more slowly than people use it, so it is nonrenewable.'),
  q(42, 'earthspace', 'Why does the Moon appear to have phases?', 'We see different amounts of its sunlit half', 'The Moon changes its actual shape', 'Clouds cut pieces from the Moon', 'Earth switches the Moon on and off', 'The Moon orbits Earth while sunlight always lights half of it.', 'Moon phases result from our changing view of the half illuminated by the Sun.'),
  q(43, 'earthspace', 'Which planet is our home?', 'Earth', 'Mars', 'Jupiter', 'Venus', 'It has liquid oceans and supports known life.', 'Earth is the planet where we live.'),
  q(44, 'earthspace', 'Why does the Sun look larger than other stars?', 'It is much closer to Earth', 'It is the only star', 'It is inside Earth\'s atmosphere', 'Other stars have no light', 'Distance changes how large objects appear.', 'The Sun is an average-sized star, but it appears larger because it is far closer to Earth.'),
  q(45, 'earthspace', 'Which action helps protect a local habitat?', 'Plant native trees', 'Drop litter in a stream', 'Remove every insect', 'Waste clean water', 'Native plants provide food and shelter for local wildlife.', 'Planting native trees can restore habitat and support local organisms.'),

  // Scientific investigation (46-50)
  q(46, 'inquiry', 'What is a hypothesis?', 'A testable explanation or prediction', 'A result changed after an experiment', 'A list of laboratory tools', 'A fact that can never be tested', 'Scientists test it by collecting evidence.', 'A hypothesis is an idea that can be tested through observation or investigation.'),
  q(47, 'inquiry', 'Why should repeated trials be used in an investigation?', 'To make results more reliable', 'To guarantee the preferred answer', 'To change every variable', 'To avoid recording data', 'One unusual result has less effect when you repeat the test.', 'Repeating trials helps identify patterns and reduces the effect of random variation.'),
  q(48, 'inquiry', 'Which graph is best for comparing the heights of four plants?', 'A bar graph', 'A map', 'A calendar', 'A food web', 'Each plant can have its own vertical bar.', 'A bar graph clearly compares numerical values across separate categories.'),
  q(49, 'inquiry', 'A thermometer reads 24°C. What type of data is this?', 'A measurement', 'An opinion', 'A prediction', 'A safety rule', 'It includes a number and a unit.', 'A temperature reading is quantitative measurement data.'),
  q(50, 'inquiry', 'What should a conclusion be based on?', 'The evidence collected', 'The answer you wanted', 'A friend\'s guess only', 'An unrelated story', 'Look back at the recorded results.', 'A scientific conclusion should explain what the collected evidence shows.'),
]
