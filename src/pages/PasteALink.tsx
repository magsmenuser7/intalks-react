import React, { useEffect, useState } from "react";

const tools = [
  { id: "timestamps", label: "Timestamps", icon: "🕐" },
  { id: "trailer", label: "Trailer Brief", icon: "🎬" },
  { id: "clips", label: "Clip Brief", icon: "📱" },
  { id: "titles", label: "Titles", icon: "✏️" },
  { id: "thumbnails", label: "Thumbnails", icon: "🖼️" },
  { id: "seo", label: "SEO Package", icon: "🔍" },
  { id: "editmap", label: "Edit Map", icon: "🗂️" },
  { id: "meta", label: "Meta Content", icon: "📝" },
  { id: "editorguidelines", label: "Editor Brief", icon: "🎞️" },
];

const modes = [
  { id: "episode", label: "🎙 Episode" },
  { id: "analyser", label: "📊 Analyser" },
  { id: "trends", label: "🔥 Trends" },
  { id: "history", label: "🗂 History" },
  { id: "youtube", label: "📺 YouTube" },
];

export default function PasteALink() {
  const [mode, setMode] = useState("episode");
  const [apiKey, setApiKey] = useState("");
  const [ytKey, setYtKey] = useState("");
  const [url, setUrl] = useState("");
  const [transcript, setTranscript] = useState("");
  const [selectedTools, setSelectedTools] = useState(
    tools.map((t) => t.id)
  );

  const wordCount = transcript.trim()
    ? transcript.trim().split(/\s+/).length
    : 0;

  const toggleTool = (id) => {
    setSelectedTools((prev) =>
      prev.includes(id)
        ? prev.filter((tool) => tool !== id)
        : [...prev, id]
    );
  };

  useEffect(() => {
    const savedKey = localStorage.getItem("anthropic_key");
    const savedYTKey = localStorage.getItem("youtube_key");

    if (savedKey) setApiKey(savedKey);
    if (savedYTKey) setYtKey(savedYTKey);
  }, []);

  const saveKeys = () => {
    localStorage.setItem("anthropic_key", apiKey);
    localStorage.setItem("youtube_key", ytKey);
    alert("Keys Saved!");
  };

  return (
    <div className="min-h-screen bg-[#FAF7F4] text-[#2C2218] font-sans">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white border-b border-[#EDE8E3] shadow-sm">
        <div className="max-w-7xl mx-auto h-16 px-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black tracking-tight">
              intalks
            </h1>
            <p className="text-[10px] tracking-[3px] text-gray-400">
              STUDIO
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div
              className={`w-3 h-3 rounded-full ${
                apiKey ? "bg-green-500" : "bg-gray-300"
              }`}
            />
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-orange-100 text-orange-500 border border-orange-200">
              తెలుగు · 9 Tools
            </span>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-6 pb-28">
        {/* HERO */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#F2A98A] to-[#E8916A] text-white p-8 md:p-12 mb-6">
          <div className="relative z-10">
            <span className="inline-block px-4 py-1 rounded-full border border-white/30 bg-white/20 text-xs font-bold mb-4">
              ✦ Built for Intalks Podcast
            </span>

            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              Paste a Link.
              <br />
              Get 1 Million Views.
            </h1>

            <p className="mt-4 max-w-2xl text-white/80 text-sm md:text-base leading-relaxed">
              Drop any YouTube link — auto-fetch transcript and
              generate everything your team needs in minutes.
            </p>

            <div className="flex flex-wrap gap-8 mt-8">
              {[
                ["9", "AI Tools"],
                ["<5m", "Per Episode"],
                ["1M", "Views Goal"],
                ["4", "Platforms"],
              ].map(([num, label]) => (
                <div key={label}>
                  <h2 className="text-3xl font-black">{num}</h2>
                  <p className="text-xs text-white/70 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute top-[-50px] right-[-50px] w-52 h-52 bg-white/10 rounded-full" />
          <div className="absolute bottom-[-40px] left-[-30px] w-40 h-40 bg-white/10 rounded-full" />
        </section>

        {/* API KEYS */}
        <section className="bg-white rounded-2xl border border-orange-200 p-6 mb-6">
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-bold mb-2">
                🔑 Anthropic API Key
              </label>

              <div className="flex flex-col md:flex-row gap-3">
                <input
                  type="password"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="sk-ant-api03-..."
                  className="flex-1 px-4 py-3 rounded-xl border border-gray-200 bg-[#FAF7F4] outline-none focus:ring-2 focus:ring-orange-300"
                />

                <button
                  onClick={saveKeys}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#F2A98A] to-[#E8916A] text-white font-bold"
                >
                  Save
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">
                📺 YouTube Data API Key
              </label>

              <input
                type="password"
                value={ytKey}
                onChange={(e) => setYtKey(e.target.value)}
                placeholder="AIza..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FAF7F4] outline-none focus:ring-2 focus:ring-orange-300"
              />
            </div>
          </div>
        </section>

        {/* MODE TABS */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 bg-white border border-[#EDE8E3] rounded-2xl p-2 mb-6">
          {modes.map((m) => (
            <button
              key={m.id}
              onClick={() => setMode(m.id)}
              className={`py-3 rounded-xl text-sm font-bold transition-all ${
                mode === m.id
                  ? "bg-gradient-to-r from-[#F2A98A] to-[#E8916A] text-white shadow-lg"
                  : "text-gray-400 hover:bg-gray-100"
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>

        {/* EPISODE PANEL */}
        {mode === "episode" && (
          <div className="space-y-6">
            {/* URL INPUT */}
            <div className="bg-white rounded-2xl border border-[#EDE8E3] p-6">
              <label className="block text-sm font-bold mb-3">
                YouTube Video Link
              </label>

              <div className="flex flex-col md:flex-row gap-3">
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://www.youtube.com/watch?v=..."
                  className="flex-1 px-4 py-4 rounded-xl border border-gray-200 bg-[#FAF7F4] outline-none focus:ring-2 focus:ring-orange-300"
                />

                <button className="px-6 py-4 rounded-xl bg-gradient-to-r from-[#F2A98A] to-[#E8916A] text-white font-bold">
                  → Fetch
                </button>
              </div>
            </div>

            {/* TRANSCRIPT */}
            <div className="bg-white rounded-2xl border border-[#EDE8E3] p-6">
              <label className="block text-sm font-bold mb-3">
                Transcript
              </label>

              <textarea
                rows={8}
                value={transcript}
                onChange={(e) => setTranscript(e.target.value)}
                placeholder="Transcript will appear here..."
                className="w-full px-4 py-4 rounded-xl border border-gray-200 bg-[#FAF7F4] outline-none resize-none focus:ring-2 focus:ring-orange-300"
              />

              <div className="text-right text-xs text-gray-400 mt-2">
                {transcript.length.toLocaleString()} characters ·{" "}
                {wordCount.toLocaleString()} words
              </div>

              <div className="mt-4 p-3 rounded-xl bg-orange-50 text-sm text-gray-500">
                Get transcript free: YouTube → click ⋯ → Show
                transcript → copy all → paste above
              </div>
            </div>

            {/* TOOLS */}
            <div className="bg-white rounded-2xl border border-[#EDE8E3] p-6">
              <h3 className="text-sm font-bold mb-4">
                Tools to Generate
              </h3>

              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => {
                  const active = selectedTools.includes(tool.id);

                  return (
                    <button
                      key={tool.id}
                      onClick={() => toggleTool(tool.id)}
                      className={`px-4 py-2 rounded-full border text-sm font-semibold transition-all ${
                        active
                          ? "bg-orange-100 border-orange-300 text-orange-500"
                          : "bg-white border-gray-200 text-gray-400"
                      }`}
                    >
                      {tool.icon} {tool.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* GENERATE BUTTON */}
            <button className="w-full py-5 rounded-2xl bg-gradient-to-r from-[#F2A98A] to-[#E8916A] text-white font-black text-lg shadow-lg hover:scale-[0.99] transition">
              ✦ Generate Selected Outputs
            </button>
          </div>
        )}
        {/* ANALYSER PANEL */}
{mode === "analyser" && (
  <div className="space-y-6">
    {/* HEADER */}
    <div className="rounded-[28px] bg-gradient-to-r from-[#2C1B12] via-[#4A2A1A] to-[#5B341E] p-6 md:p-8 text-white flex items-center gap-5">
      <div className="w-16 h-16 rounded-2xl bg-[#F2A98A] flex items-center justify-center text-3xl shadow-lg">
        📊
      </div>

      <div>
        <h2 className="text-3xl font-black">
          Channel Growth Analyser
        </h2>

        <p className="text-white/70 mt-1">
          Paste up to 4 YouTube links — AI fetches &
          analyses all automatically.
        </p>
      </div>
    </div>

    {/* INPUT CARD */}
    <div className="bg-white border border-[#EDE8E3] rounded-[28px] p-6 md:p-8">
      <h3 className="text-[#E8916A] uppercase tracking-wide font-black text-sm mb-5">
        Paste Youtube Video Links
      </h3>

      <div className="space-y-4">
        {[1, 2, 3, 4].map((num) => (
          <div
            key={num}
            className="flex items-center gap-4 bg-[#FAF7F4] border border-[#EDE8E3] rounded-2xl px-5 py-4"
          >
            <div className="w-11 h-11 rounded-full bg-[#E8916A] text-white font-black flex items-center justify-center text-lg shrink-0">
              {num}
            </div>

            <input
              type="url"
              placeholder={`https://www.youtube.com/watch?v=... — Video ${num} ${
                num <= 2 ? "(required)" : "(optional)"
              }`}
              className="w-full bg-transparent outline-none text-[#2C2218] placeholder:text-[#C5B5AA] text-lg"
            />
          </div>
        ))}
      </div>

      <button className="mt-8 w-full py-5 rounded-2xl bg-gradient-to-r from-[#F2A98A] to-[#E8916A] text-white text-2xl font-black shadow-lg hover:scale-[0.99] transition-all">
        📊 Fetch & Analyse My Channel
      </button>
    </div>
  </div>
)}

{/* TRENDS PANEL */}
{mode === "trends" && (
  <div className="space-y-6">
    {/* HEADER */}
    <div className="rounded-[28px] bg-gradient-to-r from-[#2C1B12] via-[#4A2A1A] to-[#5B341E] p-6 md:p-8 text-white flex items-center gap-5">
      <div className="w-16 h-16 rounded-2xl bg-[#F2A98A] flex items-center justify-center text-3xl shadow-lg">
        🔥
      </div>

      <div>
        <h2 className="text-3xl font-black">
          Live Trend Advisor
        </h2>

        <p className="text-white/70 mt-1">
          What Telugu/Indian audience is searching now.
          30-day 1M plan.
        </p>
      </div>
    </div>

    {/* CONTENT */}
    <div className="bg-white border border-[#EDE8E3] rounded-[28px] p-6 md:p-8">
      <h3 className="text-[#E8916A] uppercase tracking-wide font-black text-sm mb-5">
        Topic Or Guest Focus (Optional)
      </h3>

      <input
        type="text"
        placeholder="e.g. startup funding, AI in India, NRI entrepreneur..."
        className="w-full px-6 py-5 rounded-2xl border border-[#EDE8E3] bg-[#FAF7F4] outline-none text-lg placeholder:text-[#C5B5AA]"
      />

      <button className="mt-6 w-full py-5 rounded-2xl bg-gradient-to-r from-[#F2A98A] to-[#E8916A] text-white text-2xl font-black shadow-lg hover:scale-[0.99] transition-all">
        🔥 Get Trend Report
      </button>
    </div>
  </div>
)}

{/* HISTORY PANEL */}
{mode === "history" && (
  <div className="space-y-6">
    {/* HEADER */}
    <div className="rounded-[28px] bg-gradient-to-r from-[#2C1B12] via-[#4A2A1A] to-[#5B341E] p-6 md:p-8 text-white flex items-center gap-5">
      <div className="w-16 h-16 rounded-2xl bg-[#F2A98A] flex items-center justify-center text-3xl shadow-lg">
        🗂️
      </div>

      <div>
        <h2 className="text-3xl font-black">
          Episode History
        </h2>

        <p className="text-white/70 mt-1">
          All past episodes auto-saved. Tap any to view
          outputs.
        </p>
      </div>
    </div>

    {/* EMPTY STATE */}
    <div className="bg-white border border-[#EDE8E3] rounded-[28px] min-h-[420px] flex items-center justify-center">
      <div className="text-center">
        <div className="text-7xl mb-5">📭</div>

        <h3 className="text-4xl font-black text-[#7B685A]">
          No history yet
        </h3>

        <p className="mt-3 text-[#A39285] text-xl">
          Generate outputs for an episode and they appear
          here automatically.
        </p>
      </div>
    </div>
  </div>
)}

{/* YOUTUBE PANEL */}
{mode === "youtube" && (
  <div className="space-y-6">
    {/* HEADER */}
    <div className="rounded-[28px] bg-gradient-to-r from-[#2C1B12] via-[#4A2A1A] to-[#5B341E] p-6 md:p-8 text-white flex items-center gap-5">
      <div className="w-16 h-16 rounded-2xl bg-[#F2A98A] flex items-center justify-center text-3xl shadow-lg">
        📺
      </div>

      <div>
        <h2 className="text-3xl font-black">
          YouTube Channel Stats
        </h2>

        <p className="text-white/70 mt-1">
          Public video performance for your Intalks
          channel.
        </p>
      </div>
    </div>

    {/* INPUT */}
    <div className="bg-white border border-[#EDE8E3] rounded-[28px] p-6 md:p-8">
      <h3 className="text-[#E8916A] uppercase tracking-wide font-black text-sm mb-5">
        Channel Handle Or ID
      </h3>

      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="@IntalksOfficial or UC..."
          className="flex-1 px-6 py-5 rounded-2xl border border-[#EDE8E3] bg-[#FAF7F4] outline-none text-lg placeholder:text-[#C5B5AA]"
        />

        <button className="px-10 py-5 rounded-2xl bg-gradient-to-r from-[#F2A98A] to-[#E8916A] text-white text-2xl font-black shadow-lg hover:scale-[0.99] transition-all">
          Load
        </button>
      </div>

      <p className="mt-5 text-[#8D7767] text-lg">
        Find your handle: YouTube → your profile → copy
        the @handle
      </p>
    </div>
  </div>
)}
      </div>
    </div>
  );
}