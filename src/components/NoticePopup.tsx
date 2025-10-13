import { X } from "lucide-react";
import type { Notice } from "../data/noticeData";

interface NoticePopupProps {
  notice: Notice;
  onClose: () => void;
}

export default function NoticePopup({ notice, onClose }: NoticePopupProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4 sm:p-6">
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl transition-all duration-300">
        <div className="relative bg-[#0077C8] text-white p-4 sm:p-6 md:p-8 rounded-md border-2 border-white">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute -top-3 -right-3 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 transition"
            aria-label="Close Notice"
          >
            <X size={22} className="text-red-600" />
          </button>

          {/* Notice Content */}
          <h2 className="text-xl sm:text-2xl font-extrabold mb-2 sm:mb-3 text-center sm:text-left">
            {notice.title}
          </h2>
          <p className="text-xs sm:text-sm italic mb-3 sm:mb-4 text-center sm:text-left">
            ({notice.date})
          </p>
          <p className="text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 whitespace-pre-line text-justify">
            {notice.content}
          </p>
          {notice.contact && (
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-center sm:text-left">
              For queries, contact:{" "}
              <span className="font-semibold">{notice.contact}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
