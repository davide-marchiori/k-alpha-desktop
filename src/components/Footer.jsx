import React from "react";

export function Footer() {
  return (
    <footer className="container mx-auto px-4 py-6 my-6">
      <div className="text-sm text-gray-600 text-center">
        <p className="mb-2">
          <strong>To Cite K-Alpha Calculator:</strong> Marzi, G., Balzano, M., &
          Marchiori, D. (2024). K-Alpha Calculator—Krippendorff's Alpha
          Calculator: A User-Friendly Tool for Computing Krippendorff's Alpha
          Inter-Rater Reliability Coefficient. <em>MethodsX, 12</em>, 102545.
        </p>
        <p className="mb-2">
          <a
            href="https://doi.org/10.1016/j.mex.2023.102545"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://doi.org/10.1016/j.mex.2023.102545
          </a>
        </p>
        <p className="mb-2">
          <strong>Source Code:</strong>{" "}
          <a
            href="https://github.com/davide-marchiori/k-alpha"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/davide-marchiori/k-alpha
          </a>
        </p>
        <p>
          This work is licensed under{" "}
          <a
            href="https://creativecommons.org/licenses/by/4.0/"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            CC BY 4.0
          </a>{" "}
          - Free to share and adapt, requires attribution
        </p>
      </div>
    </footer>
  );
}
