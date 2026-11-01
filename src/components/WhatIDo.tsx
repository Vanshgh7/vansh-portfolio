import { useState, useCallback } from "react";
import "./styles/WhatIDo.css";

const WhatIDo = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = useCallback(
    (index: number) => {
      setActiveIndex((prev) => (prev === index ? null : index));
    },
    []
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, index: number) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleToggle(index);
      }
    },
    [handleToggle]
  );

  const cardClass = (index: number) => {
    if (activeIndex === index) return "what-content what-content-active";
    if (activeIndex !== null) return "what-content what-sibling";
    return "what-content";
  };

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className={cardClass(0)}
            onClick={() => handleToggle(0)}
            onKeyDown={(e) => handleKeyDown(e, 0)}
            role="button"
            tabIndex={0}
            aria-expanded={activeIndex === 0}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>FULL-STACK DEVELOPMENT</h3>
              <h4>Modern Web &amp; API Architectures</h4>
              <p>
                Building responsive web applications and high-performance backend systems with modern frameworks, RESTful APIs, and efficient database architectures.
              </p>
              <h5>Skillset &amp; tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">React.js</div>
                <div className="what-tags">Node.js</div>
                <div className="what-tags">Express.js</div>
                <div className="what-tags">FastAPI</div>
                <div className="what-tags">TypeScript</div>
                <div className="what-tags">MongoDB</div>
                <div className="what-tags">MySQL</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className={cardClass(1)}
            onClick={() => handleToggle(1)}
            onKeyDown={(e) => handleKeyDown(e, 1)}
            role="button"
            tabIndex={0}
            aria-expanded={activeIndex === 1}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>ML &amp; SECURITY</h3>
              <h4>Intelligent Systems &amp; DevSecOps</h4>
              <p>
                Developing machine learning models and DevSecOps pipelines combining automated vulnerability scanning with intelligent threat detection.
              </p>
              <h5>Skillset &amp; tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">TensorFlow</div>
                <div className="what-tags">Scikit-learn</div>
                <div className="what-tags">DevSecOps</div>
                <div className="what-tags">OpenVAS</div>
                <div className="what-tags">Docker</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
