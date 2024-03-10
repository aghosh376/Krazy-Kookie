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
            <h3>Feature 1</h3>
            <p>Yapping can be described as a certain process of divulging information .</p>
          </button>
          <button className="feature-item" onClick={() => handleFeatureClick('Feature 2')}>
            <h3>Feature 2</h3>
            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </button>
          <button className="feature-item" onClick={() => handleFeatureClick('Feature 3')}>
            <h3>Feature 3</h3>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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