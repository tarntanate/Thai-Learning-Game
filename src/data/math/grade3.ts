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
    id: `math-g3-${String(number).padStart(3, '0')}`,
    category,
    prompt,
    choices: [correct, wrong1, wrong2, wrong3],
    answer: 0,
    hint,
    explain,
  }
}

export const mathGrade3Questions: Question[] = [
  // Numbers and place value (1–8)
  q(1, 'numberplace', 'What is the value of the digit 7 in 3,742?', '700', '7', '70', '7,000', 'Read the places from right to left: ones, tens, hundreds, thousands.', 'The 7 is in the hundreds place, so its value is 700.'),
  q(2, 'numberplace', 'Which number equals 4,000 + 500 + 20 + 6?', '4,526', '4,256', '4,562', '4,506', 'Put each digit in its matching place.', '4 thousands, 5 hundreds, 2 tens, and 6 ones make 4,526.'),
  q(3, 'numberplace', 'Which number is the greatest?', '6,321', '6,231', '6,312', '6,213', 'Compare thousands first, then hundreds, tens, and ones.', 'The numbers with 3 hundreds are greater. Of those, 6,321 has more tens than 6,312.'),
  q(4, 'numberplace', 'Which list is in order from smallest to greatest?', '2,145; 2,154; 2,415; 2,451', '2,451; 2,415; 2,154; 2,145', '2,154; 2,145; 2,415; 2,451', '2,145; 2,415; 2,154; 2,451', 'Compare the hundreds, then the tens.', 'The numbers with 1 hundred come first. Comparing tens gives 2,145 < 2,154 < 2,415 < 2,451.'),
  q(5, 'numberplace', 'Round 368 to the nearest ten.', '370', '360', '400', '300', 'Look at the ones digit. Round up if it is 5 or more.', 'The ones digit is 8, so 368 rounds up to 370.'),
  q(6, 'numberplace', 'Round 742 to the nearest hundred.', '700', '800', '740', '750', 'Compare 742 with the halfway point, 750.', '742 is less than 750, so it is closer to 700 than to 800.'),
  q(7, 'numberplace', 'Which number is odd?', '537', '246', '680', '914', 'An odd number ends in 1, 3, 5, 7, or 9.', '537 ends in 7, so it is odd. The other numbers end in even digits.'),
  q(8, 'numberplace', 'What number is 100 more than 2,950?', '3,050', '2,960', '3,950', '2,850', 'Add one hundred, crossing into the next thousand if needed.', '2,950 + 100 = 3,050.'),

  // Operations and word problems (9–24)
  q(9, 'arithmetic', 'What is 246 + 132?', '378', '368', '388', '478', 'Add the ones, tens, and hundreds separately.', '6 + 2 = 8, 4 tens + 3 tens = 7 tens, and 2 hundreds + 1 hundred = 3 hundreds: 378.'),
  q(10, 'arithmetic', 'What is 358 + 267?', '625', '515', '615', '525', 'Regroup when a column adds up to 10 or more.', '8 + 7 = 15. Then 5 + 6 + 1 = 12 tens. Finally, 3 + 2 + 1 = 6 hundreds, giving 625.'),
  q(11, 'arithmetic', 'What is 704 − 281?', '423', '523', '483', '413', 'You can subtract 200, then 80, then 1.', '704 − 200 = 504, 504 − 80 = 424, and 424 − 1 = 423.'),
  q(12, 'arithmetic', 'What is 900 − 456?', '444', '454', '544', '556', 'Subtract 400 first, then subtract the remaining 56.', '900 − 400 = 500, and 500 − 56 = 444.'),
  q(13, 'arithmetic', 'A library has 235 storybooks and 148 science books. How many books is that altogether?', '383 books', '373 books', '393 books', '87 books', 'Altogether means you need to add.', '235 + 148 = 383 books.'),
  q(14, 'arithmetic', 'A shop has 320 balloons. It sells 175. How many balloons are left?', '145 balloons', '155 balloons', '245 balloons', '495 balloons', 'Subtract the number sold from the starting number.', '320 − 175 = 145 balloons left.'),
  q(15, 'arithmetic', 'What is 7 × 8?', '56', '54', '48', '64', 'Use 7 × 4 and double it.', '7 × 4 = 28, and 28 + 28 = 56. So 7 × 8 = 56.'),
  q(16, 'arithmetic', 'There are 6 bags with 4 oranges in each bag. How many oranges are there?', '24 oranges', '10 oranges', '20 oranges', '28 oranges', 'Multiply the number of bags by the oranges in each bag.', '6 × 4 = 24 oranges.'),
  q(17, 'arithmetic', 'What is 9 × 6?', '54', '45', '63', '56', 'Find 10 × 6, then take away one group of 6.', '60 − 6 = 54, so 9 × 6 = 54.'),
  q(18, 'arithmetic', 'What is 23 × 3?', '69', '26', '63', '66', 'Multiply 20 and 3 by 3, then add.', '20 × 3 = 60 and 3 × 3 = 9. Together they make 69.'),
  q(19, 'arithmetic', 'What is 48 ÷ 6?', '8', '6', '7', '9', 'Think: 6 times which number equals 48?', '6 × 8 = 48, so 48 ÷ 6 = 8.'),
  q(20, 'arithmetic', '35 stickers are shared equally among 5 children. How many stickers does each child get?', '7 stickers', '5 stickers', '6 stickers', '8 stickers', 'Divide the total stickers by the number of children.', '35 ÷ 5 = 7 stickers for each child.'),
  q(21, 'arithmetic', 'A teacher puts 32 pencils into boxes of 8. How many boxes are needed?', '4 boxes', '3 boxes', '6 boxes', '8 boxes', 'Count how many groups of 8 fit into 32.', '32 ÷ 8 = 4 boxes.'),
  q(22, 'arithmetic', 'What number makes this sentence true: 6 × ___ = 42?', '7', '6', '8', '9', 'Use the related division fact, 42 ÷ 6.', '42 ÷ 6 = 7, so 6 × 7 = 42.'),
  q(23, 'arithmetic', 'Mia buys 3 packs of 8 crayons. She gives away 5 crayons. How many crayons does she have left?', '19 crayons', '24 crayons', '29 crayons', '16 crayons', 'Find the total in 3 packs, then subtract 5.', '3 × 8 = 24 crayons, and 24 − 5 = 19 crayons left.'),
  q(24, 'arithmetic', 'There are 18 girls and 14 boys. They form teams of 4 children. How many teams can they make?', '8 teams', '7 teams', '9 teams', '6 teams', 'Add the children first, then divide by 4.', '18 + 14 = 32 children, and 32 ÷ 4 = 8 teams.'),

  // Fractions (25–31)
  q(25, 'fractions', 'A pizza is cut into 8 equal slices. Leo eats 3 slices. What fraction of the pizza does he eat?', '3/8', '5/8', '3/5', '8/3', 'The bottom number is the total equal parts. The top number is the parts eaten.', 'Leo eats 3 of the 8 equal parts, which is 3/8 of the pizza.'),
  q(26, 'fractions', 'In the fraction 2/5, what does the 5 tell us?', 'The whole is divided into 5 equal parts', '2 parts are left', '5 whole objects are used', 'Each part is divided into 2 pieces', 'The bottom number is called the denominator.', 'The denominator 5 means the whole is divided into 5 equal parts.'),
  q(27, 'fractions', 'Which fraction is equal to 1/2?', '2/4', '1/4', '3/4', '2/3', 'Imagine shading half of a shape divided into 4 equal parts.', '2 of 4 equal parts cover half of a whole, so 2/4 = 1/2.'),
  q(28, 'fractions', 'Which fraction is greater: 3/8 or 5/8?', '5/8', '3/8', 'They are equal', 'Both equal one whole', 'The parts are the same size. Compare how many parts are taken.', '5 eighths is more than 3 eighths, so 5/8 is greater.'),
  q(29, 'fractions', 'Two same-size cakes are cut into equal parts. Which is larger: 1/3 of a cake or 1/6 of a cake?', '1/3', '1/6', 'They are equal', 'Both are whole cakes', 'Cutting the same whole into fewer equal parts makes each part larger.', 'One third is larger than one sixth because each of 3 equal parts is larger than each of 6 equal parts.'),
  q(30, 'fractions', 'What is 2/7 + 3/7?', '5/7', '5/14', '1/7', '6/7', 'Add the number of sevenths. The size of each part stays the same.', '2 sevenths + 3 sevenths = 5 sevenths, or 5/7.'),
  q(31, 'fractions', 'What is 6/8 − 2/8?', '4/8', '4/0', '8/8', '2/8', 'Subtract the number of eighths.', '6 eighths − 2 eighths = 4 eighths, or 4/8. This is also equal to 1/2.'),

  // Measurement, time, and money (32–41)
  q(32, 'measurement', 'A ribbon is 2 metres 35 centimetres long. How many centimetres is that?', '235 cm', '37 cm', '2035 cm', '250 cm', '1 metre = 100 centimetres.', '2 metres = 200 cm. Add 35 cm to get 235 cm.'),
  q(33, 'measurement', 'A bag of rice has a mass of 3 kilograms. How many grams is that?', '3,000 g', '300 g', '30 g', '1,003 g', '1 kilogram = 1,000 grams.', '3 × 1,000 = 3,000 grams.'),
  q(34, 'measurement', 'A jug holds 1 litre of juice. You pour out 250 millilitres. How much juice is left?', '750 mL', '250 mL', '850 mL', '1,250 mL', 'Convert 1 litre to 1,000 millilitres before subtracting.', '1,000 − 250 = 750 mL of juice left.'),
  q(35, 'measurement', 'Which unit is best for measuring the length of a pencil?', 'Centimetres', 'Kilometres', 'Litres', 'Kilograms', 'Choose a unit for a short length.', 'Centimetres measure short lengths such as the length of a pencil.'),
  q(36, 'measurement', 'The minute hand points to 6. The hour hand is halfway between 4 and 5. What time is it?', '4:30', '6:20', '5:30', '4:06', 'Each number on the clock marks 5 minutes.', 'The minute hand at 6 means 30 minutes. The hour hand shows it is after 4, so the time is 4:30.'),
  q(37, 'measurement', 'A lesson starts at 9:15 a.m. and ends at 10:00 a.m. How long is the lesson?', '45 minutes', '15 minutes', '30 minutes', '60 minutes', 'Count the minutes from 9:15 to the next hour.', 'There are 60 minutes in an hour, and 60 − 15 = 45 minutes.'),
  q(38, 'measurement', 'Football practice starts at 2:40 p.m. and lasts 35 minutes. When does it end?', '3:15 p.m.', '3:05 p.m.', '2:75 p.m.', '3:25 p.m.', 'Add 20 minutes to reach 3:00, then add the remaining minutes.', '2:40 plus 20 minutes is 3:00. Add 15 more minutes to get 3:15 p.m.'),
  q(39, 'measurement', 'A notebook costs 28 baht and a pencil costs 12 baht. You pay with 50 baht. How much change do you get?', '10 baht', '40 baht', '22 baht', '38 baht', 'Add the prices, then subtract the total from 50.', '28 + 12 = 40 baht. The change is 50 − 40 = 10 baht.'),
  q(40, 'measurement', 'Each ruler costs 15 baht. How much do 4 rulers cost?', '60 baht', '19 baht', '45 baht', '75 baht', 'Add 15 four times or multiply 15 by 4.', '15 × 4 = 60 baht.'),
  q(41, 'measurement', 'The temperature is 24°C in the morning and 31°C at noon. How much does it rise?', '7°C', '5°C', '8°C', '55°C', 'Find the difference between the two temperatures.', '31 − 24 = 7, so the temperature rises by 7°C.'),

  // Shapes, area, and perimeter (42–46)
  q(42, 'geometry', 'Which shape has 4 equal sides and 4 right angles?', 'Square', 'Triangle', 'Pentagon', 'Circle', 'A right angle is a square corner.', 'A square has 4 equal sides and 4 right angles.'),
  q(43, 'geometry', 'How many sides does a hexagon have?', '6', '5', '7', '8', 'A pentagon has 5 sides. A hexagon has one more.', 'A hexagon is a flat shape with 6 straight sides.'),
  q(44, 'geometry', 'A rectangle is 8 cm long and 3 cm wide. What is its perimeter?', '22 cm', '11 cm', '24 cm', '16 cm', 'Perimeter is the distance all the way around. Add all 4 sides.', '8 + 3 + 8 + 3 = 22 cm.'),
  q(45, 'geometry', 'A rectangle is 6 cm long and 4 cm wide. What is its area?', '24 square cm', '20 square cm', '10 square cm', '12 square cm', 'Area counts the unit squares inside. Multiply length by width.', '6 × 4 = 24, so the area is 24 square centimetres.'),
  q(46, 'geometry', 'How many flat faces does a cube have?', '6', '4', '8', '12', 'Imagine a dice: top, bottom, front, back, left, and right.', 'A cube has 6 flat faces, and each face is a square.'),

  // Data and patterns (47–50)
  q(47, 'datapatterns', 'A class votes for favourite fruit: mango 8 votes, banana 5 votes, apple 7 votes. Which fruit gets the most votes?', 'Mango', 'Banana', 'Apple', 'All have the same number', 'Compare 8, 5, and 7.', '8 is the greatest number of votes, so mango is the most popular fruit.'),
  q(48, 'datapatterns', 'In a picture graph, each star stands for 2 books. Maya has 4 stars next to her name. How many books has she read?', '8 books', '4 books', '6 books', '2 books', 'Use the graph key: each of the 4 stars means 2 books.', '4 × 2 = 8 books.'),
  q(49, 'datapatterns', 'The number of books read is: Monday 6, Tuesday 9, Wednesday 5. How many more books were read on Tuesday than Wednesday?', '4 books', '3 books', '14 books', '20 books', 'Compare Tuesday and Wednesday by subtracting.', '9 − 5 = 4 more books were read on Tuesday.'),
  q(50, 'datapatterns', 'This pattern adds 7 each time: 7, 14, 21, 28, ___. What comes next?', '35', '32', '34', '42', 'Add 7 to the last number shown.', '28 + 7 = 35, so the next number is 35.'),
]
