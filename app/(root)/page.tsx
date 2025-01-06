"use client";
import { Model } from "@/components/ui/model";
import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
  return (
    <div className="p-4">
      <Model title="Test" description="Test Desc" isOpen onClose={() => {}}>
        Children
      </Model>
    </div>
  );
};

export default SetupPage;
