const ChatMockup: React.FC = () => {
  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-2xl shadow-2xl shadow-primary/15 overflow-hidden border border-primary/10">
      {/* Header */}
      <div className="bg-primary px-4 py-3 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
          <span className="text-white text-sm font-bold font-display">G</span>
        </div>
        <div className="flex-1">
          <p className="text-white font-display font-semibold text-sm">GlucoMan Asistan</p>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 block"></span>
            <span className="text-white/70 text-xs">Çevrimiçi</span>
          </div>
        </div>
      </div>

      {/* Messages area */}
      <div className="bg-bg p-4 space-y-3 min-h-[240px]">
        {/* User message */}
        <div className="flex justify-end">
          <div className="bg-primary text-white rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[80%]">
            <p className="text-sm leading-relaxed">HbA1c değerim 7.2, bu normal mi?</p>
          </div>
        </div>

        {/* Bot message */}
        <div className="flex justify-start flex-col gap-1">
          <div className="bg-white text-[#1A2E35] rounded-2xl rounded-tl-sm px-4 py-3 max-w-[90%] shadow-sm border border-primary/6">
            <p className="text-sm leading-relaxed">
              HbA1c değeri diyabet yönetiminin önemli bir göstergesidir. Genel hedef %7'nin altıdır, ancak bu hedef kişiye göre değişebilir. Doktorunuzla görüşmenizi öneririm 🩺
            </p>
          </div>
          <span className="text-[10px] text-[#6B8A92] ml-1 italic">
            [Kaynak: ADA Standartları 2024]
          </span>
        </div>

        {/* Typing indicator */}
        <div className="flex justify-start">
          <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm border border-primary/6 flex items-center gap-1">
            <span className="typing-dot w-1.5 h-1.5 rounded-full bg-[#6B8A92] block"></span>
            <span className="typing-dot w-1.5 h-1.5 rounded-full bg-[#6B8A92] block"></span>
            <span className="typing-dot w-1.5 h-1.5 rounded-full bg-[#6B8A92] block"></span>
          </div>
        </div>
      </div>

      {/* Input bar */}
      <div className="px-4 py-3 border-t border-primary/8 bg-white flex items-center gap-2">
        <div className="flex-1 bg-bg rounded-full px-4 py-2 text-xs text-[#6B8A92] font-body">
          Sorunuzu yazın...
        </div>
        <button
          aria-label="Gönder"
          className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-white" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatMockup;