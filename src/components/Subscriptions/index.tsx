import React from "react";
// import Image from "next/image";
import Diagramimage from '@/app/juicy-team-analyzes-graphs-and-diagrams.gif'
// import { Button } from "./ui/button";

interface SubscriptionOption {
  id: number;
  name: string;
  tokens: number;
}

const subscriptionOptions: SubscriptionOption[] = [
  { id: 1, name: 'Basic', tokens: 50 },
  { id: 2, name: 'Standard', tokens: 100 },
  { id: 3, name: 'Premium', tokens: 200 },
];

const Pricing: React.FC = () => {
  return (
    <div style={{ background: "linear-gradient(to bottom, #edf2f7, #f7fafc)", width: "100%", padding: "1.5rem 0" }} id="pricing">
      <div style={{ maxWidth: "100%", margin: "0 auto", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>
            <h2 style={{ fontSize: "1.25rem", color: "#1a202c", fontWeight: "500", lineHeight: "1.5", textAlign: "center" }}>
              Choose Your Plan
            </h2>
            <h3 style={{ fontWeight: "800", lineHeight: "1.5", color: "#2b6cb0", textAlign: "center", marginTop: "0.5rem" }}>
              Tokens are required to use the InterviewAI
            </h3>
            <p style={{ lineHeight: "1.5", width: "100%", margin: "1rem auto", textAlign: "center", fontSize: "0.875rem" }}>
              Let's choose the package that is best for you and explore it happily and cheerfully.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateRows: "auto", gridTemplateColumns: "1fr", gap: "1.5rem 0", paddingTop: "1rem", paddingBottom: "1.5rem", paddingLeft: "0.75rem", paddingRight: "0.75rem", gridAutoFlow: "row dense" }}>
            {subscriptionOptions.map((option) => (
              <div key={option.id} style={{ display: "flex", justifyContent: "center" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                    borderRadius: "0.75rem",
                    padding: "1rem 1rem",
                    minWidth: "0",
                    backgroundColor: "#fff",
                    transition: "transform 0.2s",
                    transform: "scale(1)",
                  }}
                >
                  <div style={{ padding: "0.5rem", marginTop: "0.75rem" }}>
                    {/* <Image src={Diagramimage} width={200} height={230} alt="Free Plan" /> */}
                  </div>
                  <p style={{ fontSize: "1rem", color: "#1a202c", fontWeight: "500", textTransform: "capitalize", marginTop: "0.75rem", marginBottom: "1.75rem", textAlign: "center" }}>
                    {option.name} Plan
                  </p>
                  <ul style={{ display: "flex", flexDirection: "column", listStylePosition: "inside", paddingLeft: "0.75rem", paddingRight: "0.75rem", alignItems: "flex-start", justifyContent: "flex-start", color: "#4a5568", flex: "1", fontSize: "0.875rem" }}>
                    <li style={{ position: "relative", marginTop: "0.25rem" }}>
                      Unlimited Bandwidth
                    </li>
                    <li style={{ position: "relative", marginTop: "0.25rem" }}>
                      Encrypted Connection
                    </li>
                    <li style={{ position: "relative", marginTop: "0.25rem" }}>
                      No Traffic Logs
                    </li>
                    <li style={{ position: "relative", marginTop: "0.25rem" }}>
                      Works on All Devices
                    </li>
                    {option.id === 3 && (
                      <li style={{ position: "relative", marginTop: "0.25rem" }}>
                        Connect Anywhere
                      </li>
                    )}
                    {option.id === 3 && (
                      <li style={{ position: "relative", marginTop: "0.25rem" }}>
                        Get New Features
                      </li>
                    )}
                  </ul>
                  <div style={{ display: "flex", flexDirection: "column", width: "100%", justifyContent: "center", marginBottom: "1rem", flex: "none", marginTop: "1.5rem" }}>
                    <p style={{ fontSize: "1rem", color: "#1a202c", textAlign: "center", marginBottom: "0.5rem" }}>
                      {option.tokens > 0 ? `$${option.tokens} / mo` : 'Free'}
                    </p>
                    <button style={{ backgroundColor: "#2b6cb0", fontSize: "0.875rem" }}>Select</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
