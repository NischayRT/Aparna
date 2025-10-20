"use client";

const MobileSticky = () => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-3 px-4 z-40">
      <div className="flex justify-center gap-4">
        <button
          className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold text-sm flex-1 max-w-[200px]"
          onClick={() => document.getElementById("exampleModal")?.showModal()}
        >
          Enquire Now
        </button>
      </div>
    </div>
  );
};

export default MobileSticky;
