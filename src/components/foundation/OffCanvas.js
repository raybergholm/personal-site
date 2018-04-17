import React from "react";
import PropTypes from "prop-types";

const OffCanvas = ({ ids = {}, styles = {}, side = "left", mainContent, sideContent }) => (
    <div id={ids.wrapper} style={styles.wrapper} className="off-canvas-wrapper">
        <div id={ids.side} style={styles.side} className={`off-canvas position-${side}`} data-off-canvas>
            {sideContent}
        </div>
        <div id={ids.main} style={styles.main} className="off-canvas-content" data-off-canvas-content>
            {mainContent}
        </div>
    </div>
);

OffCanvas.propTypes = {
    ids: PropTypes.string,
    mainContent: PropTypes.oneOfType(
        PropTypes.object,
        PropTypes.array
    ),
    side: PropTypes.string,
    sideContent: PropTypes.oneOfType(
        PropTypes.object,
        PropTypes.array
    ),
    styles: PropTypes.object
};

export default OffCanvas;


