import Head from "next/head";
// import products from "../../products.json";
import { imageToUrl, API_URL } from "../../utils/urls";
import { twoDecimals } from "../../utils/format";
import BuyButton from "../../components/BuyButton";

// const product = products[0];

const Product = ({ product }) => {
  return (
    <>
      <Head>
        {product.meta_title && <title>{product.meta_title}</title>}{" "}
        {product.meta_description && (
          <meta name="description" content={product.meta_description} />
        )}
      </Head>
      <h3>{product.name}</h3>
      <img src={imageToUrl(product.image)} />
      <h3>{product.name}</h3>
      <p>
        ${twoDecimals(product.price)}
        <BuyButton product={product} />
      </p>
      <p>{product.content}</p>
    </>
  );
};

export async function getStaticProps({ params: { slug } }) {
  const product_res = await fetch(`${API_URL}/products/?slug=${slug}`);
  const found = await product_res.json();

  return {
    props: {
      product: found[0], //Because APi response for filters is an array
    },
  };
}

export async function getStaticPaths() {
  //Retrieve all possible paths
  const product_res = await fetch(`${API_URL}/products`);
  const products = await product_res.json();

  //Return them to NextJs contex
  return {
    paths: products.map((product) => ({
      params: { slug: String(product.slug) },
    })),
    fallback: false, // Tells to NextJs to show 404 if params is not found
  };
}

export default Product;
