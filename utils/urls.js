export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

export const MAGIC_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY || "pk_test_E84C138090556B02";

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
