"use client";

import { useStoreModel } from "@/hooks/use-store-model";
import { Model } from "../ui/model";
export const StoreModel = () => {
      const storeModel = useStoreModell();

      return (    
  <Model
    title=" Create store"
    description="Add a new store to manage and categories "
    isOpen={store}
    onClose={() => {}}
  >
    Future create store form
  </Model>
  )
};
