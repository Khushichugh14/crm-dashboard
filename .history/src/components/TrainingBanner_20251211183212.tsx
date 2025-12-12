import React from "react";
import trainingImg from "/src/assets/banner/training_banner.png"

export default function TrainingBanner() {
  return (
    <div style={{ background: "linear-gradient(135deg,#02897a,#0fb6e6)", borderRadius: 14, padding: 16, color: "white", display: "flex", alignItems: "center", gap: 16, boxShadow: "0 18px 36px rgba(2,137,122,0.14)" }}>
      <div style={{ flex: 1 }}>
        <div className="text-xs opacity-90">DON'T FORGET</div>
        <h3 className="text-2xl font-bold">Setup training for next week</h3>
        <p className="mt-2 text-sm opacity-90">Schedule team on-boarding and growth workshops.</p>
        <button className="mt-4 px-4 py-2 rounded-full" style={{ background: "rgba(255,255,255,0.14)", color: "white" }}>Go to training center</button>
      </div>
      <div style={{ width: 140 }}>
        <img src={trainingImg} alt="training" style={{ width: "100%", borderRadius: 10, objectFit: "cover" }} />
      </div>
    </div>
  );
}
