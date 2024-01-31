const fs = require("fs");
const { parse } = require("json2csv");
// const faker = require('faker');

function createCSVFile(dataArray, filePath) {
  try {
    // Convert the array of data to CSV format using json2csv library
    const csv = parse(dataArray, { header: true });

    // Write the CSV data to a file
    fs.writeFileSync(filePath, csv, "utf8");
    console.log(`CSV file created successfully at: ${filePath}`);
  } catch (error) {
    console.error("Error creating CSV file:", error);
  }
}

const firstNames = [
  'John', 'Jane', 'Michael', 'Emily', 'Daniel', 'Olivia', 'David', 'Sophia', 'Andrew', 'Emma',
  'Christopher', 'Ava', 'Matthew', 'Isabella', 'Ethan', 'Mia', 'Brian', 'Abigail', 'Kevin', 'Charlotte',
  'Ryan', 'Grace', 'Jason', 'Lily', 'Justin', 'Chloe', 'Alexander', 'Sophie', 'William', 'Zoe',
  'James', 'Ella', 'Jonathan', 'Madison', 'Nathan', 'Avery', 'Brandon', 'Hannah', 'Samuel', 'Addison',
  'Nicholas', 'Aubrey', 'Robert', 'Scarlett', 'Benjamin', 'Amelia', 'Tyler', 'Natalie', 'Henry', 'Liam',
  'Jacob', 'Zachary', 'Gabriel', 'Aiden', 'Caleb', 'Mason', 'Logan', 'Elijah', 'Evan', 'Isaac',
  'Eli', 'Jackson', 'Aria', 'Luke', 'Leah', 'Isaiah', 'Hailey', 'Owen', 'Nathanial', 'Landon', 'Mila',
  'Connor', 'Aaliyah', 'Jayden', 'Katherine', 'Dylan', 'Sarah', 'Jordan', 'Gianna', 'Cameron', 'Audrey',
  'Evan', 'Kaylee', 'Jackson', 'Alexa', 'Carter', 'Bella', 'Cody', 'Sofia', 'Jaden', 'Madelyn',
];

const lastNames = [
  'Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor',
  'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin', 'Thompson', 'Garcia', 'Martinez', 'Robinson',
  'Clark', 'Rodriguez', 'Lewis', 'Lee', 'Walker', 'Hall', 'Allen', 'Young', 'Hernandez', 'King',
  'Wright', 'Lopez', 'Hill', 'Scott', 'Green', 'Adams', 'Baker', 'Gonzalez', 'Nelson', 'Carter',
  'Mitchell', 'Perez', 'Roberts', 'Turner', 'Phillips', 'Campbell', 'Parker', 'Evans', 'Edwards', 'Collins',
  'Stewart', 'Sanchez', 'Morris', 'Rogers', 'Reed', 'Cook', 'Morgan', 'Bell', 'Murphy', 'Bailey',
  'Rivera', 'Cooper', 'Richardson', 'Cox', 'Howard', 'Ward', 'Torres', 'Peterson', 'Gray', 'Ramirez',
  'James', 'Watson', 'Brooks', 'Kelly', 'Sanders', 'Price', 'Bennett', 'Wood', 'Barnes', 'Ross',
  'Henderson', 'Coleman', 'Jenkins', 'Perry', 'Powell', 'Long', 'Patterson', 'Hughes', 'Flores', 'Washington',
  'Butler', 'Simmons', 'Foster', 'Gonzales', 'Bryant', 'Alexander', 'Russell', 'Griffin', 'Diaz', 'Hayes',
];

const workList = [
  'Software Engineer', 'Data Scientist', 'Graphic Designer', 'Accountant', 'Marketing Manager',
  'Teacher', 'Nurse', 'Electrician', 'Chef', 'Lawyer',
  'Sales Representative', 'HR Specialist', 'Doctor', 'Financial Analyst', 'Project Manager',
  'Writer', 'Mechanical Engineer', 'Social Media Manager', 'Architect', 'Police Officer',
  'Dentist', 'Customer Service Representative', 'Pharmacist', 'Event Planner', 'Fitness Trainer',
  'Research Scientist', 'Real Estate Agent', 'Journalist', 'Pilot', 'Librarian',
  'Carpenter', 'IT Consultant', 'Physical Therapist', 'Fashion Designer', 'Biologist',
  'Banker', 'Psychologist', 'Translator', 'Interior Designer', 'Veterinarian',
  'Electrician', 'Web Developer', 'Actuary', 'Meteorologist', 'Air Traffic Controller',
  'Geologist', 'Chemist', 'Paramedic', 'Plumber', 'Flight Attendant',
  'Statistician', 'Librarian', 'Phlebotomist', 'Surveyor', 'Zoologist',
  'Speech Therapist', 'Radiologist', 'Optometrist', 'Curator', 'Landscape Architect',
  'Biomedical Engineer', 'Technical Writer', 'Economist', 'Forensic Scientist', 'Marine Biologist',
  'Astronomer', 'Mathematician', 'Robotics Engineer', 'Ethical Hacker', 'Environmental Scientist',
  'Welder', 'Massage Therapist', 'App Developer', 'Ethical Hacker', 'Political Analyst',
  'Cartoonist', 'Makeup Artist', 'Sound Engineer', 'Food Critic', 'Cryptocurrency Analyst',
  'Urban Planner', 'Ethnographer', 'Materials Engineer', 'Quantum Physicist', 'Videographer',
  'Geneticist', 'Cryptographer', 'Agricultural Scientist', 'Food Scientist', 'Game Developer',
  'Augmented Reality Developer', 'Nanotechnologist', 'Renewable Energy Engineer', 'Clinical Psychologist',
];

const streetNames = [
  'Maple Street', 'Oak Avenue', 'Main Road', 'Cedar Lane', 'Elm Street',
  'Willow Lane', 'Pine Avenue', 'Birch Road', 'Cherry Street', 'Cypress Lane',
  'Sycamore Avenue', 'Chestnut Lane', 'Spruce Road', 'Hickory Street', 'Poplar Lane',
  'Magnolia Avenue', 'Fir Street', 'Ash Lane', 'Juniper Road', 'Alder Street',
  'Dogwood Lane', 'Beech Avenue', 'Redwood Road', 'Holly Street', 'Alder Lane',
  'Cottonwood Road', 'Sycamore Street', 'Palm Lane', 'Laurel Avenue', 'Sycamore Lane',
  'Linden Road', 'Birch Street', 'Cedar Lane', 'Hemlock Avenue', 'Acacia Road',
  'Pine Lane', 'Cypress Street', 'Willow Road', 'Birch Lane', 'Redwood Street',
  'Cedar Avenue', 'Magnolia Lane', 'Elm Road', 'Maple Street', 'Spruce Lane',
  'Hickory Avenue', 'Dogwood Road', 'Cherry Lane', 'Ash Street', 'Beech Road',
  'Poplar Avenue', 'Cottonwood Lane', 'Holly Road', 'Fir Lane', 'Laurel Street',
  'Juniper Avenue', 'Acacia Lane', 'Alder Road', 'Linden Street', 'Palm Avenue',
  'Sycamore Road', 'Pine Street', 'Chestnut Avenue', 'Willow Lane', 'Cypress Street',
  'Sycamore Avenue', 'Dogwood Lane', 'Beech Street', 'Magnolia Road', 'Cottonwood Lane',
  'Holly Avenue', 'Laurel Lane', 'Cherry Street', 'Maple Avenue', 'Elm Road',
  'Cedar Street', 'Palm Lane', 'Alder Avenue', 'Linden Road', 'Spruce Street',
  'Birch Lane', 'Hickory Avenue', 'Acacia Road', 'Ash Lane', 'Juniper Street',
  'Redwood Avenue', 'Fir Lane', 'Cypress Road', 'Poplar Street', 'Willow Avenue',
  'Holly Lane', 'Sycamore Street', 'Dogwood Road', 'Beech Lane', 'Pine Street',
];

const countryNames = [
  'United States', 'Canada', 'United Kingdom', 'Australia', 'Germany',
  'France', 'Italy', 'Spain', 'Japan', 'China', 'India'
];

const generateHouseAddresses = (num) => {
  const houseAddresses = new Set();

  while (houseAddresses.size < num) {
    const streetAddress = streetNames[Math.floor(Math.random() * streetNames.length)];
    const houseNumber = Math.ceil(Math.random() * 10000);
    const ZipCode = Math.floor(Math.random() * 1000000);
    const country = countryNames[Math.floor(Math.random() * countryNames.length)];
    const address = `H No. ${houseNumber}, near ${streetAddress}, ${country}, Zip:${ZipCode}`;
    houseAddresses.add(address);
  }

  return Array.from(houseAddresses);
};

const getRandomAge = () => {
  const min = 18;
  const max = 60;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const getRandomPhone = () => {
  const min = 1000000000;
  const max = 9999999999;
  return Math.floor(Math.random() * (max - min + 1) + min);
}


const generateData = (numberOfDataToCreate) => {
  const data = [];
  for(let i=0; i<numberOfDataToCreate; i++) {
    const name = `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
    const age = getRandomAge();
    const address = generateHouseAddresses(Math.ceil(Math.random() * 4));
    const profession = workList[Math.floor(Math.random() * workList.length)];
    const phoneNumber = getRandomPhone();
    data.push({name, age, address, profession, phoneNumber});
  }
  return data;
}

const filePath = "output.csv";
createCSVFile(generateData(1000000), filePath);
