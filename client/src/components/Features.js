import React, { useState } from 'react';
import '../styles.css';

const Features = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);

  const handleFeatureClick = (feature) => {
    setSelectedFeature(feature);
    setShowForm(true);
  };

  return (
    <section className="features">
      <div className="container">
        <h2>Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <button className="feature-item" onClick={() => handleFeatureClick('Feature 1')}>
            <h3>Connect Fitbit</h3>
            <p>Connect FitBit to analyze current quality of health.</p>
          </button>
          <button className="feature-item" onClick={() => handleFeatureClick('Feature 2')}>
            <h3>Generate Advice</h3>
            <p>Advised inmprovements based on stats to better health</p>
          </button>
          <button className="feature-item" onClick={() => handleFeatureClick('Feature 3')}>
            <h3>Review</h3>
            <p>Overview of current health statistics as they stand against world statistics.</p>
          </button>
        </div>
      </div>
      {showForm && (
        <div className="container mt-8">
          <h2>Form for {selectedFeature}</h2>
          {/* Add your form components here */}
        </div>
      )}
    </section>
  );
};

export default Features;