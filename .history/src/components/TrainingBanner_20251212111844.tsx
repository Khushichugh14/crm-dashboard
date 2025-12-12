import React from "react";
import trainingImg from "/src/assets/banner/training_banner.png"

export default function TrainingBanner() {
    return (
        <div style={{
            background: "linear-gradient(135deg,#02897a,#0fb6e6)",
            borderRadius: 16,
            padding: "14px 16px",
            display: "flex",
            alignItems: "center",
            gap: "14px",
            boxShadow: "0 12px 28px rgba(2,137,122,0.18)",
            minHeight: "135px",   
        }}>
            <div
                style={{
                    background: "linear-gradient(135deg,#02897a,#0fb6e6)",
                    borderRadius: 14,
                    padding: "12px 14px",
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    boxShadow: "0 12px 28px rgba(2,137,122,0.18)",
                    minHeight: 130,
                }}
            >
                <div style={{ flex: 1, maxWidth: "240px" }}>
                    <div className="text-[11px] opacity-90">DON'T FORGET</div>

                    <h3 className="text-lg font-bold leading-tight">
                        Setup training for next week
                    </h3>

                    <p className="mt-1 text-[11px] opacity-90 leading-tight">
                        Schedule team on-boarding and growth workshops.
                    </p>

                    <button
                        className="mt-3 px-4 py-2 rounded-full text-white text-sm"
                        style={{ background: "rgba(255,255,255,0.12)" }}
                    >
                        Go to training center
                    </button>
                </div>

                <div style={{ width: 92, flexShrink: 0 }}>
                    <div
                        style={{
                            width: 92,
                            height: 92,
                            borderRadius: 12,
                            background: "rgba(255,255,255,0.18)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <div
                            style={{
                                width: 64,
                                height: 64,
                                borderRadius: "50%",
                                background: "rgba(255,255,255,0.85)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#0f172a",
                                fontWeight: 700,
                                fontSize: 28,
                            }}
                        >
                            T
                        </div>
                    </div>
                </div>
            </div>
             </div>

            );
}
