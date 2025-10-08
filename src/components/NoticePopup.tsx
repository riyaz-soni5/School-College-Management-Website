import { X } from "lucide-react";
import type { Notice } from "../data/noticeData";

interface NoticePopupProps {
  notice: Notice;
  onClose: () => void;
}

export default function NoticePopup({ notice, onClose }: NoticePopupProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="relative bg-white rounded-lg shadow-lg w-[90%] max-w-xl p-3">
        <div className="relative bg-[#0077C8] text-white p-6 rounded-md border-2 border-white">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute -top-3 -right-3 bg-white rounded-full p-1 shadow hover:bg-gray-100"
          >
            <X size={22} className="text-red-600" />
          </button>

          {/* Notice Content */}
          <h2 className="text-2xl font-extrabold mb-3">{notice.title}</h2>
          <p className="text-sm italic mb-4">({notice.date})</p>
          <p className="leading-relaxed mb-4 whitespace-pre-line">
            {notice.content}
          </p>
          {notice.contact && (
            <p className="mt-4 text-sm">
              For queries, contact:{" "}
              <span className="font-semibold">{notice.contact}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
