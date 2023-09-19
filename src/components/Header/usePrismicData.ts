import {useSinglePrismicDocument} from "@prismicio/react";

export function usePrismicData() {
  const [document] = useSinglePrismicDocument('header');
  if (!document) {
    return {};
  }

  const products = document.data.products.map((product) => ({
    name: product.productname,
    url: product.producturl,
  }))
  console.log('products', products);

  const slices = [ ...document.data.slices ];
  slices.shift();

  const socials = slices.pop().items.map((item) => ({
    img: item.navitemimg,
    url: item.navitemurl,
  }));

  console.log('socials', socials);

  const submenus = slices.map((slice) => {
    const content = slice.items.map((item) => ({
      name: item.navitemlabel,
      url: item.navitemurl,
    }))
    return {
      name: slice.primary.navlabel,
      content,
    }
  })

  console.log('submenus', submenus);

  return {
    products,
    socials,
    submenus,
  }

}
