import LacfreeAmeixa from "./LacfreeAmeixa.jpg";
import LacfreeCalabresa from "./LacfreeCalabresa.jpeg";
import LacfreeStandard from "./LacfreeStandard.jpg";
import SaltyCalabresa from "./SaltyCalabresa.jpg";
import SaltyIntegral from "./SaltyIntegral.jpg";
import SaltyStandard from "./SaltyStandard.jpg";
import SweetCocoCrumbleMaca from "./SweetCocoCrumbleMaca.jpg";
import SweetFrutasVermelhas from "./SweetFrutasVermelhas.jpg";
import SweetGotasChocolate from "./SweetGotasChocolate.jpg";
import TinyAmoraMaca from "./TinyAmoraMaca.jpg";
import TinyFolheado from "./TinyFolheado.png";
import TinyGotasChocolate from "./TinyGotasChocolate.jpg";
import TinyLimao from "./TinyLimao.jpg";
import VeganAustraliano from "./VeganAustraliano.jpg";
import VeganEspinafreRicota from "./VeganEspinafreRicota.jpg";
import VeganPistache from "./VeganPistache.jpg";

export const BakeryProducts = [
  {
    name: 'Dalilo Original Roll',
    description: 'Natural fermentation roll, made with a lot of love and long hours of maturation. The result is a bread full of flavor, with a soft crumb and a crunchy crust.',
    price: 120,
    image: SaltyStandard,
    id: 'daliloStandard-38d8',
    categories: ['salty'],
  },
  {
    name: 'Caramelized Calabresa',
    description: 'Natural fermentation roll, filled with calabresa sausage and caramelized onions, mozzarella cheese, and catupiry cheese.',
    price: 150,
    image: SaltyCalabresa,
    id: 'saltyCalabresa-dh3i',
    categories: ['salty'],
  },
  {
    name: 'Whole Wheat Dalilo Roll',
    description: 'Natural fermentation roll, made with a lot of love and long hours of maturation, adding a custom selection of 12 grains to the standard recipe.',
    price: 130,
    image: SaltyIntegral,
    id: 'saltyIntegral-ir8g',
    categories: ['salty'],
  },
  {
    name: 'Lactose-Free with Plum',
    description: 'Roll filled with plums, made with long hours of maturation, a lot of love, and care for our customers seeking lactose-free items.',
    price: 160,
    image: LacfreeAmeixa,
    id: 'lacfreeAmeixa-3ab5',
    categories: ['lacfree', 'vegan', 'salty'],
  },
  {
    name: 'Lactose-Free with Calabresa',
    description: 'Roll filled with calabresa, made with long hours of maturation, a lot of love, and care for our customers seeking lactose-free items.',
    price: 160,
    image: LacfreeCalabresa,
    id: 'lacfreeCalabresa-v4d1',
    categories: ['lacfree', 'salty'],
  },
  {
    name: 'Original Dalilo Lactose-Free',
    description: 'Natural fermentation roll, long hours of maturation, a lot of love, and care for our customers seeking lactose-free items.',
    price: 130,
    image: LacfreeStandard,
    id: 'lacfreeStandard-gas5',
    categories: ['lacfree', 'vegan', 'salty'],
  },
  {
    name: 'Coconut with Apple Crumble',
    description: 'Natural fermentation coconut roll, made with a lot of love, care, and topped with apple crumble.',
    price: 160,
    image: SweetCocoCrumbleMaca,
    id: 'sweetCocoCrumbleMaca-d31g',
    categories: ['sweet'],
  },
  {
    name: 'Dalilo with Red Fruits',
    description: 'Natural fermentation roll, made with a lot of love, care, and filled with red fruit jam and powdered sugar.',
    price: 180,
    image: SweetFrutasVermelhas,
    id: 'sweetFrutasVermelhas-la1s',
    categories: ['sweet'],
  },
  {
    name: 'Dalilo with Chocolate Chips',
    description: 'Natural fermentation roll, made with a lot of love, care, and filled with chocolate chips and powdered sugar.',
    price: 75,
    image: SweetGotasChocolate,
    id: 'sweetGotasChocolate-h5k2',
    categories: ['sweet'],
  },
  {
    name: 'Mini Roll with Apple and Blackberry',
    description: 'Mini apple roll, made with a lot of love, care, and filled with blackberries.',
    price: 80,
    image: TinyAmoraMaca,
    id: 'tinyAmoraMaca-gk6s',
    categories: ['tiny', 'sweet'],
  },
  {
    name: 'Mini Puff Pastry Roll',
    description: 'Mini Dalilo Puff Pastry Roll, made with a lot of love, care, and land butter.',
    price: 80,
    image: TinyFolheado,
    id: 'tinyFolheado',
    categories: ['tiny', 'salty'],
  },
  {
    name: 'Dalilo Chocolate Cookies',
    description: 'Family recipe from Dalilo, a traditional cookie with Belgian chocolate chips.',
    price: 80,
    image: TinyGotasChocolate,
    id: 'tinyGotasChocolate-cbf3',
    categories: ['tiny', 'sweet'],
  },
  {
    name: 'Mini Roll with Lemon and Almonds',
    description: 'Natural fermentation mini roll, filled with lemon cream and topped with almond shavings.',
    price: 100,
    image: TinyLimao,
    id: 'tinyLimao-cg12',
    categories: ['tiny', 'sweet'],
  },
  {
    name: 'Vegan Australian Roll',
    description: 'Australian Dalilo roll, made with natural fermentation, a lot of love, and care for our customers seeking vegan/lactose-free products.',
    price: 160,
    image: VeganAustraliano,
    id: 'veganAustraliano-aj9v',
    categories: ['vegan', 'lacfree', 'salty'],
  },
  {
    name: 'Ricotta and Spinach Roll',
    description: 'Vegan Dalilo roll made with natural fermentation, filled with ricotta cream with spinach.',
    price: 75,
    image: VeganEspinafreRicota,
    id: 'veganEspinafreRicota-k12d',
    categories: ['vegan', 'salty'],
  },
  {
    name: 'Vegan Pistachio Roll',
    description: 'Vegan Dalilo roll made with natural fermentation, a lot of love, care, and pistachio shavings.',
    price: 75,
    image: VeganPistache,
    id: 'veganPistache-l1po',
    categories: ['vegan', 'salty'],
  },
];
