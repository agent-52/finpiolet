export function SkeletonView() {
  return (
    <>
      <div className="sk-filter">
        {[200, 100, 120, 130, 100, 80].map((w, i) => (
          <div key={i} className="sk" style={{ width: w, height: 36 }} />
        ))}
      </div>
      <div className="sk-cards">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="sk-card">
            <div className="sk-card-top">
              <div className="sk-card-left">
                <div className="sk" style={{ width: 70, height: 11 }} />
                <div className="sk" style={{ width: 130, height: 30 }} />
              </div>
              <div
                className="sk"
                style={{ width: 32, height: 32, borderRadius: "50%" }}
              />
            </div>
            <div className="sk" style={{ width: "100%", height: 20 }} />
            <div className="sk" style={{ width: 110, height: 11 }} />
          </div>
        ))}
      </div>
      <div className="sk-table">
        <div className="sk-table-head">
          {[160, 80, 60, 80, 70, 90, 70, 40].map((w, i) => (
            <div
              key={i}
              className="sk"
              style={{ width: w, height: 11, flex: i === 0 ? 2 : 1 }}
            />
          ))}
        </div>
        {Array.from({ length: 9 }, (_, i) => (
          <div
            key={i}
            className={`sk-table-row${i % 2 !== 0 ? " sk-table-row--even" : ""}`}
          >
            <div className="sk-tx-wrap">
              <div
                className="sk"
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 11,
                  flexShrink: 0,
                }}
              />
              <div className="sk-tx-info">
                <div className="sk" style={{ width: 140, height: 13 }} />
                <div className="sk" style={{ width: 90, height: 11 }} />
              </div>
            </div>
            {[68, 52, 80, 64, 90, 66, 30].map((w, j) => (
              <div key={j} style={{ flex: 1 }}>
                <div
                  className="sk"
                  style={{ width: w, height: 22, borderRadius: 999 }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
