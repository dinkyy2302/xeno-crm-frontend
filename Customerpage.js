import React, { useState } from "react";
import CustomerFornpm  from "../components/CustomerForm";

import RuleBuilder from "../components/RuleBuilder";

export default function CampaignPage() {
  const [previewCount, setPreviewCount] = useState(null);
  const [campaignRules, setCampaignRules] = useState([]);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🎯 Campaign Builder</h1>
      <CampaignForm setPreviewCount={setPreviewCount} />
      <RuleBuilder onRulesChange={setCampaignRules} />
      {previewCount !== null && (
        <AudiencePreview count={previewCount} />
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    fontFamily: "Segoe UI, sans-serif",
    background: "#f7f8fa",
    minHeight: "100vh"
  },
  heading: {
    fontSize: "32px",
    marginBottom: "20px",
    color: "#333"
  }
};
