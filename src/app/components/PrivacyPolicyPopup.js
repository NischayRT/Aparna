"use client";

const PrivacyPolicyPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    // Backdrop
    <div
      className="fixed inset-0 flex items-center justify-center z-[60]"
      onClick={onClose}
      // --- CHANGE: Replaced Tailwind classes with a direct inline style for reliability ---
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      {/* Modal Content */}
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-4 p-6 md:p-8 relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 text-2xl"
          aria-label="Close"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 heading-font">
          Privacy and Policy
        </h2>
        <div className="para-font text-gray-600 space-y-4 text-sm leading-relaxed">
          <p>
            When you voluntarily send us electronic mail, we will keep a record
            of this information so that we can respond to you. We only collect
            information from you when you register on our site or fill out a
            form.
          </p>
          <p>
            Also, when filling out a form on our site, you may be asked to enter
            your name, e-mail address, and phone number. You may, however, visit
            our site anonymously. In case you have submitted your personal
            information and contact details, we reserve the right to call, SMS,
            Email, or WhatsApp you about our products and offers, even if your
            number has DND activated on it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPopup;
