"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { coffees, type Coffee } from "../../data/coffees";

export type AdminProductPayload = {
  name: string;
  slug: string;
  shortDescription: string;
  heroImage?: string;
  galleryImages?: string[];
  packageSizes?: string[];
  buyLink?: string;
  isPublished?: boolean;
  dynamicFields?: {
    id: string;
    label: string;
    value: string | string[];
    visible: boolean;
    order: number;
  }[];
};

type AdminProductsContextValue = {
  products: Coffee[];
  addProduct: (payload: AdminProductPayload) => void;
  updateProduct: (slug: string, payload: AdminProductPayload) => void;
  deleteProduct: (slug: string) => void;
  getProductBySlug: (slug: string) => Coffee | undefined;
};

const AdminProductsContext = createContext<AdminProductsContextValue | null>(
  null
);

function payloadToCoffee(
  payload: AdminProductPayload,
  existing?: Coffee
): Coffee {
  return {
    slug: payload.slug,
    name: payload.name,
    shortDescription: payload.shortDescription,
    flavorNotes: existing?.flavorNotes ?? [],
    origin: existing?.origin,
    process: existing?.process,
    packageSizes: payload.packageSizes ?? [],
    dynamicFields: payload.dynamicFields ?? [],
    heroImage: payload.heroImage,
    galleryImages: payload.galleryImages ?? [],
    buyLink: payload.buyLink,
    isPublished: payload.isPublished ?? false,
  };
}

export function AdminProductsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [products, setProducts] = useState<Coffee[]>(() => coffees);

  const addProduct = useCallback((payload: AdminProductPayload) => {
    setProducts((prev) => [...prev, payloadToCoffee(payload)]);
  }, []);

  const updateProduct = useCallback(
    (slug: string, payload: AdminProductPayload) => {
      setProducts((prev) => {
        const existing = prev.find((p) => p.slug === slug);
        if (!existing) return prev;
        const updated = payloadToCoffee(payload, existing);
        return prev.map((p) => (p.slug === slug ? updated : p));
      });
    },
    []
  );

  const deleteProduct = useCallback((slug: string) => {
    setProducts((prev) => prev.filter((p) => p.slug !== slug));
  }, []);

  const getProductBySlug = useCallback(
    (slug: string) => products.find((p) => p.slug === slug),
    [products]
  );

  const value = useMemo<AdminProductsContextValue>(
    () => ({
      products,
      addProduct,
      updateProduct,
      deleteProduct,
      getProductBySlug,
    }),
    [
      products,
      addProduct,
      updateProduct,
      deleteProduct,
      getProductBySlug,
    ]
  );

  return (
    <AdminProductsContext.Provider value={value}>
      {children}
    </AdminProductsContext.Provider>
  );
}

export function useAdminProducts(): AdminProductsContextValue {
  const ctx = useContext(AdminProductsContext);
  if (!ctx) {
    throw new Error(
      "useAdminProducts must be used within AdminProductsProvider"
    );
  }
  return ctx;
}
