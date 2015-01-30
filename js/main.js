var dataCountry = [
{name: 'USA', models: ['Ford','Dodge Viper','SSC Aero','Cizeta','Mosler','Saleen','Chevrolet Corvette','Chevrolet Camaro','Vector','Plymouth','Barracuda','Pontiac GTO','Mustang']},
{name: 'Italia', models: ['Ferrari','Maserati','Lamborghini','Pagani','Alfa Romeo','De Tomaso']},
{name: 'Germany', models: ['Mercedes','BMW','Audi','Porsche','Gumpert','Isdera']},
{name: 'France', models: ['Bugatti']},
{name: 'United Kingdom', models: ['Jaguar','Cobra','TVR','Lotus','Bentley','Aston Martin','Ascari','Lister','Stealth','Panther','Ultima']},
{name: 'Japan', models: ['Acura','Lexus','Nissan']},
{name: 'Netherlands', models: ['Spyker']},
{name: 'Sweden', models: ['Koenigsegg']},
{name: 'Spain', models: ['GTA']},
{name: 'Australia', models: ['Holden Monaro']}
];

var data = [
{brand: '', model: '', productionYear: '', info: '', engine: '', horsepower: ''},
{brand: 'Saleen', model: 'S7', productionYear: '2000', info: 'Carbon-fiber body over a mid-mounted; The twin-turbo version hit 750 horses.', engine: 'Ford 7.0-liter V8', horsepower: '550-hp'},
{brand: 'Iso', model: 'Grifo', productionYear: '1963', info: '', engine: '', horsepower: ''},
{brand: 'Ariel', model: 'Atom 500', productionYear: '2011', info: '', engine: '3.0-liter V8', horsepower: '500-hp'},
{brand: 'Auburn', model: '851 Speedster', productionYear: '1935', info: '', engine: '4.6-liter Lycoming straight-8', horsepower: '150-hp'},
{brand: 'Noble', model: 'M600', productionYear: '2010', info: 'An evil Yamaha-designed', engine: 'Volvo-based 4.4-liter twin-turbo V8', horsepower: '650-hp'},
{brand: 'Hispano-Suiza', model: 'H6', productionYear: '1920', info: '', engine: 'six-cylinder H6', horsepower: ''},
{brand: 'Hispano-Suiza', model: 'J12', productionYear: '1931', info: 'A stroked 11.3-liter version made 250.', engine: '9.4-liter V12', horsepower: '220-hp'},
{brand: 'Ruf', model: 'CTR Yellowbird', productionYear: '1987', info: '', engine: '', horsepower: '469-hp'},
{brand: 'Cord', model: '812 Supercharged', productionYear: '1937', info: '', engine: '4.7-liter Lycoming V8', horsepower: '150-hp'},
{brand: 'Hennessey', model: 'Venom GT', productionYear: '2010', info: '', engine: 'twin-turbocharged, 7.0-liter V8', horsepower: '1,244-hp'},
{brand: 'Mercer', model: '35R Raceabout', productionYear: '1910', info: ' American-made Raceabout was capable of over 90 mph and cruising at 70.', engine: '4.8-liter', horsepower: '55-hp'},
{brand: 'Audi', model: 'R8', productionYear: '2008', info: 'The V10-powered cars are awesome, but the V8s are easier to love.', engine: '', horsepower: ''},
{brand: 'Lotus', model: 'Esprit', productionYear: '1976', info: 'When it left production 28 years later, it was powered by a twin-turbo V8 making 350 hp.', engine: '', horsepower: '160-hp'},
{brand: 'Toyota', model: '2000GT', productionYear: '1967', info: 'six from Yamaha; Only 337 were built.', engine: '2.0-liter', horsepower: '150-hp'},
{brand: 'Bentley', model: '8-Litre', productionYear: '1930', info: 'It is a road-going locomotive with wheelbases stretching up to 156 inches.', engine: '8.0-liter straight-six', horsepower: ''},
{brand: 'Bentley', model: '4-1/2 Litre "Blower Bentley"', productionYear: '1927', info: '', engine: '4.5-liter fours making', horsepower: '130-hp'},
{brand: 'Bentley', model: 'Continental GT', productionYear: '2003', info: '', engine: '6.0-liter W12', horsepower: '621-hp'},
{brand: 'Bentley', model: 'R-Type Continental', productionYear: '1954', info: '', engine: '', horsepower: ''},
{brand: 'Aston Martin', model: 'V8 Vantage', productionYear: '1977', info: ' Early versions had 375 hp, while final cars had up to 450.', engine: '', horsepower: ''},
{brand: 'Aston Martin', model: 'V12 Vantage', productionYear: '2009', info: 'Originally 510 hp, up to 565 in the Vantage S.', engine: '', horsepower: ''},
{brand: 'Aston Martin', model: 'V12 Vanquish', productionYear: '2001', info: 'After the svelte DB7, the big-shouldered Vanquish appears a muscular beast engine. Yeah, James Bond had one.', engine: '6.0-liter V12', horsepower: '450-hp'},
{brand: 'Aston Martin', model: 'Vanquish', productionYear: '2010', info: '', engine: '6.0-liter V12', horsepower: '565-hp'},
{brand: 'Aston Martin', model: 'One-77', productionYear: '2010', info: '', engine: '', horsepower: '750-hp'},
{brand: 'Aston Martin', model: 'DB5', productionYear: '1963', info: 'If James Bond had not driven one, it might be forgotten. But he did.', engine: '4.0-liter six underhood', horsepower: ''},
{brand: 'Nissan', model: 'Skyline GT-R (R32)', productionYear: '1989', info: 'enough computing power to run Denmark', engine: 'twin-turbocharged 2.6-liter six', horsepower: 'beyond 1,000-hp'},
{brand: 'Nissan', model: 'Skyline GT-R (R33)', productionYear: '1995', info: 'The best of the R33s was the Nismo 400R.', engine: '', horsepower: ''},
{brand: 'Nissan', model: 'Skyline GT-R (R35)', productionYear: '2007', info: '', engine: '3.8-liter twin-turbo V6', horsepower: 'started at 485-hp and now it is at 545'},
{brand: 'Nissan', model: 'Skyline GT-R (R34)', productionYear: '1999', info: 'The best of the R33s was the Nismo 400R. RB26DETT-powered GT-Rs', engine: '', horsepower: ''},
{brand: 'Chevrolet', model: 'Corvette ZR-1', productionYear: '1990', info: '', engine: 'DOHC V8', horsepower: 'from 385 to 405 hp'},
{brand: 'Chevrolet', model: 'Corvette ZR1', productionYear: '2009', info: '', engine: '6.2-liter V8', horsepower: '638-hp'},
{brand: 'Lexus', model: 'LFA', productionYear: '2011', info: '', engine: '4.8-liter V10', horsepower: '552-hp'},
{brand: 'Rolls-Royce', model: '40/50 Silver Ghost', productionYear: '1908', info: '', engine: '', horsepower: ''},
{brand: 'Stutz', model: 'Bearcat', productionYear: '1912', info: '', engine: '5.8-liter, 16-valve four', horsepower: ''},
{brand: 'Shelby', model: 'Cobra 427', productionYear: '1966', info: '', engine: '', horsepower: '425-hp'},
{brand: 'Duesenberg', model: 'SJ', productionYear: '1932', info: 'The ultimate prewar American car: huge, supercharged, powerful and devastatingly beautiful no matter what body was atop it. The Mormon Meteor version topped 135 mph.', engine: '', horsepower: ''},
{brand: 'Acura / (Honda)?', model: 'NSX', productionYear: '1990', info: 'The all-aluminum midengine car that forced every other manufacturer to build better supercars.', engine: '', horsepower: ''},
{brand: 'Alfa Romeo', model: '6C', productionYear: 'pre 1960s', info: '', engine: '', horsepower: ''},
{brand: 'Alfa Romeo', model: 'Tipo 33 Stradale', productionYear: '1967', info: '', engine: '2.0-liter V8', horsepower: ''},
{brand: 'Alfa Romeo', model: '8C', productionYear: '1931', info: 'race machines that were what Ferrari is now before Ferrari was around.', engine: 'straight-8-powered', horsepower: ''},
{brand: 'Ascari', model: 'A10', productionYear: '1990s-2000s', info: '', engine: '', horsepower: ''},
{brand: 'Ascari', model: 'Ecosse', productionYear: '1980s-1990s', info: '', engine: '', horsepower: ''},
{brand: 'Ascari', model: 'KZ1', productionYear: '1990s-2000s', info: '', engine: '', horsepower: ''},
{brand: 'B Engineering', model: 'Edonis', productionYear: '1990s-2000s', info: '', engine: '', horsepower: ''},
{brand: 'BMW', model: 'i8', productionYear: '', info: '', engine: '', horsepower: ''},
{brand: 'BMW', model: 'Z8', productionYear: '1999', info: 'All-aluminum roadster styled after the 507 and packing the 400-hp, M-built, 5.0-liter V8 from the E39-series M5.', engine: '5.0-liter V8', horsepower: '400-hp'},
{brand: 'BMW', model: '507', productionYear: '1957', info: '', engine: '3.2-liter V8', horsepower: '150-hp'},
{brand: 'BMW', model: 'M1', productionYear: '1979', info: '', engine: '3.5-liter M88 inline-6', horsepower: '273-hp'},
{brand: 'BMW', model: 'M3 Manhart Racing MH3', productionYear: '23', info: '', engine: '', horsepower: ''},
{brand: 'BMW', model: 'M5 G-Power Hurricane', productionYear: '23', info: '', engine: '', horsepower: '',},
{brand: 'BMW', model: 'M5 Touring G-Power', productionYear: '23', info: '', engine: '', horsepower: ''},
{brand: 'BMW', model: 'M6 G-Power Hurricane RR', productionYear: '23', info: '', engine: '', horsepower: ''},
{brand: 'BMW', model: 'Nazca C2', productionYear: '1980s-1990s', info: '', engine: '', horsepower: ''},
{brand: 'BMW', model: 'X6 M Lumma Design CLR', productionYear: '23', info: '', engine: '', horsepower: ''},
{brand: 'Bugatti', model: 'EB-110(SuperSport)', productionYear: '1992', info: '', engine: '3.5-liter V12', horsepower: '553-hp'},
{brand: 'Bugatti', model: 'Type 55', productionYear: 'pre 1960s', info: '', engine: '', horsepower: ''},
{brand: 'Bugatti', model: 'Type 57SC', productionYear: 'pre 1960s', info: '', engine: '', horsepower: ''},
{brand: 'Bugatti', model: 'Veyron', productionYear: '2005', info: '', engine: '8.0liter W16', horsepower: ''},
{brand: 'Cisitalia', model: '202SC', productionYear: 'pre 1960s', info: '', engine: '', horsepower: ''},
{brand: 'Cizeta', model: 'Moroder', productionYear: '1980s-1990s', info: '', engine: '', horsepower: ''},
{brand: 'De Tomaso', model: 'Pantera', productionYear: '1971', info: '', engine: 'Ford 5.8-liter Cleveland V8', horsepower: '330-hp'},
{brand: 'De Tomaso', model: 'Mangusta', productionYear: '1967', info: '', engine: '', horsepower: ''},
{brand: 'Dodge', model: 'Viper SRT(/10)', productionYear: '1992', info: '', engine: '8.4-liter V10', horsepower: '640-hp'},
{brand: 'Duesenberg', model: 'SJ/SSJ', productionYear: 'pre 1960s', info: '', engine: '', horsepower: ''},
{brand: 'Ferrari', model: '250 GT Berlinetta SWB', productionYear: '1959', info: 'Pure sex on a 94.5-inch wheelbase; it was the world GT constructor is champion in 1961', engine: '3.0-liter V12', horsepower: '276-hp'},
{brand: 'Ferrari', model: '250 Testa Rossa', productionYear: '1957', info: 'Sculpted like sin itself and fast enough to win Le Mans three times. Want one? Well, $10 million won-t be enough', engine: '', horsepower: ''},
{brand: 'Ferrari', model: '288 GTO', productionYear: '1984', info: 'Built for Group B racing, but never raced. A 308 amplified with a new tail and a twin-turbo 2.9-liter V8. It led directly to the F40.', engine: '2.9-liter V8', horsepower: ''},
{brand: 'Ferrari', model: '308 GTB and GTS', productionYear: '1975', info: 'The original 308 only', engine: '', horsepower: '235-hp'},
{brand: 'Ferrari', model: '430 Scuderia', productionYear: '2007', info: 'The ultimate F430; less weight (by about 220 pounds).', engine: '', horsepower: '508-hp'},
{brand: 'Ferrari', model: '458 Italia', productionYear: '2010', info: '', engine: '4.5-liter V8', horsepower: '562-hp'},
{brand: 'Ferrari', model: '275 GTB/4', productionYear: '1967', info: '', engine: '3.3-liter V12', horsepower: '300-hp'},
{brand: 'Ferrari', model: '500 America Superfast', productionYear: '1964', info: '', engine: '5.0-liter V12', horsepower: '395-hp'},
{brand: 'Ferrari', model: '512', productionYear: '1960s-1970s', info: '', engine: '', horsepower: ''},
{brand: 'Ferrari', model: '365 GTB/4 Daytona', productionYear: '1969', info: '', engine: '4.4-liter V12', horsepower: '352-hp'},
{brand: 'Ferrari', model: 'GTO', productionYear: '1962', info: 'Only 39 of these V12 GTs were made, but it won three world championships. Billionaire Craig McCaw paid $35 million for the pale green one last year.', engine: '', horsepower: ''},
{brand: 'Ferrari', model: '550 Maranello and 575M Maranello', productionYear: '1996', info: 'big GT; Succeeded by the 575M with a 5.7-liter V12 making 508 hp', engine: '5.5-liter V12', horsepower: '485-hp'},
{brand: 'Ferrari', model: '599 Fiorano', productionYear: '2007', info: 'lashed to a Tuscan villa', engine: '6.0-liter V12', horsepower: '612-hp'},
{brand: 'Ferrari', model: 'Berlinetta Boxer', productionYear: '1973', info: '365 GT4 BB; and devolved into the 512i with a 5.0-liter engine making up to 340 hp.', engine: '4.4-liter flat-12', horsepower: '344-hp'},
{brand: 'Ferrari', model: 'Enzo', productionYear: '2002', info: ' Ferrari is next leap beyond the F40.', engine: '6.0-liter V12', horsepower: '651-hp'},
{brand: 'Ferrari', model: 'F12 Berlinetta', productionYear: '2012', info: '', engine: '6.3-liter V12 GTs', horsepower: '730-hp'},
{brand: 'Ferrari', model: 'F355', productionYear: '1994', info: '', engine: '3.5-liter V8', horsepower: '375-hp'},
{brand: 'Ferrari', model: 'F360', productionYear: '', info: '', engine: '', horsepower: ''},
{brand: 'Ferrari', model: 'LaFerrari', productionYear: '2014', info: 'augmented by a KERS system and everything Ferrari has ever learned.', engine: '6.3-liter V12', horsepower: '789-hp'},
{brand: 'Ferrari', model: 'F40', productionYear: '1987', info: '', engine: 'V8', horsepower: '471-hp'},
{brand: 'Ferrari', model: 'F430 SPIDER', productionYear: '', info: '', engine: '', horsepower: ''},
{brand: 'Ferrari', model: 'F50', productionYear: '1995', info: 'was derived from the 333SP racer', engine: '4.7-liter V12', horsepower: '513-hp'},
{brand: 'Ferrari', model: 'P4/5 by Pininfarina', productionYear: '2006', info: 'A glorious one-off by the legendary coachworks atop the bones of a Ferrari Enzo. It is unabashedly and spectacularly retro.', engine: '', horsepower: ''},
{brand: 'Ferrari', model: 'SA APERTA', productionYear: '', info: '', engine: '', horsepower: ''},
{brand: 'Ferrari', model: 'Testarossa and 512 TR and F512 M', productionYear: '1984', info: 'Output grew to 428 horses in the 512 TR and 440 in the F512 M.', engine: '4.9-liter flat-12', horsepower: '390-hp'},
{brand: 'Ford', model: 'GT', productionYear: '2005', info: '', engine: '5.4-liter V8', horsepower: '550-hp'},
{brand: 'Ford', model: 'GT40', productionYear: '1964', info: 'Four-time Le Mans winner. Is not that enough', engine: '', horsepower: ''},
{brand: 'GTA', model: 'Spano', productionYear: '1990s-2000s', info: '', engine: '', horsepower: ''},
{brand: 'Gumpert', model: 'Apollo', productionYear: '1990s-2000s', info: '', engine: '', horsepower: ''},
{brand: 'Hulme', model: 'F1', productionYear: '1990s-2000s', info: '', engine: '', horsepower: ''},
{brand: 'Isdera', model: 'Commendatore 112i', productionYear: '1980s-1990s', info: '', engine: '', horsepower: ''},
{brand: 'Isdera', model: 'Imperator 108i', productionYear: '1970s-1980s', info: '', engine: '', horsepower: ''},
{brand: 'Jaguar', model: 'XJ220', productionYear: '1992', info: '', engine: '3.5-liter, twin-turbocharged V6', horsepower: '540-hp'},
{brand: 'Jaguar', model: 'E-Type', productionYear: '1961', info: '', engine: '3.8-liter straight-6', horsepower: '265-hp'},
{brand: 'Jaguar', model: 'XJR-15', productionYear: '1980s-1990s', info: '', engine: '', horsepower: ''},
{brand: 'Jaguar', model: 'XKSS', productionYear: '1957', info: 'The road-going version of the D-Type racing car. How cool? Steve McQueen owned one. Only 16 were made, all powered by the Jag inline-6.', engine: '', horsepower: ''},
{brand: 'Koenigsegg', model: 'Agera', productionYear: '2011', info: '1,016 horses in the Agera S and 1,124 hp in the Agera R.', engine: 'Two turbos on a 5.0-liter V8', horsepower: '927-hp'},
{brand: 'Koenigsegg', model: 'CC', productionYear: '1980s-1990s', info: '', engine: '', horsepower: ''},
{brand: 'Koenigsegg', model: 'CC8S', productionYear: '1990s-2000s', info: '', engine: '', horsepower: ''},
{brand: 'Koenigsegg', model: 'CCR', productionYear: '1990s-2000s', info: '', engine: '', horsepower: ''},
{brand: 'Koenigsegg', model: 'CCX', productionYear: '1990s-2000s', info: '', engine: '', horsepower: ''},
{brand: 'Lamborghini', model: 'Aventador LP1600', productionYear: '', info: '', engine: '', horsepower: ''},
{brand: 'Lamborghini', model: 'Aventador', productionYear: '2011', info: '', engine: '6.5-liter V12', horsepower: '690-hp'},
{brand: 'Lamborghini', model: 'Countach', productionYear: '1974', info: '5000QV-s', engine: '5.2-liter V12', horsepower: '455-hp'},
{brand: 'Lamborghini', model: 'Diablo Coatl', productionYear: '', info: '', engine: '', horsepower: ''},
{brand: 'Lamborghini', model: 'Diablo', productionYear: '1990', info: '', engine: '5.7-liter V12', horsepower: '595-hp'},
{brand: 'Lamborghini', model: 'Gallardo XXX', productionYear: '', info: '', engine: '', horsepower: ''},
{brand: 'Lamborghini', model: 'Gallardo', productionYear: '2004', info: '', engine: '', horsepower: '500-hp (horsepower)'},
{brand: 'Lamborghini', model: 'Huracan LP850-4', productionYear: '', info: '', engine: '', horsepower: ''},
{brand: 'Lamborghini', model: 'Miura LP400', productionYear: '1967', info: '', engine: '3.9-liter V12', horsepower: '350-hp'},
{brand: 'Lamborghini', model: 'Murcielago LP710', productionYear: '', info: '', engine: '', horsepower: ''},
{brand: 'Lamborghini', model: 'Murciélago', productionYear: '2001', info: 'LP670-4 Super Veloce', engine: 'V12', horsepower: '661-hp'},
{brand: 'Lamborghini', model: 'Veneno', productionYear: '2014', info: 'Underneath it is an Aventador. Which is good enough.', engine: '', horsepower: ''},
{brand: 'Lister', model: 'Storm', productionYear: '1980s-1990s', info: '', engine: '', horsepower: ''},
{brand: 'Maserati', model: 'Birdcage 75th', productionYear: '', info: '', engine: '', horsepower: ''},
{brand: 'Maserati', model: 'Bora', productionYear: '1960s-1970s', info: '', engine: '', horsepower: ''},
{brand: 'Maserati', model: '3500 GT', productionYear: '1957', info: '', engine: '3.5-liter inline-6', horsepower: ''},
{brand: 'Maserati', model: 'Ghibli(S)', productionYear: '1967', info: '', engine: '4.7 or 4.9 liters of V8 power', horsepower: ''},
{brand: 'Maserati', model: 'Mistral', productionYear: '1964', info: 'The best Mistrals use a 4.0-liter V8 at 255 hp.', engine: '3.5-liter six', horsepower: '235-hp'},
{brand: 'Maserati', model: 'GranTurismo MC', productionYear: '', info: '', engine: '', horsepower: ''},
{brand: 'Maserati', model: 'MC12(Corsa)', productionYear: '2004', info: 'A Ferrari Enzo in Maserati drag', engine: '6.0-liter V12', horsepower: '620-hp'},
{brand: 'Maserati', model: 'Quattroporte', productionYear: '', info: '', engine: '', horsepower: ''},
{brand: 'McLaren', model: 'F1', productionYear: '1992', info: 'It is a 231-mph bullet that laid claim to all-time awesome with its BMW-built', engine: '6.1-liter V12', horsepower: '618-hp'},
{brand: 'McLaren', model: 'MP4-12C', productionYear: '2011', info: '', engine: '3.8-liter V8', horsepower: '592-hp'},
{brand: 'McLaren', model: 'P1', productionYear: '2014', info: 'Alongside the Porsche 918 and LaFerrari it will revolutionize sports cars with its hybrid powertrain.', engine: '3.8-liter twin-turbo V8', horsepower: ''},
{brand: 'Mega', model: 'Track', productionYear: '1980s-1990s', info: '', engine: '', horsepower: ''},
{brand: 'Mercedes-Benz', model: '300SL', productionYear: '1954', info: 'Forget the doors and look at the big direct-injection six, the intricate chassis and the perfect body. It is the defining supercar of the 1950s.', engine: '', horsepower: ''},
{brand: 'Mercedes-Benz', model: 'CLK-GTR', productionYear: '1997', info: 'Midengine homologation special built to dominate Le Mans and the FIA GT championship, and it did.', engine: '6.0-liter V12', horsepower: 'about 600-hp'},
{brand: 'Mercedes-Benz', model: 'SLR McLaren', productionYear: '2004', info: '', engine: '', horsepower: '617-hp'},
{brand: 'Mercedes-Benz', model: '540K Roadster', productionYear: '1936', info: '', engine: '5.4-liter straight-8', horsepower: '180-hp'},
{brand: 'Mercedes-Benz', model: 'SLS AMG', productionYear: '2011', info: 'Modern interpretation of the 300SL with those doors and, better, the AMG', engine: '6.2-liter V8', horsepower: '583-hp'},
{brand: 'Mercedes-Benz', model: 'SL65 AMG Black Series', productionYear: '2010', info: 'Take the SL65, drop about 550 pounds of weight out of it,', engine: 'twin-turbo V12', horsepower: '661-hp'},
{brand: 'Mosler', model: 'MT900', productionYear: '1990s-2000s', info: '', engine: '', horsepower: ''},
{brand: 'Pagani', model: 'Zonda', productionYear: '1999', info: 'Intoxicating mix of Italian midengine bodywork and Mercedes AMG power.', engine: '', horsepower: ''},
{brand: 'Pagani', model: 'Huayra', productionYear: '2012', info: '', engine: 'Mercedes AMG 6.0-liter, twin-turbo V12', horsepower: ''},
{brand: 'Pegaso', model: 'Z-102', productionYear: 'pre 1960s', info: '', engine: '', horsepower: ''},
{brand: 'Porsche', model: '959', productionYear: '1986', info: '', engine: 'twin-turbo flat-6', horsepower: ''},
{brand: 'Porsche', model: '911 GT2', productionYear: '1993', info: 'The 993-based original had 450 hp. The latest 997 model goes to 523 hp.', engine: '', horsepower: ''},
{brand: 'Porsche', model: '911 Turbo', productionYear: '1976', info: '', engine: '', horsepower: ''},
{brand: 'Porsche', model: '918 Spyder', productionYear: '2014', info: '', engine: '', horsepower: ''},
{brand: 'Porsche', model: 'Carrera GT', productionYear: '2005', info: '', engine: '5.7-liter V10', horsepower: '612-hp'},
{brand: 'Saleen', model: 'S7', productionYear: '1990s-2000s', info: '', engine: '', horsepower: ''},
{brand: 'Schuppan', model: '962CR', productionYear: '1980s-1990s', info: '', engine: '', horsepower: ''},
{brand: 'Spectre', model: 'R42', productionYear: '1980s-1990s', info: '', engine: '', horsepower: ''},
{brand: 'SSC', model: 'Aero', productionYear: '1990s-2000s', info: '', engine: '', horsepower: ''},
{brand: '', model: '', productionYear: '', info: '', engine: '', horsepower: ''}
];

$(document).ready(function(){

	$.ajax({
		"url": "data/startPage.txt",
		"dataType": "text",
		"success": function(data){
			$(".main-content").html(data);
		}
	});
	// Script for Back_to_top click
	//for Chrome; 
	$("#BackToTop").on('click', function(e){
		$('body').scrollTop(0);
	});
	// for Firefox;
	$("#BackToTop").on('click', function(e){
		$('html').scrollTop(0);
	});

	//Script for SideBar onclick transition;


	// Script for Bootstrap-tooltips
	
	

	// Script for change content
	// 
	$("[href=#about]").on('click', function(){
		$.ajax({
			"url": "data/about.txt",
			"dataType": "text",
			"success": function(data){
				$(".main-content").html(data);
			}
		});
		// $('.main-content').html($('#SuperCarsHistory').html());
	});
	$("[href=#home]").on('click', function(){
		$.ajax({
			"url": "data/startPage.txt",
			"dataType": "text",
			"success": function(data){
				$(".main-content").html(data);
			}
		});
		// $('.main-content').html($('#StartPage').html());
	});
	$("[href=#contacts]").on('click', function(){
		$.ajax({
			"url": "data/myContacts.txt",
			"dataType": "text",
			"success": function(data){
				$(".main-content").html(data);
			}
		});
		// $('.main-content').html($('#MyContacts').html());
	});
	$("[href=#listcars]").on('click', function(e){
		$('.main-content').html($('#ListSuperCars').html());

		// Script for dataTable;
		$.get("data/supercars.json", function( data ){
		  		var content="";
		  		for(var i=0; i<data.brands.length; i++) {
		        for(var j=0; j<data.brands[i].models.length; j++) {
		          content += "<tr><td class=visible-lg>"+data.country+"</td><td>"+data.brands[i].brand+"</td><td>"+data.brands[i].models[j].model+"</td><td class=hidden-xs>"+data.brands[i].models[j].productionYear+"</td><td class=visible-lg>"+data.brands[i].models[j].engine+"</td><td class=\u0022visible-md visible-lg\u0022>"+data.brands[i].models[j].horsepower+"</td></tr>";
		        }
		      $("#table").append(content);
		      content = "";
		  		}
		    }
		);
		// 
		// for(var l=0; l<data.length; l++){
		// 	document.getElementById('table').innerHTML += "<tr id='"+l+"'><td>"+data[l].brand+"</td><td>"+data[l].model+"</td><td class='hidden-xs'>"+data[l].productionYear+"</td><td class='visible-md visible-lg'>"+data[l].horsepower+"</td><td class='visible-lg'>"+data[l].engine+"</td></tr>";
		// }
		// $('tr').on('click', function(e){
		// 	var id = this.id;
		// 	alert("Brand: "+data[id].brand+"\nModel: "+data[id].model+"\nProduction Year: "+data[id].productionYear+"\nInfo: "+data[id].info+"\nEngine: "+data[id].engine+"\nHorse Power: "+data[id].horsepower);
		// 	// alert(data[id]);
		// });
		// // Usage DataTable
		// $('table').dataTable();
		// $('#example').dataTable();
	});

	// Script for Taby;

	$('.tabs-control-link').on('click', function(e){
		e.preventDefault();

		var item = $(this).closest('.tabs-control-item'),
			contentItem = $('.tabs-item'),
			itemPosition = item.data('class');

		contentItem.filter('.tabs-item-'+ itemPosition)
			.add(item)
			.addClass('active')
			.siblings()
			.removeClass('active');
	});

	// Script for creating SideBar Navigation;
	// 
	// Sort by Country;
	// _.sortBy(dataCountry, function (country) { return country.name;});
	// 
	// Sort by Models;
	// _.sortBy(dataCountry[i].models);
	// 
	dataCountry = _.sortBy(dataCountry, function (country) { return country.name;});
	for(var i=0; i<dataCountry.length; i++) {
		dataCountry[i].models.sort();
		// dataCountry[i].models = _.sortBy(dataCountry[i].models);
		document.getElementById('accordeon').innerHTML += '<li class="panel panel-default"><a href="#collapse-'+i+'" data-toggle="collapse" data-parent="#accordeon">'+dataCountry[i].name+'<span class="sr-only">'+dataCountry[i].name+' country</span></a><ul id="collapse-'+i+'" class="panel-collapse collapse list-unstyled"></ul></li>';
		
		for(var j=0; j<dataCountry[i].models.length; j++) {
			document.getElementById('collapse-'+i).innerHTML += '<li><a href="#'+dataCountry[i].models[j]+'">'+dataCountry[i].models[j]+'</a></li>';
		}
	}

	
}); // -> ready_end;

// Accordeon;

// $(document).ready(function(){
// 	$('.accordeon_trigger').on('click', function(e){
// 		e.preventDefault();

// 		var $this = $(this),
// 				item = $this.closest('.accordeon_item'),
// 				list = $this.closest('.accordeon_list'),
// 				items = list.find('.accordeon_item'),
// 				content = item.find('.accordeon_inner'),
// 				otherContent = list.find('.accordeon_inner'),
// 				duration = 300;

// 			if (!item.hasClass('active'))	{
// 				item.addClass('active');
// 				items.removeClass('active');
// 				otherContent.stop(true, true).slideUp(duration);
// 				content.stop(true, true).slideDown(duration);
// 			} else {
// 				content.stop(true, true).slideUp(duration);
// 				item.stop(true, true).removeClass('active');
// 			}
// 	});
// });