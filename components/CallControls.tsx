
export default function CallControls() {
  return (
    <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full bg-white/90 px-3 py-2 shadow-lg">
      <button
        type="button"
        aria-label="Video"
        className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-neutral-800 transition hover:bg-secondary"
      >
        ▣
      </button>

      <button
        type="button"
        aria-label="End call"
        className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-500 text-lg text-white transition hover:bg-rose-600"
      >
        ☎
      </button>

      <button
        type="button"
        aria-label="Microphone"
        className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-neutral-800 transition hover:bg-secondary"
      >
        ♩
      </button>
    </div>
  );
}
