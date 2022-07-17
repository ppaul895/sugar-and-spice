import { setLightEstimationEnabled } from "expo/build/AR";

// CATEGORIES ARRAY
export const categories = [
	{
		id: 1,
		name: 'Breakfast',
		photo_url: 'https://thumbor.thedailymeal.com/eakBw6ct7y0NoE7boW9vN72Hsbw=/870x565/filters:focal(600x400:601x401):format(webp)/https://www.thedailymeal.com/sites/default/files/2019/01/18/0-Utah-MAIN2.jpg'
	},
	{
		id: 2,
		name: 'Italian',
		photo_url: 'https://images.unsplash.com/photo-1533777324565-a040eb52facd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
	},
	{
		id: 3,
		name: 'Mexican',
		photo_url: 'https://ak1.picdn.net/shutterstock/videos/19498861/thumb/1.jpg'
	},
	{
		id: 4,
		name: 'Smoothies',
		photo_url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/still-life-of-three-fresh-smoothies-in-front-of-royalty-free-image-561093647-1544042068.jpg?crop=0.715xw:0.534xh;0.0945xw,0.451xh&resize=768:*'
	},
	{
		id: 5,
		name: 'Desserts',
		photo_url: 'https://www.telegraph.co.uk/content/dam/Travel/2019/January/france-food.jpg?imwidth=1400'
	},
];

// RECIPES ARRAY
export const recipes = [
	{
		recipeId: 1,
		categoryId: 3,
		title: 'Arroz con Pollo',
		photo_url: 'https://www.goya.com/media/3854/southwestern-chicken-and-rice.jpg',
		photosArray: [
			'https://www.goya.com/media/3854/southwestern-chicken-and-rice.jpg?quality=8',
			'https://www.abeautifulplate.com/wp-content/uploads/2018/01/arroz-con-pollo-recipe-1-7-720x405.jpg',
			'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/12/8/2/MN0704H_Arroz-con-Pollo_s4x3.jpg.rend.hgtvcom.826.620.suffix/1449689063326.jpeg',
			'https://res.cloudinary.com/hksqkdlah/image/upload/31025_sfs-arroz-con-pollo-9.jpg',
		],
		time: '45',
		ingredients: [
			[9, '5 tbsp'],
			[65, '3 lbs'],
			[49, '1/2 cup'],
			[3, '2 tsp'],
			[4, '1 pinch'],
			[14, '1 pinch'],
			[22, '1 bulb\'s stems, chopped'],
			[29, '1 clove, minced'],
			[66, '2 cups'],
			[67, '3 cups'],
			[31, '1 tbsp'],
			[46, '1 pinch'],
		],
		description: '1. Brown the chicken pieces: Heat 3 tbsp olive oil in a large skillet on medium high heat. Put the flour in a wide bowl, mix in a generous sprinkling of salt, pepper, and paprika. Dredge the chicken pieces lightly in the flour mixture and put in the pan to brown. Cook a few minutes on each side, so that the chicken has browned.\n\n2. Brown the rice: Add the rice to the pan to brown. Stir first to coat the rice with the olive oil in the pan. Let the rice brown and then stir a little to let more of it brown.\n\n3. Add onion and garlic: Add the onion and garlic to the pan. Cook the onion, garlic, and rice mixture, stirring frequently, until the onions have softened, about 4 minutes.\n\n4. Place the chicken pieces, skin-side up, on top of the rice.\n\n5. Add stock, tomato, salt, oregano: In a separate bowl, mix together the stock, tomato, salt, and oregano. Pour the stock mixture over the rice and chicken.\n\n6. Simmer, covered: Bring to a simmer, reduce the heat to low, and cover. Let cook for 20-25 minutes, depending on the type of rice and the instructions on the rice package, until the rice and chicken are done. Fluff the rice with a fork. Add more salt and pepper to taste.'
	},
	{
		recipeId: 2,
		categoryId: 4,
		title: 'Banana Peanut Butter Smoothie',
		photo_url: 'https://detoxinista.com/wp-content/uploads/2019/06/peanut-butter-banana-smoothie.jpg',
		photosArray: [
			'https://detoxinista.com/wp-content/uploads/2019/06/peanut-butter-banana-smoothie.jpg',
			'https://thecozycook.com/wp-content/uploads/2018/06/Peanut-Butter-Banana-Smoothie.jpg',
			'https://www.joyfulhealthyeats.com/wp-content/uploads/2020/01/Creamy-Peanut-Butter-Banana-Smoothie-web-8.jpg',
			'https://feelgoodfoodie.net/wp-content/uploads/2017/02/Peanut-Butter-Banana-Smoothie-5.jpg',
		],
		time: '5',
		ingredients: [
			[68, '2'],
			[76, '2 cups'],
			[77, '1/2 cup'],
			[78, '2 tbsp'],
			[79, '2 cups'],
		],
		description: '1. Place bananas, milk, peanut butter, honey, and ice cubes in a blender; blend until smooth, about 30 seconds.'
	},
	{
		recipeId: 3,
		categoryId: 1,
		title: 'Breakfast Sandwich',
		photo_url: 'https://www.thespruceeats.com/thmb/RVG2hUl7tWoIjg-bWYwgYtL8XrM=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/bacon-egg-and-cheese-sandwich-57db4e543df78c9cce2f5fcc.jpg',
		photosArray: [
			'https://www.thespruceeats.com/thmb/RVG2hUl7tWoIjg-bWYwgYtL8XrM=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/bacon-egg-and-cheese-sandwich-57db4e543df78c9cce2f5fcc.jpg',
			'https://longbournfarm.com/wp-content/uploads/2019/06/breakfast-biscuit-sandwiches-4-700x467.jpg',
			'https://images-gmi-pmc.edge-generalmills.com/946860e7-da73-43e3-8a19-73f7f6ca4c21.jpg',
			'https://www.seriouseats.com/2016/01/20160105-homemade-egg-mcmuffing-recipe-kenji-21.jpg',
		],
		time: '10',
		ingredients: [
			[1, '2 large'],
			[7, '1/4 cup'],
			[24, '2 slices '],
			[5, '1'],
		],
		description: '1. Gather the ingredients.\n\n2. Toast the English muffin to desired toastiness.\n\n3. Cook the slices of bacon until crispy. If you are making larger batches, cook the bacon on a cookie sheet in the oven.\n\n4. Heat a frying pan on medium heat, grease with cooking spray. Crack the two eggs into the pan and cook for 2 minutes.  Flip and cook for another 30 seconds. You can cook for longer if you want the yolk less runny.\n\n5. Add the cheddar to the eggs and cover with a lid for about 30 seconds, or until the cheese melts. \n\n6. Place the eggs on the English muffin and top with the cooked bacon. Top with the other half of the muffin and serve!'
	},
	{
		recipeId: 4,
		categoryId: 5,
		title: 'Brownies',
		photo_url: 'https://i0.wp.com/smittenkitchen.com/wp-content/uploads//2012/08/my-favorite-brownies1.jpg?fit=1200%2C800&ssl=1',
		photosArray: [
			'https://i0.wp.com/smittenkitchen.com/wp-content/uploads//2012/08/my-favorite-brownies1.jpg?fit=1200%2C800&ssl=1',
			'https://cdn.loveandlemons.com/wp-content/uploads/2020/01/brownie-recipe.jpg',
			'https://images-gmi-pmc.edge-generalmills.com/d48f476f-ab97-4edf-8d5b-d617e5f261d0.jpg',
			'https://hips.hearstapps.com/amv-prod-tpw.s3.amazonaws.com/wp-content/uploads/2014/01/brownies2.jpg?crop=1xw:0.7517899761336515xh;center,top&resize=640:*',
		],
		time: '45',
		ingredients: [
			[33, '1 & 1/2 cups'],
			[49, '3/4 cup'],
			[50, '2/3 cup'],
			[51, '1/2 cup'],
			[52, '1/2 cup'],
			[3, '3/4 tsp'],
			[1, '2 large'],
			[9, '1/2 cup'],
			[53, '2 tbsp'],
			[54, '1/2 tsp'],
		],
		description: '1. Preheat the oven to 325° F. Lightly spray an 8x8 baking dish with cooking spray and line it with parchment paper. Spray the parchment paper.\n\n2. In a medium bowl, combine the sugar, flour, cocoa powder, powdered sugar, chocolate chips, and salt.\n\n3. In a large bowl, whisk together the eggs, olive oil, water, and vanilla.\n\n4. Sprinkle the dry mix over the wet mix and stir until just combined.\n\n5. Pour the batter into the prepared pan and use a spatula to smooth the top. Bake for 40 to 48 minutes, or until a toothpick comes out with only a few crumbs attached (note: it is better to pull the brownies out early than to leave them in too long). Cool completely before slicing. Store in an airtight container at room temperature for up to 3 days. These also freeze well!'
	},
	{
		recipeId: 5,
		categoryId: 2,
		title: 'Buffalo Pizza',
		photo_url: 'https://www.tablefortwoblog.com/wp-content/uploads/2019/01/buffalo-chicken-pizza-recipe-photos-tablefortwoblog-3.jpg',
		photosArray: [
			'https://www.tablefortwoblog.com/wp-content/uploads/2019/01/buffalo-chicken-pizza-recipe-photos-tablefortwoblog-3.jpg',
			'https://lilluna.com/wp-content/uploads/2020/02/buffalo-chicken-pizza-resize-9.jpg',
			'https://karalydon.com/wp-content/uploads/2020/02/buffalo-cauliflower-pizza-6-2.jpg',
			'https://i1.wp.com/www.thissavoryvegan.com/wp-content/uploads/2017/03/vegan-buffalo-cauliflower-pizza-2.jpeg?resize=2212%2C3318&ssl=1',
		],
		time: '40',
		ingredients: [
			[15, '1 lb'],
			[2, '4 tbsp'],
			[16, '1/4 cup'],
			[29, '1 clove, minced'],
			[19, '8 oz'],
		],
		description: '1. Preheat oven to 500°. Brush two large baking sheets with vegetable oil and sprinkle each with a layer of cornmeal.\n\n2. Place butter in a medium microwave-safe bowl. Microwave until melted, 20 to 30 seconds. Whisk in hot sauce and garlic powder until combined. Pour half of the buffalo sauce over chicken and toss to coat.\n\n3. On a lightly floured surface, shape each half of pizza dough into a round ball, then press down the center of each to create a 1/2" crust. With the dough resting on the back of your hands and your knuckles, gently stretch dough out with the help of gravity by moving your hands inch by inch along the crust. Transfer to prepared baking sheets.\n\n4. Add half of the remaining buffalo sauce to each pizza and spread all over the dough (leaving the outer 1" bare). Divide sauced chicken, torn mozzarella, blue cheese, and red onion evenly between the pizzas.\n\n5. Bake pizzas until crust is golden and cheese is melty, 15 to 17 minutes. Garnish with green onions and a drizzle of hot sauce (if using) and serve immediately.'
	},
	{
		recipeId: 6,
		categoryId: 3,
		title: 'Chicken Fajitas',
		photo_url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chicken-fajitas-horizontal-jpg-1522721531.jpg?crop=1.00xw:0.752xh;0,0.0457xh&resize=1200:*',
		photosArray: [
			'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chicken-fajitas-horizontal-jpg-1522721531.jpg?crop=1.00xw:0.752xh;0,0.0457xh&resize=1200:*',
			'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Flavorful-Chicken-Fajitas_EXPS_CIW19_12540_B08_30_6b.jpg',
			'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/02/Chicken-Fajitas-7.jpg',
			'https://valentinascorner.com/wp-content/uploads/2019/02/Baked-Chicken-Fajitas-4.jpg',
		],
		time: '30',
		ingredients: [
			[65, '3'],
			[21, '1 medium'],
			[84, '3'],
			[83, '1'],
			[44, '1 tsp'],
			[19, '3 tbsp'],
			[14, '1/2 tsp'],
			[4, '1/2 tsp'],
			[45, '1/2 tsp'],
			[3, '1/2 tsp'],
		],
		description: '1. Cut onion into slivers & slice peppers.\n\n2. In a separate bowl, combine 1 tablespoon olive oil, juice of 1/2 lime, chili powder, paprika, onion powder, pepper, cumin and salt. Cut chicken into strips and toss with the spice mixture.\n\n3. Preheat 1 tablespoon olive oil over medium high. Add 1/2 of the chicken and cook until just cooked, about 3-5 minutes. Remove from pan and set aside. Repeat with remaining chicken.\n\n4. Set chicken aside and add 1 tablespoon oil to the pan. Drain onions well and cook 2 minutes. Add in sliced peppers and cook an additional 2 minutes or just until hot. Add chicken back to the pan and stir to combine.\n\n5. Squeeze additional lime overtop and serve over tortillas.'
	},
	{
		recipeId: 7,
		categoryId: 2,
		title: 'Fettuccine Alfredo',
		photo_url: 'https://www.modernhoney.com/wp-content/uploads/2018/08/Fettuccine-Alfredo-Recipe-1.jpg',
		photosArray: [
			'https://www.modernhoney.com/wp-content/uploads/2018/08/Fettuccine-Alfredo-Recipe-1.jpg',
			'https://cdn.loveandlemons.com/wp-content/uploads/2020/01/fettuccine-alfredo.jpg',
			'https://hips.hearstapps.com/delish/assets/17/36/1504715566-delish-fettuccine-alfredo.jpg',
			'https://www.eitanbernath.com/wp-content/uploads/2018/12/Fettuccine-Alfredo-2-LOW-RES.jpg',
		],
		time: '25',
		ingredients: [
			[40, '24 oz, dry'],
			[1, '1 cup'],
			[41, '3/4 pint'],
			[3, '1 dash'],
			[4, '1 dash'],
			[38, '3/4 cup, grated'],
		],
		description: '1. Bring a large pot of lightly salted water to a boil. Add fettuccine and cook for 8 to 10 minutes or until al dente; drain.\n\n2. In a large saucepan, melt butter into cream over low heat. Add salt, pepper and garlic salt. Stir in cheese over medium heat until melted; this will thicken the sauce.\n\n3. Add pasta to sauce. Use enough of the pasta so that all of the sauce is used and the pasta is thoroughly coated. Serve immediately.'
	},
	{
		recipeId: 8,
		categoryId: 3,
		title: 'Fish Tacos',
		photo_url: 'https://hips.hearstapps.com/hmg-prod/images/190307-fish-tacos-112-1553283299.jpg',
		photosArray: [
			'https://hips.hearstapps.com/hmg-prod/images/190307-fish-tacos-112-1553283299.jpg',
			'https://natashaskitchen.com/wp-content/uploads/2017/08/Easy-Fish-Tacos-with-the-Best-Fish-Taco-Sauce-4.jpg',
			'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/4/26/0/FNM_060110-Weeknight-001_s4x3.jpg.rend.hgtvcom.826.620.suffix/1371591159264.jpeg',
			'https://static01.nyt.com/images/2020/07/09/dining/fish-tacos-horizontal/merlin_125553677_41461c04-77ba-456c-8a57-eeed2227f542-articleLarge.jpg',
		],
		time: '35',
		ingredients: [
			[9, '3 tbsp'],
			[83, '1, juiced'],
			[44, '2 tsp'],
			[14, '1 tsp'],
			[45, '1/2 tsp'],
			[13, '1/2 tsp'],
			[43, '1 & 1/2 lb'],
			[61, '2 tbsp, for serving'],
			[47, '8'],
			[3, '1/2 tbsp'],
			[4, '1/2 tbsp'],
			[48, '1, sliced'],
		],
		description: '1. In a medium shallow bowl, whisk together olive oil, lime juice, paprika, chili powder, cumin, and cayenne.\n\n2. Add tilapia, tossing until evenly coated. Let marinate 15 minutes.\n\n3. Meanwhile, make slaw: In a large bowl, whisk together mayonnaise, lime juice, cilantro, and honey. Stir in cabbage, corn, and jalapeño. Season with salt and pepper.\n\n4. In a large nonstick skillet over medium-high heat, heat vegetable oil. Remove cod from marinade and season both sides of each filet with salt and pepper. Add fish flesh side-down. Cook until opaque and cooked through, 3 to 5 minutes per side. Let rest 5 minutes before flaking with a fork.\n\n5. Assemble tacos: Serve fish over grilled tortillas with corn slaw and avocado. Squeeze lime juice on top and garnish with sour cream.'
	},
	{
		recipeId: 9,
		categoryId: 4,
		title: 'Green Smoothie',
		photo_url: 'https://joyfoodsunshine.com/wp-content/uploads/2019/07/green-smoothie-recipe-2.jpg',
		photosArray: [
			'https://joyfoodsunshine.com/wp-content/uploads/2019/07/green-smoothie-recipe-2.jpg',
			'https://www.cookingclassy.com/wp-content/uploads/2019/07/green-smoothie-10.jpg',
			'https://h2m4j5c4.rocketcdn.me/wp-content/uploads/2013/01/Beginners-Luck-Green-Smoothie.jpg',
			'https://www.jessicagavin.com/wp-content/uploads/2020/01/green-smoothie-8-1200.jpg',
		],
		time: '5',
		ingredients: [
			[80, '2 cups'],
			[53, '2 cups'],
			[74, '1 cup'],
			[73, '1 cup'],
			[69, '1/2 cup'],
		],
		description: '1. Tightly pack 2 cups of leafy greens in a measuring cup and then toss into blender.\n\n2. Add water and blend together until all leafy chunks are gone.\n\n3. Add mango, pineapple and bananas and blend again until smooth.\n\n4. Pour into a mason jar (or cute cup of your choice).\n\n5. Enjoy!'
	},
	{
		recipeId: 10,
		categoryId: 1,
		title: 'Hash Browns',
		photo_url: 'https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2020/01/baked-vegan-hash-browns-plate-1024x1536.jpg',
		photosArray: [
			'https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2020/01/baked-vegan-hash-browns-plate-1024x1536.jpg',
			'https://thesaltymarshmallow.com/wp-content/uploads/2019/10/Homemade-Hashbrowns4.jpg',
			'https://www.thedailymeal.com/sites/default/files/recipe/2020/shutterstock_1194899938.jpg',
			'https://lovingitvegan.com/wp-content/uploads/2019/03/Vegan-Hash-Browns-29.jpg',
		],
		time: '20',
		ingredients: [
			[2, '3 tbsp'],
			[11, '2, peeled'],
			[3, '1 pinch'],
			[4, '1 pinch'],
			[14, '1 pinch'],
		],
		description: '1. Shred potatoes into a large bowl filled with cold water. Stir until water is cloudy, drain, and cover potatoes again with fresh cold water. Stir again to dissolve excess starch. Drain potatoes well, pat dry with paper towels, and squeeze out any excess moisture.\n\n2. Heat clarified butter in a large non-stick pan over medium heat. Sprinkle shredded potatoes into the hot butter and season with salt, black pepper, cayenne pepper, and paprika.\n\n3. Cook potatoes until a brown crust forms on the bottom, about 5 minutes. Continue to cook and stir until potatoes are browned all over, about 5 more minutes.'
	},
	{
		recipeId: 11,
		categoryId: 2,
		title: 'Lasagna',
		photo_url: 'https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg',
		photosArray: [
			'https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg',
			'https://www.simplyrecipes.com/wp-content/uploads/2012/11/Vegetarian-Lasagna-LEAD-1.jpg',
			'https://www.cookingclassy.com/wp-content/uploads/2013/03/lasagna15.jpg',
			'https://www.simplyrecipes.com/wp-content/uploads/2004/12/lasagna-horiz-a-2000.jpg',
		],
		time: '55',
		ingredients: [
			[30, '1 cup'],
			[27, '1 lb'],
			[28, '1, minced'],
			[4, '1 tbsp'],
			[19, '1 lb'],
			[3, '1 tbsp'],
			[25, '1 lb, dry'],
		],
		description: '1. Start by making the sauce with ground beef, bell peppers, onions, and a combo of tomato sauce, tomato paste, and crushed tomatoes. The three kinds of tomatoes gives the sauce great depth of flavor.\n\n2. Let this simmer while you boil the noodles and get the cheeses ready. We’re using ricotta, shredded mozzarella, and parmesan — like the mix of tomatoes, this 3-cheese blend gives the lasagna great flavor!\n\n3. From there, it’s just an assembly job. A cup of meat sauce, a layer of noodles, more sauce, followed by a layer of cheese. Repeat until you have three layers and have used up all the ingredients.\n\n4. Bake until bubbly and you’re ready to eat!'
	},
	{
		recipeId: 12,
		categoryId: 5,
		title: 'Oatmeal Cookies',
		photo_url: 'https://i2.wp.com/www.sugarspunrun.com/wp-content/uploads/2019/11/Best-Oatmeal-cookies-1-of-1.jpg',
		photosArray: [
			'https://i2.wp.com/www.sugarspunrun.com/wp-content/uploads/2019/11/Best-Oatmeal-cookies-1-of-1.jpg',
			'https://s23991.pcdn.co/wp-content/uploads/2019/09/oatmeal-raisin-cookies-1-fp.jpg',
			'https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/16699-best-ever-oatmeal-cookies-760x580.jpg?ext=.jpg',
			'https://aprettylifeinthesuburbs.com/wp-content/uploads/2018/10/Chewy-Oatmeal-Cookies-F.jpg',
		],
		time: '120',
		ingredients: [
			[2, '1 cup, softened '],
			[33, '1 cup'],
			[62, '1 cup, packed '],
			[1, '2 large'],
			[54, '1 tsp'],
			[49, '2 cups'],
			[55, '1 tsp'],
			[3, '1 tsp'],
			[56, '1 & 1/2 tsp'],
			[81, '3 cups'],
		],
		description: '1. In a medium bowl, cream together butter, white sugar, and brown sugar. Beat in eggs one at a time, then stir in vanilla. Combine flour, baking soda, salt, and cinnamon; stir into the creamed mixture. Mix in oats. Cover, and chill dough for at least one hour.\n\n2. Preheat the oven to 375 degrees F (190 degrees C). Grease cookie sheets. Roll the dough into walnut sized balls, and place 2 inches apart on cookie sheets. Flatten each cookie with a large fork dipped in sugar.\n\n3. Bake for 8 to 10 minutes in preheated oven. Allow cookies to cool on baking sheet for 5 minutes before transferring to a wire rack to cool completely.'
	},
	{
		recipeId: 13,
		categoryId: 4,
		title: 'Pineapple Mango Smoothie',
		photo_url: 'https://www.ambitiouskitchen.com/wp-content/uploads/2019/08/Mango-Pineapple-Coconut-Smoothie-4-725x725.jpg',
		photosArray: [
			'https://www.ambitiouskitchen.com/wp-content/uploads/2019/08/Mango-Pineapple-Coconut-Smoothie-4-725x725.jpg',
			'https://i2.wp.com/www.primaverakitchen.com/wp-content/uploads/2017/06/PINEAPPLE-MANGO-MINT-SMOOTHIE-8.jpg',
			'https://valentinascorner.com/wp-content/uploads/2019/08/Mango-Smoothie-2.jpg',
			'https://delightfulplate.com/wp-content/uploads/2019/01/Tropical-Pineapple-Mango-Smoothie-2.jpg',
		],
		time: '5',
		ingredients: [
			[71, '1 cup '],
			[68, '1 small'],
			[74, '1 cup'],
			[73, '1 & 1/4 cups'],
		],
		description: '1. Put everything in the blender in the order that it is listed and blend until smooth. Easy peasy. Enjoy your taste of the tropics.'
	},
	{
		recipeId: 14,
		categoryId: 5,
		title: 'Pumpkin Spice Cookies',
		photo_url: 'https://www.justsotasty.com/wp-content/uploads/2016/09/Pumpkin-Cookies-5.jpg',
		photosArray: [
			'https://www.justsotasty.com/wp-content/uploads/2016/09/Pumpkin-Cookies-5.jpg',
			'https://i0.wp.com/www.livewellbakeoften.com/wp-content/uploads/2017/09/Pumpkin-Snickerdoodles.jpg?resize=1360%2C2040&ssl=1',
			'https://www.littlesweetbaker.com/wp-content/uploads/2017/10/pumpkin-spice-cookies-2-1.jpg',
			'https://i2.wp.com/suburbansimplicity.com/wp-content/uploads/2018/09/Pumpkin-Spice-Cookies-on-a-cake-stand.jpg',
		],
		time: '20',
		ingredients: [
			[49, '2 & 1/2 cups'],
			[55, '1 tsp'],
			[56, '2 tsp'],
			[57, '1/2 tsp'],
			[3, '1/2 tsp'],
			[2, '1/2 cup'],
			[33, '1 & 1/2 cups'],
			[58, '1/2 cup'],
			[1, '1 large'],
			[54, '1 tsp'],
		],
		description: '1. In a medium bowl, toss together the flour, baking soda, cinnamon, nutmeg and salt. Set aside.\n\n2. Using an electric mixer and in a large bowl, beat together the butter and sugar until well blended. Mix in the pumpkin puree, egg and vanilla until smooth.\n\n3. Slowly mix in the flour mixture until just combined. Cover and chill in the fridge for 1 hour or until the dough is firm enough to roll in your hands.\n\n4. Preheat oven to 350F. Line 2 baking sheets with parchment paper or silicone baking mat.\n\n5. Using a medium cookie scoop or tablespoon, roll out rounded cookie dough and generously coat in the cinnamon sugar mixture. Place 2 inches apart on prepared baking sheets.\n\n6. Bake for 10-12 minutes or until lightly browned on the bottoms. Let cool for 10 minutes before serving.'
	},
	{
		recipeId: 15,
		categoryId: 1,
		title: 'Scrambled Eggs',
		photo_url: 'https://www.thespruceeats.com/thmb/w5CXk2yMylJwBHxvrv13n1Y7Tqw=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/scrambled-eggs-58a701ac5f9b58a3c91cbebd.jpg',
		photosArray: [
			'https://www.thespruceeats.com/thmb/w5CXk2yMylJwBHxvrv13n1Y7Tqw=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/scrambled-eggs-58a701ac5f9b58a3c91cbebd.jpg',
			'https://assets.epicurious.com/photos/57b35f844924889253994109/master/pass/scrambled-eggs.jpg',
			'https://www.eggs.ca/assets/RecipePhotos/Simple-Scrambled-Eggs.jpg',
			'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Fluffy-Scrambled-Eggs_exps12235_SD143206C04_08_3bC_RMS.jpg',
		],
		time: '5',
		ingredients: [
			[1, '4 large'],
			[2, '1 tbsp'],
			[3, '1/4 tsp'],
			[4, '1/2 tsp'],
		],
		description: '1. In a medium mixing bowl, aggressively whisk together the eggs, salt, and pepper until the mixture is light and foamy, without any separate streaks of yolk or whites.\n\n2. Melt the butter in a small nonstick pan over medium heat, until the butter coats the whole pan and just starts to foam.\n\n3. Add the eggs to the center of the pan and immediately reduce the heat to medium-low.\n\n4. Wait for the edges to just barely start to set, then using a rubber spatula, gently push the eggs from one end of the pan to the other. Continue this process, pausing in between swipes to allow the uncooked egg to settle on the warm pan and cook, gently pushing the liquid to form the curds.\n\n5. When the eggs are mostly cooked, with big pillow-y folds, but still look pretty wet, slowly fold the eggs into itself just a couple times, bringing them together.\n\n6. Remove from the heat when the eggs still shimmer with some moisture.\n\n7. Transfer to serving plates.'
	},
	{
		recipeId: 16,
		categoryId: 3,
		title: 'Shrimp Quesadillas',
		photo_url: 'https://gimmedelicious.com/wp-content/uploads/2017/12/Shrimp-Quesadillas-4.jpg',
		photosArray: [
			'https://gimmedelicious.com/wp-content/uploads/2017/12/Shrimp-Quesadillas-4.jpg',
			'https://i2.wp.com/gimmedelicious.com/wp-content/uploads/2017/12/Shrimp-Quesadillas-9.jpg',
			'https://challengedairy.com/sites/default/files/recipe/images/recipe_shrimp_quesadillas_1.jpg',
			'https://hips.hearstapps.com/del.h-cdn.co/assets/16/38/1474585062-old-bay-shrimp-tacosl3.jpg',
		],
		time: '30',
		ingredients: [
			[59, '1/4 lb'],
			[44, '1/4 tsp'],
			[3, '1 pinch'],
			[4, '1 pinch'],
			[83, '1/2, juiced'],
			[9, '2 & 1/2 tsp'],
			[21, '1 tbsp, chopped'],
			[60, '1 tbsp, chopped'],
			[47, '2'],
			[7, '1/2 cup'],
			[48, '1/4, sliced'],
			[61, '1 dollop'],
		],
		description: '1. Heat 2 tablespoons vegetable oil in a large skillet over medium-high heat. Cook and stir onion, red bell pepper, and green bell pepper in the hot oil, stirring frequently, until onion is translucent and peppers are soft, 6 to 8 minutes.\n\n2. Stir salt, cumin, and chili powder into onion and bell peppers.\n\n3. Stir shrimp into onion and bell peppers and cook until shrimp are opaque and no longer pink in the center, 3 to 5 minutes.\n\n4. Remove skillet from heat; stir jalapeno pepper and lime juice into shrimp mixture.\n\n5. Heat a skillet over medium heat and brush with about 1 teaspoon vegetable oil.\n\n6. Place a tortilla in the hot oil. Spoon about 1/6 shrimp filling and 1/2 cup Mexican cheese blend on one side of tortilla. Fold tortilla in half.\n\n7. Cook until bottom of tortilla is lightly browned, about 5 minutes; flip and cook other side until lightly browned, 3 to 5 minutes. Repeat with remaining tortillas and filling.'
	},
	{
		recipeId: 17,
		categoryId: 2,
		title: 'Spaghetti Carbonara',
		photo_url: 'https://static01.nyt.com/images/2018/08/10/dining/carbonara-horizontal/carbonara-horizontal-mediumThreeByTwo440.jpg',
		photosArray: [
			'https://static01.nyt.com/images/2018/08/10/dining/carbonara-horizontal/carbonara-horizontal-mediumThreeByTwo440.jpg',
			'https://www.skinnytaste.com/wp-content/uploads/2019/10/Spaghetti-Carbonara-6-500x500.jpg',
			'https://s23209.pcdn.co/wp-content/uploads/2014/03/IMG_2622edit.jpg',
			'https://easyweeknight.com/wp-content/uploads/2019/02/spaghetti-carbonara4.jpg',
		],
		time: '30',
		ingredients: [
			[39, '8 oz'],
			[1, '2 large'],
			[7, '1/2 cup '],
			[24, '4 slices, diced'],
			[17, '1 tbsp'],
			[3, '1/2 tbsp'],
			[4, '1/2 tbsp'],
		],
		description: '1. In a large pot of boiling salted water, cook pasta according to package instructions; reserve 1/2 cup water and drain well.\n\n2. In a small bowl, whisk together eggs and Parmesan; set aside.\n\n3. Heat a large skillet over medium high heat. Add bacon and cook until brown and crispy, about 6-8 minutes; reserve excess fat.\n\n4. Stir in garlic until fragrant, about 1 minute. Reduce heat to low.\n\n5. Working quickly, stir in pasta and egg mixture, and gently toss to combine; season with salt and pepper, to taste. Add reserved pasta water, one tablespoon at a time, until desired consistency is reached.\n\n6. Serve immediately, garnished with parsley, if desired.'
	},
	{
		recipeId: 18,
		categoryId: 1,
		title: 'Steak & Eggs',
		photo_url: 'https://fthmb.tqn.com/It11ZpaFouQVLkO44Kw-f-Inme0=/steak-and-eggs-4780185-07-982c0559d1d34b71aa7136a207720c43.jpg',
		photosArray: [
			'https://fthmb.tqn.com/It11ZpaFouQVLkO44Kw-f-Inme0=/steak-and-eggs-4780185-07-982c0559d1d34b71aa7136a207720c43.jpg',
			'https://saucyrecipes.com/wp-content/uploads/2020/01/steakeggs.jpg',
			'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2009/4/14/1/FNM060109Grilling010_s4x3.jpg.rend.hgtvcom.826.620.suffix/1371589417475.jpeg',
			'https://indulgenteats.com/wp-content/uploads/2020/04/Breakfast-Steak-and-Eggs-Skillet-Caramelized-Onions-Recipe-Indulgent-Eats-min.jpg',
		],
		time: '25',
		ingredients: [
			[1, '4 large'],
			[10, '8 oz'],
			[3, '1 tbsp'],
			[9, '2 tbsp'],
			[4, '1 tbsp'],
			[14, '3/4 tbsp'],
			[2, '2 tbsp'],
			[42, '1 tbsp, chopped']

		],
		description: '1. Remove steak from refrigerator and let come to room temperature, 30 minutes. \n\n2. Rub steak with 1 tablespoon vegetable oil and season all over with 1 ½ teaspoon salt, 1 teaspoon pepper, and ¾ teaspoon paprika. \n\n3. Heat a medium cast iron skillet over medium-high heat. Add steak and cook, flipping once, until a deep golden crust begins to form on both sides of the steak, about 5 minutes total. \n\n4. Reduce heat to medium-low and add butter to pan. Using a kitchen towel, carefully grip the skillet handle and tilt towards you so that the melting butter forms a pool at the bottom of the skillet. Using a spoon, continually baste butter onto steak to form a deeper golden crust. Flip steak and repeat, 2 to 3 minutes in total. Using a meat thermometer, check for doneness: 120-125°F  for medium rare, 130°F for medium. \n\n5. Transfer steak onto a cutting board and let rest about 10 minutes. \n\n6. Meanwhile, heat remaining oil in a nonstick skillet over medium heat until shimmering. Crack egg into pan and cook 3 to 4 minutes, or until white is set and edges are just beginning to brown. Remove from pan and season with salt and pepper.\n\n7. Slice steak into 1" strips on a bias, against the grain. \n\n8. Serve steak with eggs and potatoes. Garnish with herbs and season with more salt, pepper, and paprika to taste.'
	},
	{
		recipeId: 19,
		categoryId: 4,
		title: 'Triple Berry Smoothie',
		photo_url: 'https://www.dinneratthezoo.com/wp-content/uploads/2017/01/mixed-berry-smoothie-2.jpg',
		photosArray: [
			'https://www.dinneratthezoo.com/wp-content/uploads/2017/01/mixed-berry-smoothie-2.jpg',
			'https://hips.hearstapps.com/hmg-prod/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png',
			'https://www.momables.com/wp-content/uploads/2020/10/triple-berry-smoothie-_recipe-card.jpg',
			'https://beamingbaker.com/wp-content/uploads/2017/05/IGT-Triple-Berry-Smoothie-5-Ingredient-Paleo-Vegan-Gluten-Free-Dairy-Free-1.5.jpg',
		],
		time: '5',
		ingredients: [
			[69, '1 cup'],
			[68, '1'],
			[70, '1 cup'],
			[71, '1 & 1/4 cups'],
			[72, '1/2 cup'],
		],
		description: '1. In a blender, combine all ingredients and blend until smooth.\n\n2. Divide between 2 cups and top with blackberries, if desired.'
	},
	{
		recipeId: 20,
		categoryId: 5,
		title: 'Vegan Cookies',
		photo_url: 'https://static01.nyt.com/images/2020/02/19/dining/em-vegan-cookie/em-vegan-cookie-articleLarge.jpg',
		photosArray: [
			'https://static01.nyt.com/images/2020/02/19/dining/em-vegan-cookie/em-vegan-cookie-articleLarge.jpg',
			'https://www.purelykaylie.com/wp-content/uploads/2020/03/Vegan-Chocolate-Chip-Cookies-27.jpg',
			'https://cookieandkate.com/images/2017/11/amazing-chocolate-chip-cookies-recipe-2.jpg',
			'https://yupitsvegan.com/wp-content/uploads/2018/02/vegan-chocolate-chip-cookies-classic-square.jpg',
		],
		time: '20',
		ingredients: [
			[33, '1/2 cup'],
			[62, '3/4 cup'],
			[3, '1 tsp'],
			[9, '1/2 cup'],
			[63, '1/4 cup'],
			[54, '1 tsp'],
			[49, '1 & 1/2 cups'],
			[55, '1/2 tsp'],
			[64, '6 oz'],
		],
		description: '1. In a large bowl, whisk together the sugar, brown sugar, salt, and coconut oil until combined.\n\n2. Whisk in non-dairy milk and vanilla, until all sugar has dissolved and the batter is smooth.\n\n3. Sift in the flour and baking soda, then fold the mixture with a spatula, being careful not to overmix.\n\n4. Fold in the chocolate chunks evenly.\n\n5. Chill the dough for at least 30 minutes.\n\n6. Preheat oven to 350°F (180°C).\n\n7. Scoop the dough with an ice cream scoop onto a parchment paper-lined baking sheet. Be sure to leave at least 2 inches of space between cookies and the edges of the pan so cookies can spread evenly.\n\n8. Bake for 12-15 minutes, or until cookies just begin to brown.\n\n9. Cool completely and enjoy!'
	},
];

// INGREDIENTS ARRAY
export const ingredients = [
	{
		ingredientId: 1,
		name: 'Eggs',
		photo_url: 'https://stockarch.com/files/13/09/eggs_and_whisk.jpg'
	},
	{
		ingredientId: 2,
		name: 'Butter',
		photo_url: 'https://flavorpourfection.com/wp-content/uploads/2014/12/butter.jpeg'
	},
	{
		ingredientId: 3,
		name: 'Salt',
		photo_url: 'https://image.freepik.com/free-photo/sea-salt-wooden-bowl-isolated-white-background_29402-416.jpg'
	},
	{
		ingredientId: 4,
		name: 'Black Pepper',
		photo_url: 'https://stamboulbazaar.com/image/cache/catalog/Product/Baharatlar/turkish-black-pepper-spice-ground-700x700.jpg'
	},
	{
		ingredientId: 5,
		name: 'English Muffin',
		photo_url: 'https://www.biggerbolderbaking.com/wp-content/uploads/2019/03/No-knead-English-Muffins-Website-Thumbnail.jpg'
	},
	{
		ingredientId: 6,
		name: 'Ham',
		photo_url: 'https://previews.123rf.com/images/magone/magone1308/magone130800111/21377873-pork-ham-slices-on-white-background.jpg'
	},
	{
		ingredientId: 7,
		name: 'Shredded Cheese',
		photo_url: 'https://i1.wp.com/www.eatthis.com/wp-content/uploads/2020/06/shredded-cheese.jpg?resize=640%2C360&ssl=1'
	},
	{
		ingredientId: 8,
		name: 'Chives',
		photo_url: 'https://hosstools.com/wp-content/uploads/2020/10/garlic-chives-scaled-5.jpg'
	},
	{
		ingredientId: 9,
		name: 'Oil',
		photo_url: 'https://cdn.shopify.com/s/files/1/0923/5524/products/olive-oils_2048x.jpeg?v=1587506257'
	},
	{
		ingredientId: 10,
		name: 'Steak',
		photo_url: 'https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_740,w_1100/v1555273699/shape/mentalfloss/istock-505207430.jpg'
	},
	{
		ingredientId: 11,
		name: 'Russet Potatoes',
		photo_url: 'https://chefsmandala.com/wp-content/uploads/2018/03/Potato-Brown.jpg'
	},
	{
		ingredientId: 12,
		name: 'Clarified Butter',
		photo_url: 'https://www.culinaryhill.com/wp-content/uploads/2016/12/How-to-Make-Clarified-Butter-Culinary-Hill-4.jpg'
	},
	{
		ingredientId: 13,
		name: 'Cayenne Pepper',
		photo_url: 'https://post.greatist.com/wp-content/uploads/2020/09/benefits-cayenne-pepper-732x549-thumbnail-732x549.jpg'
	},
	{
		ingredientId: 14,
		name: 'Paprika',
		photo_url: 'https://post.healthline.com/wp-content/uploads/2020/08/paprika-benefits-1200x628-facebook-1200x628.jpg'
	},
	{
		ingredientId: 15,
		name: 'Pizza Dough',
		photo_url: 'https://www.onceuponachef.com/images/2020/06/Pizza-Dough-scaled.jpg'
	},
	{
		ingredientId: 16,
		name: 'Hot Sauce',
		photo_url: 'https://images-na.ssl-images-amazon.com/images/I/61Jb1FfY4oL._SX522_.jpg'
	},
	{
		ingredientId: 17,
		name: 'Garlic Powder',
		photo_url: 'https://mazkart.com/wp-content/uploads/2019/08/93259252-garlic-powder-is-ground-dehydrated-garlic-it-s-a-common-seasoning-for-pasta-pizza-and-grilled-chicke.jpg'
	},
	{
		ingredientId: 18,
		name: 'Shredded Cooked Chicken',
		photo_url: 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/01/Shredded-Chicken-12.jpg'
	},
	{
		ingredientId: 19,
		name: 'Mozzarella',
		photo_url: 'https://www.zingermanscreamery.com/app/uploads/2018/04/zing-creamery-285-2000x1331.jpg'
	},
	{
		ingredientId: 20,
		name: 'Blue Cheese',
		photo_url: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1142818162%2F960x0.jpg'
	},
	{
		ingredientId: 21,
		name: 'Red Onion',
		photo_url: 'https://www.simplyrecipes.com/wp-content/uploads/2009/01/how-to-slice-onion-horiz-a2-1800.jpg'
	},
	{
		ingredientId: 22,
		name: 'Green Onion',
		photo_url: 'https://i5.walmartimages.com/asr/5af56fe3-27ea-4c78-9d3f-74f0fdecfcff_1.1f4e7886b6e329ccb374d9e3fa675e45.jpeg'
	},
	{
		ingredientId: 23,
		name: 'Shredded Cooked Chicken',
		photo_url: 'https://image.shutterstock.com/image-photo/heap-pulled-chicken-meat-on-600w-1681941631.jpg'
	},
	{
		ingredientId: 24,
		name: 'Bacon',
		photo_url: 'https://thenovicechefblog.com/wp-content/uploads/2012/01/How-to-cook-bacon-in-the-oven-1-sm-720x405.jpg'
	},
	{
		ingredientId: 25,
		name: 'Lasagna',
		photo_url: 'https://i.pinimg.com/originals/33/8f/bb/338fbbe2b95c07bf6e575bb2853c86f7.jpg'
	},
	{
		ingredientId: 26,
		name: 'Italian Sausage',
		photo_url: 'https://www.spendwithpennies.com/wp-content/uploads/2019/11/How-to-Cook-Italian-Sausage-SpendWithPennies-6-500x500.jpg'
	},
	{
		ingredientId: 27,
		name: 'Ground Beef',
		photo_url: 'https://justcook.butcherbox.com/wp-content/uploads/2019/06/ground-beef-800x500.jpg'
	},
	{
		ingredientId: 28,
		name: 'White Onion',
		photo_url: 'https://honestandtruly.com/wp-content/uploads/2018/10/Pile-of-diced-onion.jpg'
	},
	{
		ingredientId: 29,
		name: 'Garlic',
		photo_url: 'https://www.jessicagavin.com/wp-content/uploads/2019/09/how-to-mince-garlic-3-1200.jpg'
	},
	{
		ingredientId: 30,
		name: 'Tomato Sauce',
		photo_url: 'https://www.seriouseats.com/recipes/images/2014/09/20140919-easy-italian-american-red-sauce-vicky-wasik-19-1500x1125.jpg'
	},
	{
		ingredientId: 31,
		name: 'Tomato Paste',
		photo_url: 'https://thethingswellmake.com/wp-content/uploads/2016/11/225-easy-homemade-tomato-paste-recipe-4.jpg'
	},
	{
		ingredientId: 32,
		name: 'Italian Seasoning',
		photo_url: 'https://www.culinaryhill.com/wp-content/uploads/2018/02/Italian-Seasoning-Recipe-Culinary-Hill-square.jpg'
	},
	{
		ingredientId: 33,
		name: 'Sugar',
		photo_url: 'https://www.lark.com/wp-content/uploads/2020/01/thumb_blog-114.jpg'
	},
	{
		ingredientId: 34,
		name: 'Basil',
		photo_url: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/266425_2200-732x549.jpg'
	},
	{
		ingredientId: 35,
		name: 'Ricotta',
		photo_url: 'https://www.yellowthyme.com/wp-content/uploads/2018/04/DSC_0160-e1524846317476.jpg'
	},
	{
		ingredientId: 36,
		name: 'Parmesan',
		photo_url: 'https://loveincstatic.blob.core.windows.net/lovefood/2020/updated-Parmesan-guide/grated-block-parmesan1.jpg'
	},
	{
		ingredientId: 37,
		name: 'Egg Yolks',
		photo_url: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/separating-eggs-7aef112.jpg'
	},
	{
		ingredientId: 38,
		name: 'Pecorino Romano',
		photo_url: 'https://www.murrayscheese.com/site/images/items/20018900000.0.jpg'
	},
	{
		ingredientId: 39,
		name: 'Spaghetti',
		photo_url: 'https://previews.123rf.com/images/maksvil/maksvil1801/maksvil180100151/93879805-uncooked-pasta-spaghetti-macaroni-isolated-on-white-background.jpg'
	},
	{
		ingredientId: 40,
		name: 'Fettuccine',
		photo_url: 'https://www.thespruceeats.com/thmb/vXq41greClqp8Rr7bob1QxsbbCs=/2224x1668/smart/filters:no_upscale()/fettuccine-2500-56a20fa45f9b58b7d0c625eb.jpg'
	},
	{
		ingredientId: 41,
		name: 'Heavy Cream',
		photo_url: 'https://www.myfrugalhome.com/wp-content/uploads/2020/01/heavywhippingcream1200.jpg'
	},
	{
		ingredientId: 42,
		name: 'Parsley',
		photo_url: 'https://www.italianfoodforever.com/wp-content/uploads/2011/10/parsley.jpg'
	},
	{
		ingredientId: 43,
		name: 'Tilapia',
		photo_url: 'https://eadn-wc05-1226394.nxedge.io/cdn/media/catalog/product/cache/6bd6bc90948058f1c179c773d53c57be/0/2/024015400000_01_1.jpg'
	},
	{
		ingredientId: 44,
		name: 'Chilli Powder',
		photo_url: 'https://www.daringgourmet.com/wp-content/uploads/2019/01/Chili-Powder-1-square-edited.jpg'
	},
	{
		ingredientId: 45,
		name: 'Cumin',
		photo_url: 'https://www.jessicagavin.com/wp-content/uploads/2019/05/cumin-4-1200.jpg'
	},
	{
		ingredientId: 46,
		name: 'Oregano',
		photo_url: 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/oregano-flakes-spoon-1296x728.jpg'
	},
	{
		ingredientId: 47,
		name: 'Tortilla',
		photo_url: 'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Homemade-Tortillas_EXPS_CIW19_48431_B08_30_7b.jpg'
	},
	{
		ingredientId: 48,
		name: 'Avocado',
		photo_url: 'https://simplot-media.azureedge.net/-/media/feature/simplotfoods/components/marketing/product-category-content-images/promoblocks_avocados_slices.jpg'
	},
	{
		ingredientId: 49,
		name: 'Flour',
		photo_url: 'https://www.thespruceeats.com/thmb/QMdD-WQCT6QvYPYpnsrGUjBL_0c=/1500x1000/filters:fill(auto,1)/how-to-make-self-rising-flour-3034165-Hero-5b96e1e5c9e77c0050013d6c.jpg'
	},
	{
		ingredientId: 50,
		name: 'Cocoa Powder',
		photo_url: 'https://cdn.shopify.com/s/files/1/0288/4229/5375/products/Organic-Raw-Cacao-Powder.jpg?v=1593133767'
	},
	{
		ingredientId: 51,
		name: 'Powdered Sugar',
		photo_url: 'https://www.biggerbolderbaking.com/wp-content/uploads/2016/09/IMG_7428-500x375.jpg'
	},
	{
		ingredientId: 52,
		name: 'Chocolate Chips',
		photo_url: 'https://cdn.shopify.com/s/files/1/1754/2717/products/chips_milk_pile_530x.png?v=1575245633'
	},
	{
		ingredientId: 53,
		name: 'Water',
		photo_url: 'https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_800,h_1200/https://www.savingdessert.com/wp-content/uploads/2019/11/Baking-Tips-10-800x1200.jpg'
	},
	{
		ingredientId: 54,
		name: 'Vanilla Extract',
		photo_url: 'https://woodlandfoods.com/img/WF_Images/OH411-organic-bourbon-madagascar-vanilla-extract-main.jpg'
	},
	{
		ingredientId: 55,
		name: 'Baking Soda',
		photo_url: 'https://nuts.com/images/rackcdn/ed910ae2d60f0d25bcb8-80550f96b5feb12604f4f720bfefb46d.ssl.cf1.rackcdn.com/1a623b2bd5834284-nucJJT66-zoom.jpg'
	},
	{
		ingredientId: 56,
		name: 'Cinnamon',
		photo_url: 'https://images.immediate.co.uk/production/volatile/sites/30/2016/08/Cinnamon-sticks-and-ground-cinnamon-2a732e4.jpg?quality=45&resize=768,574'
	},
	{
		ingredientId: 57,
		name: 'Nutmeg',
		photo_url: 'https://foodal.com/wp-content/uploads/2015/02/Everything-You-Ever-Wanted-To-Know-About-Nutmeg.jpg'
	},
	{
		ingredientId: 58,
		name: 'Pumpkin Puree',
		photo_url: 'https://baking-ginger.com/wp-content/uploads/2015/09/IMG_0600.jpg'
	},
	{
		ingredientId: 59,
		name: 'Shrimp',
		photo_url: 'https://atlaswholesalefood.com/wp-content/uploads/2020/04/73246.jpg'
	},
	{
		ingredientId: 60,
		name: 'Cilantro',
		photo_url: 'https://www.cookforyourlife.org/wp-content/uploads/2018/08/shutterstock_224264125-min.jpg'
	},
	{
		ingredientId: 61,
		name: 'Sour Cream',
		photo_url: 'https://www.marilynstreats.com/wp-content/uploads/2020/04/How-To-Make-Homemade-Sour-Cream.jpeg'
	},
	{
		ingredientId: 62,
		name: 'Brown Sugar',
		photo_url: 'https://images-na.ssl-images-amazon.com/images/I/81l4fWMK9ML._SX569_.jpg'
	},
	{
		ingredientId: 63,
		name: 'Non-Dairy Milk',
		photo_url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/almond-milk-1557871919.jpg'
	},
	{
		ingredientId: 64,
		name: 'Vegan Chocolate Chips',
		photo_url: 'https://images-na.ssl-images-amazon.com/images/I/81RtBL6V%2B7L._SL1500_.jpg'
	},
	{
		ingredientId: 65,
		name: 'Chicken Breasts',
		photo_url: 'https://previews.123rf.com/images/mg7/mg71103/mg7110300028/9003678-uncooked-chicken-breast.jpg'
	},
	{
		ingredientId: 66,
		name: 'White Rice',
		photo_url: 'https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=%5B900%2C506%5D&w=1800&h=942&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F23%2F2009%2F03%2F17%2Flong-grain-white-rice-gettyimages-806770568.jpg'
	},
	{
		ingredientId: 67,
		name: 'Chicken Stock',
		photo_url: 'https://steelehousekitchen.com/wp-content/uploads/2011/02/chicken_broth__isms.jpg'
	},
	{
		ingredientId: 68,
		name: 'Banana',
		photo_url: 'https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-320-80.jpg'
	},
	{
		ingredientId: 69,
		name: 'Frozen Strawberries',
		photo_url: 'https://previews.123rf.com/images/artcookstudio/artcookstudio1708/artcookstudio170800190/83922813-frozen-strawberries-on-white-background.jpg'
	},
	{
		ingredientId: 70,
		name: 'Frozen Blackberries',
		photo_url: 'https://www.thespruceeats.com/thmb/GIve1l2ui7QbQbN3nP_ZwcZepYY=/2274x1514/filters:fill(auto,1)/frozen-blackberries-on-table-803763176-5bf5889b46e0fb00510b223a.jpg'
	},
	{
		ingredientId: 71,
		name: 'Almond Milk',
		photo_url: 'https://detoxinista.com/wp-content/uploads/2010/11/how-to-make-almond-milk-500x500.jpg'
	},
	{
		ingredientId: 72,
		name: 'Greek Yogurt',
		photo_url: 'https://www.liveeatlearn.com/wp-content/uploads/2015/11/how-to-make-greek-yogurt-social.jpg'
	},
	{
		ingredientId: 73,
		name: 'Frozen Pineapple',
		photo_url: 'https://www.reliantfoods.com/image/cache/data/pineapple%20chunks-500x500.jpg'
	},
	{
		ingredientId: 74,
		name: 'Frozen Mango',
		photo_url: 'https://cdnimg.webstaurantstore.com/images/products/large/430474/1663145.jpg'
	},
	{
		ingredientId: 75,
		name: 'Light Coconut Milk',
		photo_url: 'https://images-na.ssl-images-amazon.com/images/I/91uwE1J5iZL._SL1500_.jpg'
	},
	{
		ingredientId: 76,
		name: 'Milk',
		photo_url: 'https://static.scientificamerican.com/sciam/cache/file/A9E4C1EB-4BBC-48D2-88CFA877B19815CE_source.jpg'
	},
	{
		ingredientId: 77,
		name: 'Peanut Butter',
		photo_url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/peanut-butter-vegan-1556206811.jpg'
	},
	{
		ingredientId: 78,
		name: 'Honey',
		photo_url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-183354852-1558479028.jpg'
	},
	{
		ingredientId: 79,
		name: 'Ice Cubes',
		photo_url: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/10/15/0/fnd_Ice-Cubes-thinkstock.jpg.rend.hgtvcom.406.305.suffix/1413404558868.jpeg'
	},
	{
		ingredientId: 80,
		name: 'Spinach',
		photo_url: 'https://www.jessicagavin.com/wp-content/uploads/2020/01/how-to-cook-spinach-10-1200-500x500.jpg'
	},
	{
		ingredientId: 81,
		name: 'Cooking Oats',
		photo_url: 'https://www.bobsredmill.com/wpwp-content/uploads/2018/03/shutterstock_653741836-e1544812582171.jpg'
	},
	{
		ingredientId: 82,
		name: 'Refined Coconut Oil',
		photo_url: 'https://images-na.ssl-images-amazon.com/images/I/71IrbIo%2BwtL._SL1500_.jpg'
	},
	{
		ingredientId: 83,
		name: 'Lime',
		photo_url: 'https://cdn.shopify.com/s/files/1/2336/3219/products/bearss_large_x850.jpg?v=1570635019'
	},
	{
		ingredientId: 84,
		name: 'Bell Peppers',
		photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Green-Yellow-Red-Pepper-2009.jpg/1200px-Green-Yellow-Red-Pepper-2009.jpg'
	},
];