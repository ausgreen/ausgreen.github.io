import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Snap Simple — Privacy Policy",
};

export default function SnapSimplePrivacy() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-20 text-gray-900">
      <h1 className="text-2xl font-semibold tracking-tight mb-2">
        Snap Simple — Privacy Policy
      </h1>
      <p className="text-gray-400 text-sm mb-12">Last updated: May 2026</p>

      <p className="text-gray-600 leading-relaxed mb-8">
        Snap Simple is a camera companion app for CampSnap cameras. This policy explains
        how the app handles your data.
      </p>

      <section className="mb-8">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
          Data we collect
        </h2>
        <p className="text-gray-600 leading-relaxed">
          None. Snap Simple does not collect, transmit, or store any personal data on
          external servers. The app has no analytics, no accounts, and no internet
          connection.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
          Permissions
        </h2>
        <p className="text-gray-600 leading-relaxed">
          <strong className="text-gray-800">
            Storage access (MANAGE_EXTERNAL_STORAGE)
          </strong>{" "}
          — required to read photos and filter files from your CampSnap camera when
          connected via USB. This permission is used solely to access the camera storage
          and save photos to your device. No files are accessed beyond what you explicitly
          select.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
          Photos
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Photos are transferred directly from your camera to your device. They never
          leave your device and are not uploaded anywhere.
        </p>
      </section>

      <section>
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
          Contact
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Questions? Email{" "}
          <a
            href="mailto:austin@austingreen.net"
            className="text-gray-900 hover:text-gray-500 transition-colors"
          >
            austin@austingreen.net
          </a>
        </p>
      </section>
    </main>
  );
}
