"use client";
import { useCallback, useEffect, useState } from "react";
import { getProductsById, getProductsByTags } from "@/actions/data";
import { Product } from "@/types";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  Facebook,
  Heart,
  Linkedin,
  Mail,
  Minus,
  Plus,
  Twitter,
} from "lucide-react";
import { ProductCard } from "./custom/product-card";
import { addToCart } from "@/actions/create";
import { toast } from "sonner";

export default function ProductDetail() {
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [isInCart, setIsInCart] = useState(false);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const singleProduct = await getProductsById(params.id as string);
        const relatedProducts = await getProductsByTags(
          product?.tags?.[0] as string
        );
        setRelatedProducts(relatedProducts.products);
        setProduct(singleProduct);
        if (singleProduct?.image_url?.length > 0) {
          setSelectedImage(singleProduct.image_url[0]);
        }
      } catch (error) {
        console.error("Failed to fetch product", error);
      }
    };
    fetchData();
  }, [params.id]);

  const handleAddToCart = useCallback(async () => {
    try {
      const response = await addToCart(params.id as string);
      if (params.id as string) {
        setIsInCart(true);
        toast.success("Product added to cart!");
      } else {
        throw new Error("Failed to add product to cart");
      }
    } catch (error) {
      setIsInCart(false);
      toast.error("Failed to add product to cart!");
    }
  }, [params.id as string]);

  if (!product || !selectedImage) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-wrap gap-10 p-6">
      <div className="flex gap-8 max-w-[573px] w-full">
        <div className="flex flex-col gap-4">
          {product.image_url.map((url, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(url)}
              className={`cursor-pointer border-2 rounded-md ${
                selectedImage === url
                  ? "border-green-500"
                  : "border-transparent"
              }`}
            >
              <Image
                src={url}
                alt={`${product.product_name} - ${index}`}
                width={100}
                height={100}
                priority
                className="object-contain"
              />
            </div>
          ))}
        </div>

        <div className="max-w-[404px] w-full">
          <Image
            src={selectedImage}
            alt={product.product_name}
            width={400}
            height={400}
            priority
            className="object-contain rounded-md"
          />
        </div>
      </div>

      <div className="flex-1">
        <h3 className="text-[28px] font-bold">{product.product_name}</h3>
        <strong className="text-[22px] text-primary font-semibold">
          ${product.cost.toFixed(2)}
        </strong>
        <p className="text-tertiary font-medium leading-4 pt-7 pb-2.5">
          Short Description:
        </p>
        <p className="text-secondary leading-6 text-sm">
          {product.short_description}
        </p>

        <div className="pt-6">
          <p className="font-medium mb-2">Size:</p>
          <div className="flex gap-2">
            {["S", "M", "L", "XL"].map((size) => (
              <Button
                key={size}
                variant={size === selectedSize ? "default" : "outline"}
                onClick={() => setSelectedSize(size)}
                className={`${
                  size === selectedSize
                    ? "bg-primary hover:bg-primary/90 text-white"
                    : ""
                } rounded-full text-[15px] size-8`}
              >
                {size}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 pt-6">
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="bg-primary hover:bg-primary/90 text-white hover:text-white rounded-full"
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="w-12 text-lg text-center">{quantity}</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setQuantity(quantity + 1)}
              className="bg-primary hover:bg-primary/90 text-white hover:text-white rounded-full"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <Button className="bg-primary hover:bg-primary/90 uppercase px-6">
            Buy now
          </Button>
          <Button
            variant={"outline"}
            onClick={handleAddToCart}
            className="border-primary uppercase text-primary hover:text-primary/90"
          >
            Add to cart
          </Button>
          <Button variant={"outline"} className="border-primary uppercase">
            <Heart className="text-primary" />
          </Button>
        </div>

        <p className="text-tertiary font-medium leading-4 pt-7 pb-2.5">
          Tags: {product.tags}
        </p>
        <div className="flex gap-1 items-center mt-4">
          <p className="font-medium">Share this products: </p>
          <div className="flex items-center gap-3">
            <Facebook />
            <Twitter />
            <Linkedin />
            <Mail />
          </div>
        </div>
      </div>
      <div>
        <span className="border-b-2 border-primary pb mb-4 inline-block text-primary font-semibold">
          Product Description:
        </span>
        <p>{product.product_description}</p>
      </div>
      <div className="grid grid-cols-5 gap-6 place-items-center">
        {relatedProducts?.map((product) => (
          <ProductCard key={product.product_id} product={product} />
        ))}
      </div>
    </div>
  );
}
