"use client";

import { useStoreModel } from "@/hooks/use-store-model";
import { Model } from "@/components/ui/model";
export const StoreModel = () => {
      const storeModel = useStoreModel();

      return (    
  <Model
    title=" Create store"
    description="Add a new store to manage and categories "
    isOpen={storeModel.isOpen}
    onClose={storeModel.onClose}
  >
    Future create store form
  </Model>
  )
};
