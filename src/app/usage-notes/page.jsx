import React from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export default function UsageNotes() {
  return (
    <>
      <Header title="Usage notes" />
      <main className="container mx-auto py-8 px-4">
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">
            Data File Structure for K-Alpha Calculator
          </h3>
          <h4 className="text-lg font-medium mb-2">Format Specifications</h4>
          <p className="mb-4">
            The data file should adhere to the following specifications:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>File Type:</strong> The file must be in a .csv
              (Comma-Separated Values) format.{" "}
              <strong>
                The separator must be a comma (,) or a semicolon (;). Tab or
                other separators are not allowed.
              </strong>
            </li>
            <li>
              <strong>Layout and Content:</strong> Data should be organized in a
              matrix format where:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Rows represent individual items rated.</li>
                <li>Columns correspond to the raters providing the codes.</li>
                <li>
                  <strong>
                    Rate values must be represented numerically. Decimals are
                    not allowed.
                  </strong>
                </li>
                <li>Data should be nominal, ordinal, interval, or ratio.</li>
                <li>
                  'NA' (without quotation marks) represents a missing value.{" "}
                  <strong>Empty cells are not allowed.</strong>
                </li>
                <li>
                  The file should not contain any headers, footers, or empty
                  spaces.
                </li>
                <li>
                  Not include the names of the items or the names of the raters.
                </li>
                <li>
                  Only one data file can be uploaded at a time; it must not
                  exceed 500KB.
                </li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Example Structure</h3>
          <p className="mb-4">
            Consider a scenario with 5 items, 4 raters, and 3 categories
            represented by the values 1, 2, 3 (nominal data). The data file
            should comprise 5 rows (one for each item) and 4 columns (one for
            each rater). The cell values denote the rates assigned. An example
            representation is as follows:
          </p>
          <pre className="bg-gray-200 p-4 rounded-md mb-4">
            1,1,1,1{"\n"}
            2,2,3,2{"\n"}
            3,3,3,3{"\n"}
            3,3,3,3{"\n"}
            2,2,2,2
          </pre>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Missing Values</h3>
          <p className="mb-4">
            When a rater has not assigned a rate to an item, the corresponding
            cell should be marked as 'NA' (without quotation marks). For
            example, if rater 3 did not assign a rate to item 1 and rater 2 did
            not assign a rate to item 4, the data file should appear as follows:
          </p>
          <pre className="bg-gray-200 p-4 rounded-md mb-4">
            1,1,NA,1{"\n"}
            2,2,3,2{"\n"}
            3,3,3,3{"\n"}
            3,NA,3,3{"\n"}
            2,2,2,2
          </pre>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Sample Data Files</h3>
          <p className="mb-4">
            Both files reflect a scenario with 12 items, 4 raters, 5 categories
            represented by the values 1, 2, 3, 4, 5 (nominal data), and several
            missing values with NA codes. The sample data files below report the
            exemplary calculations provided by{" "}
            <a
              href="https://doi.org/10.4135/9781071878781"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Krippendorff
            </a>{" "}
            (2019, p. 304).
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>CSV File:</strong> This file represents the data structure
              without headers. You can download it here:{" "}
              <a
                href="/rating_data_sample.csv"
                className="text-blue-600 hover:underline"
              >
                rating_data_sample.csv
              </a>
            </li>
            <li>
              <strong>XLSX File:</strong> This version includes headers with
              raters' and items' names for clarity, which is particularly useful
              when viewing in spreadsheet software. You can download it here:{" "}
              <a
                href="/rating_data_sample.xlsx"
                className="text-blue-600 hover:underline"
              >
                rating_data_sample.xlsx
              </a>
            </li>
          </ul>
          <p className="font-bold mb-4">
            IMPORTANT: The XLSX files should be exported from the spreadsheet
            software in .csv format, removing the headers (the first row in the
            file) and the first column with the items' names before saving.
            Also, check that the exported file uses a comma (,) or a semicolon
            (;) as the separator. Tab or other separators are not allowed.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4">Data Privacy</h3>
          <p>
            As the authors and maintainers of the K-Alpha Calculator, we are
            committed to preserving high standards of ethical conduct in data
            management and user privacy. We assure users that all data input
            into the K-Alpha Calculator remains exclusively within the user's
            domain, as this calculator operates entirely on the user's local
            machine. This guarantees that no data is retained, stored, or
            transmitted to external servers or storage systems.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
