// Demo book content. Recipes written by Clare for this demo (standard home-cooking methods),
// not taken from any creator. Quantities are per the "serves" value.
window.BOOK = {
  title: "Weeknight Table",
  sub: "Weeknight dinners, big-pot soups and make-ahead breakfasts you can actually pull off on a Tuesday.",
  by: "A demo book by Bill Deyegbe",
  recipes: [
    {
      id: "chicken",
      title: "Sheet-Pan Lemon Garlic Chicken and Potatoes",
      short: "Lemon Garlic Chicken",
      blurb: "One pan, crisp skin, potatoes that soak up every drop.",
      serves: 4, prep: 10, cook: 50, oven: "425°F (220°C)",
      tags: ["Gluten-free", "Dairy-free", "One pan"],
      photo: "img/chicken.jpg", tone: "#c9822f",
      ing: [
        { q: 8, u: "", n: "bone-in, skin-on chicken thigh", p: "bone-in, skin-on chicken thighs", w: 2.5, a: "Meat" },
        { q: 1.5, u: "lb", n: "baby potatoes, halved", a: "Produce" },
        { q: 3, u: "tbsp", n: "olive oil, divided", a: "Pantry" },
        { q: 4, u: "", n: "garlic clove, minced", p: "garlic cloves, minced", a: "Produce" },
        { q: 1, u: "", n: "lemon, zested and juiced", p: "lemons, zested and juiced", a: "Produce" },
        { q: 1, u: "tsp", n: "dried oregano", a: "Pantry" },
        { q: 1.5, u: "tsp", n: "kosher salt, divided", a: "Pantry" },
        { q: 0.5, u: "tsp", n: "black pepper", a: "Pantry" },
        { q: 2, u: "tbsp", n: "chopped parsley (optional)", a: "Produce" }
      ],
      steps: [
        "Heat the oven to 425°F (220°C). Toss the potatoes with a third of the oil and a third of the salt on a large sheet pan. Roast for 15 minutes.",
        "While they roast, pat the chicken dry. Mix the rest of the oil with the garlic, lemon zest, oregano, the remaining salt and the pepper. Rub it over and under the skin.",
        "Push the potatoes to the edges and lay the chicken in the middle, skin side up. Roast 30-35 minutes, until the skin is deep golden and the thickest thigh reads 175°F.",
        "Squeeze the lemon juice over everything, scatter the parsley and serve straight from the pan."
      ],
      tip: "Dry skin is crisp skin. Pat the thighs dry and don't crowd the pan. Cooking for 6 or more? Use two sheet pans."
    },
    {
      id: "soup",
      title: "Creamy Tomato and White Bean Soup",
      short: "Tomato White Bean Soup",
      blurb: "Pantry cans, one pot, and it tastes like it simmered all day.",
      serves: 4, prep: 10, cook: 25, oven: "Stovetop",
      tags: ["Vegetarian", "Gluten-free", "Freezer-friendly"],
      photo: "img/soup.jpg", tone: "#b8432c",
      ing: [
        { q: 2, u: "tbsp", n: "olive oil", a: "Pantry" },
        { q: 1, u: "", n: "yellow onion, diced", p: "yellow onions, diced", a: "Produce" },
        { q: 3, u: "", n: "garlic clove, minced", p: "garlic cloves, minced", a: "Produce" },
        { q: 1, u: "tsp", n: "Italian seasoning", a: "Pantry" },
        { q: 1, u: "can", n: "crushed tomatoes (28 oz)", a: "Pantry" },
        { q: 2, u: "cans", n: "cannellini beans (15 oz each), drained and rinsed", a: "Pantry" },
        { q: 3, u: "cups", n: "vegetable broth", a: "Pantry" },
        { q: 0.5, u: "cup", n: "heavy cream (optional)", a: "Dairy" },
        { q: 2, u: "cups", n: "baby spinach", a: "Produce" },
        { q: 0, u: "", n: "salt and pepper, to taste", a: "Pantry" }
      ],
      steps: [
        "Warm the oil in a large pot over medium heat. Cook the onion until soft, 5-6 minutes. Add the garlic and Italian seasoning and stir for 1 minute.",
        "Add the tomatoes, beans and broth. Bring to a boil, then simmer for 15 minutes.",
        "Blend about a third of the soup with an immersion blender, or ladle a third into a blender (lid vented, towel on top) and stir it back in. This makes it thick without much cream.",
        "Stir in the cream and spinach until the spinach wilts, 1-2 minutes. Season with salt and pepper."
      ],
      tip: "Freeze it before adding the cream and spinach. Add both when you reheat."
    },
    {
      id: "oats",
      title: "Make-Ahead Overnight Oats",
      short: "Overnight Oats",
      blurb: "Five jars on Sunday, breakfast sorted until Friday.",
      serves: 1, prep: 5, cook: 0, oven: "No cook",
      tags: ["Vegetarian", "Meal prep", "No cook"],
      photo: "img/oats.jpg", tone: "#7a6a9e",
      ing: [
        { q: 0.5, u: "cup", n: "rolled oats", a: "Pantry" },
        { q: 0.5, u: "cup", n: "milk, any kind", a: "Dairy" },
        { q: 0.25, u: "cup", n: "plain Greek yogurt", a: "Dairy" },
        { q: 1, u: "tbsp", n: "chia seeds", a: "Pantry" },
        { q: 1, u: "tsp", n: "maple syrup", a: "Pantry" },
        { q: 0, u: "", n: "pinch of salt", a: "Pantry" },
        { q: 0.5, u: "cup", n: "berries or sliced fruit, to serve", a: "Produce" }
      ],
      steps: [
        "Stir the oats, milk, yogurt, chia, maple syrup and salt together in a jar, one jar per serving.",
        "Cover and refrigerate for at least 4 hours, or overnight.",
        "Top with fruit when you serve. Covered jars keep in the fridge for up to 4 days."
      ],
      tip: "Too thick in the morning? Stir in a splash of milk."
    }
  ]
};
