export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

export const MAGIC_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY || "pk_test_E84C138090556B02";

export const STRIPE_PK =
  process.env.NEXT_PUBLIC_STRIPE_PK ||
  "pk_test_51Iy9E4EilfbAt0XjDXcLl0oYhWbl9sZRJkcj7Xp291TFF4EcPg6vQFVXdRXjzySX1ndZVp4oS168WXuVNyssg6oe001IA2UEXJ";

/**
 * works for local and deployed strapis
 * *@param{any} image
 * */
export const imageToUrl = (image) => {
  if (!image) {
    return "./vercel.svg";
  }
  if (image.url.indexOf("/") === 0) {
    return `${API_URL}${image.url}`;
  }

  return image.url;
};
