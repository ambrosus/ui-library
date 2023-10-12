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

  const slices = [ ...document.data.slices ];
  slices.shift();

  const socials = slices.pop().items.map((item) => ({
    img: item.navitemimg,
    url: item.navitemlink.url,
    target: item.navitemlink.target,
  }));


  const submenus = slices.map((slice) => {
    const content = slice.items.map((item) => ({
      name: item.navitemlabel,
      url: item.navitemlink.url,
      target: item.navitemlink.target,
    }))
    return {
      name: slice.primary.navlabel,
      content,
    }
  })


  return {
    products,
    socials,
    submenus,
  }
}
