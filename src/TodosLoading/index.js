import React from "react";
import ContentLoader from "react-content-loader";

function TodosLoading() {
    return (
        <ContentLoader
            speed={2}
            width={1400}
            height={180}
            viewBox="0 0 1400 150"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="40" cy="20" r="10" />
            <rect x="74" y="15" rx="5" ry="5" width="400" height="10" />
            <circle cx="40" cy="52" r="10" />
            <rect x="74" y="47" rx="5" ry="5" width="500" height="10" />
            <circle cx="40" cy="82" r="10" />
            <rect x="74" y="77" rx="5" ry="5" width="400" height="10" />
            <circle cx="40" cy="112" r="10" />
            <rect x="74" y="107" rx="5" ry="5" width="500" height="10" />
        </ContentLoader>
    );
}

export { TodosLoading };